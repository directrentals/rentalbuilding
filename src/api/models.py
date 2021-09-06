from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Building(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(120))
    street = db.Column(db.String(120))
    street2 = db.Column(db.String(120))
    city = db.Column(db.String(120))
    state = db.Column(db.String(2))
    zipcode = db.Column(db.String(5))
    manager_id = db.Column(db.Integer, db.ForeignKey("user.id"),nullable=False)
    manager = db.relationship("User")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "phone": self.phone,
            "street": self.street,
            "street2": self.street2,
            "city": self.city,
            "state": self.state,
            "zipcode": self.zipcode,
            
                
            }


class Unit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    owner_id =  db.Column(db.Integer, db.ForeignKey("user.id"),nullable=False)
    owner = db.relationship("User")
    building_id = db.Column(db.Integer, db.ForeignKey("building.id"),nullable=False)
    building = db.relationship("Building")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            

            }



class Tenant(db.Model):
    __tablename__ = "tenant"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    unit_id = db.Column(db.Integer, db.ForeignKey("unit.id"),nullable=False)
    unit = db.relationship("Unit")
    check_in = db.Column(db.DateTime(timezone = True))
    check_out = db.Column(db.DateTime(timezone = True))
    status = db.Column(db.String(20), nullable =False, default="created")
    pax = db.Column(db.Text, nullable =False)
    pax_count = db.Column(db.Integer)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "unit_id": self.unit_id,
            "check_in": self.check_in,
            "check_out": self.check_out,
            "status": self.status,
            "pax": self.pax,
            "pax_count": self.pax,

                }



