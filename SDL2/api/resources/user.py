from flask import request
from flask_bcrypt import generate_password_hash
from db import DB
import pyotp
import string    
import random # define the random module  


from flask_jwt_extended import (
    jwt_required,
    create_access_token,
    get_jwt_identity
)
from datetime import date

def create_user():
    # Parse all arguments for validity
    args = request.get_json()

    # Make the insert query with parameters
    qry = '''
    INSERT INTO
        `users`
            (`email`, `password`, `firstname`, `lastname`, `admin`,`secret`)
        VALUES
            (:email, :password, :firstname, :lastname, :admin, :secret)
    '''
    s =pyotp.random_base32()
       # Hash the password before inserting
    args['password'] = generate_password_hash(args['password'])
    args['secret'] = s
    
    # Insert the user into the database
    id = DB.insert(qry, args)
    # Return a message and the user id
    return {'message': 'succes', 'id': id}, 201

@jwt_required()
def get_otp():
    # Parse all arguments for validity
    user = get_jwt_identity()
    qry = '''
     SELECT
        `secret`
         FROM `users` where `id` = :id
    '''
    data = {
        "id": user["id"]
    }
    try:
        reservatie = DB.all(qry, data)
    except Exception:
        print('Er is een probleem opgetreden, contact de admin.')

    listToStr = ' '.join([str(elem) for elem in reservatie])

    otp = pyotp.totp.TOTP(listToStr[12:44]).provisioning_uri(name='info@dijkstraenvanpuffelen.nl', issuer_name='Dijkstra en van Puffelen')
    otp_code = pyotp.totp.TOTP(listToStr[12:44]).now()
    

    print (reservatie)
    print (listToStr[12:44])
 

    return {'message': 'success', 'reservatie': reservatie, 'otp': otp_code , "barcode": otp}, 201    



