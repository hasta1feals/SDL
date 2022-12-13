from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from db import DB
from security import login, me
from resources.user import create_user, get_otp, get_users, create_projecten, get_projecten, create_klanten, get_klanten, get_projecten2, get_medewerker, get_klanten2
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
app.add_url_rule('/projecten', None, get_projecten, methods=['GET'])
app.add_url_rule('/projecten2', None, get_projecten2, methods=['GET'])
app.add_url_rule('/otpp', None, get_otp, methods=['GET'])
app.add_url_rule('/klanten', None, create_klanten, methods=['POST'])
app.add_url_rule('/klanten', None, get_klanten, methods=['GET'])
app.add_url_rule('/klanten2', None, get_klanten2, methods=['GET'])
app.add_url_rule('/medewerker', None, get_medewerker, methods=['GET'])









# Start app
if __name__ == '__main__':
    DB.create()
    app.run()