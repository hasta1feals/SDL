from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from db import DB
from security import login, me
from resources.user import create_user, get_otp, get_users, create_projecten
# Create a new Flask application
app = Flask(__name__)
app.debug = True

# Enable cors on the server
CORS(app)

# Register the JWT manager
app.config['JWT_SECRET_KEY'] = 'super-secret' # Change this!
jwt = JWTManager(app)
# ============================ Routes ============================

# JWT routes
app.add_url_rule('/users', None, create_user, methods=['POST'])
app.add_url_rule('/users', None, get_users, methods=['GET'])
app.add_url_rule('/auth', None, login, methods=['POST'])
app.add_url_rule('/me', None, me, methods=['GET'])
app.add_url_rule('/projecten', None, create_projecten, methods=['POST'])
app.add_url_rule('/otpp', None, get_otp, methods=['GET'])






# Start app
if __name__ == '__main__':
    DB.create()
    app.run()