"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Tenant, Unit, Building
# from flask_cors import CORS
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from argon2 import PasswordHasher

ph = PasswordHasher()
api = Blueprint('api', __name__)

# CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST'])
def register():
    content = request.get_json(silent=True)
    user = User(email = content["email"], password = ph.hash(content["password"]), is_active = True)

    db.session.add(user)
    db.session.commit()

    response_body = {
        "message": "User Created"
    }

    return jsonify(response_body), 204

@api.route('/login', methods=['POST'])
def login():

    content = request.get_json()
    print(content)
    user = User.query.filter(User.email == content["email"]).first()
    if user is None:
        return jsonify({"message": "invalid user"}), 403
    
    try:
        ph.verify(user.password, content["password"])
    except:
        return jsonify({"message": "invalid password"}), 403
        
    access_token = create_access_token(identity=user.id, additional_claims={"email":user.email})
    return jsonify({ "token": access_token, "user_id": user.id })

@api.route('/userinfo', methods=['GET'])
@jwt_required()
def userinfo():
    current_user_id = get_jwt_identity()
    
    user = User.query.filter(User.id == current_user_id).first()
    
    response_body = {
        "message": f"Hello {user.email} "
    }

    return jsonify(response_body), 200


@api.route('/buildinginfo/<int:id>', methods=['GET'])
@jwt_required()
def buildinginfo(id):
    
    building = Building.query.filter(Building.id == id).first()
    return jsonify(building.serialize()), 200


@api.route('/unitinfo/<int:id>', methods=['GET'])
@jwt_required()
def unitinfo(id):

    unit = Unit.query.filter(Unit.id == id).first()
    return jsonify(unit.serialize()), 200


@api.route('/tenantinfo/<int:id>', methods=['GET'])
@jwt_required()
def tenantinfo(id):

    tenant = Tenant.query.filter(Tenant.id == id).first()
    return jsonify(tenant.serialize()), 200


@api.route('/building', methods=['POST'])
@jwt_required()
def register_building():
    content = request.get_json(silent=True)
    current_user_id = get_jwt_identity()
    building = Building(
        name = content["name"], 
        phone = content["phone"], 
        street = content["street"], 
        street2 = content["street2"], 
        city = content["city"], 
        state = content["state"], 
        zipcode = content["zipcode"], 
        manager_id = current_user_id
    )

    db.session.add(building)
    db.session.commit()

    response_body = {
        "message": "Building Registered"
    }
    return jsonify(response_body), 200

@api.route('/tenant/<int:id>', methods=['PATCH'])
@jwt_required()
def checkin_tenant(id):
    content = request.get_json(silent=True)
    current_user_id = get_jwt_identity()
    tenant = Tenant.query.filter(Tenant.id == id).first()
    if tenant.unit.building.manager_id != current_user_id:
        return jsonify({"message": "Unauthorized user"}), 403

    tenant.fob = content["fob"]
    tenant.status = "checked in"
    tenant.save()
    db.session.commit()

    response_body = {
        "message": "Tenant Checked in"
    }
    return jsonify(response_body), 200


@api.route('/register-owner', methods=['POST'])
def register_owner():
    content = request.get_json(silent=True)
    user = User(
        email = content["email"], 
        password = ph.hash(content["password"]), 
        is_active = True
    )
  
    db.session.add(user)
    db.session.commit()
    unit = Unit(
        name = content["name"],
        owner_id = user.id,
        building_id = content["building_id"]
    )
    db.session.add(unit)

    response_body = {
        "message": "Owner Created"
    }

    return jsonify(response_body), 204


@api.route('/tenant', methods=['POST'])
@jwt_required()
def register_tenant():
    content = request.get_json(silent=True)
    current_user_id = get_jwt_identity()
    tenant = Tenant(
        name = content["name"], 
        email = content["email"],
        unit_id = content["unit_id"], 
        check_in = content["check_in"],
        check_out = content["check_out"],
        pax = content["pax"],
        pax_count = len(content["pax"].split(",")) + 1
    )
    db.session.add(tenant)
    db.session.commit()
    response_body = {
        "message": "Tenant Registered"
    }
    return jsonify(response_body), 200