from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Building(db.Model):
    __tablename__ = "building"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(120))
    street = db.Column(db.String(120))
    street2 = db.Column(db.String(120))
    city = db.Column(db.String(120))
    state = db.Column(db.String(2))
    zipcode = db.Column(db.String(5))
    manager_id = db.Column(Integer, ForeignKey("user.id"),nullable=False)





class Unit(db.Model):
    __tablename__ = "unit"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    owner_id =  db.Column(Integer, ForeignKey("user.id"),nullable=False)
    building_id = db.Column(Integer, ForeignKey("building.id"),nullable=False)




class UnitBuilding(Base):
    __tablename__ = 'unitBuilding'
    id = db.Column(db.Integer, primary_key=True)
    unit_id = db.Column(Integer, ForeignKey("unit.id"),nullable=False)
    building_id = db.Column(Integer, ForeignKey("building.id"),nullable=False)



class Tenant(db.Model):
    __tablename__ = "tenant"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    unitBuilding = db.Column(Integer, ForeignKey("unitBuilding.id"),nullable=False)
    firstday = db.Column(db.Date(120))
    lastday = db.Column(db.Date(120))




