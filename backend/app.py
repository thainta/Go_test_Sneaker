from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://thainta:DxWj19ZnHBLYponUDyjCHrDOTv6FZxRB@dpg-cksuth8168ec73eooj8g-a.singapore-postgres.render.com/go_test_n0k5"
CORS(app)
app.app_context().push()

db = SQLAlchemy(app)

class Shoes(db.Model):
    __tablename__ = 'shoes'

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(255),  nullable=False)
    name = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    price = db.Column(db.Float, nullable=False)
    color = db.Column(db.String(120), nullable=False)

    def json(self):
        return {'id': self.id,'image': self.image, 'name': self.name,'description': self.description,'price': self.price,'color': self.color}

db.create_all()

from controller import controller


