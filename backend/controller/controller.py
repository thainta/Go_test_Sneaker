from app import app, Shoes
import psycopg2
from flask import jsonify
@app.route("/shoes")
def index():
    shoes = Shoes.query.all()
    return jsonify([shoe.json() for shoe in shoes])