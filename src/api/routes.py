"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
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


@api.route('/buildinginfo', methods=['GET'])
@jwt_required()
def buildinginfo():
    current_user_id = get_jwt_identity()

    building = Building.query.filter_by(manager_id = current_user_id)
    buildingdata = list(map(lambda item:item.serialize(),building))
    return jsonify(buildingdata)


@api.route('/unitinfo', methods=['GET'])
@jwt_required()
def unitinfo():
    current_user_id = get_jwt_identity()

    unit = Unit.query.filter_by(owner_id = current_user_id)
    unitdata = list(map(lambda item:item.serialize(),unit))
    return jsonify(unitdata)


@api.route('/tenantinfo', methods=['GET'])
@jwt_required()
def tenantinfo():
    current_user_id = get_jwt_identity()

    tenant = Tenant.query.filter_by(owner_id = current_user_id)
    tenantdata = list(map(lambda item:item.serialize(),tenant))
    return jsonify(tenantdata)