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



def get_projecten():
    # qry om users te laten zien
    qry = '''
    SELECT
      *
         FROM `project`
          ORDER BY naam;


    '''
    try:
        id = DB.all(qry)
    except Exception:
        print('Er is een probleem opgetreden, contact de admin.');

    return {'message': 'success', 'id': id}, 201

    
def get_projecten2():
    # qry om users te laten zien
    qry = '''
   SELECT project.naam , klanten.voornaam klantennaam ,project.begin , users.firstname 
FROM project
INNER JOIN users
ON klanten.id = project.klanten_id
INNER JOIN klanten
ON users.id = project.user_id


    '''
    try:
        id = DB.all(qry)
    except Exception:
        print('Er is een probleem opgetreden, contact de admin.');

    return {'message': 'success', 'id': id}, 201




def get_klanten():
    # qry om klantente laten zien!
    qry = '''
    SELECT
      *
         FROM `klanten`
         ORDER BY voornaam;


    '''
    try:
        id = DB.all(qry)
    except Exception:
        print('Er is een probleem opgetreden, contact de admin.');

    return {'message': 'success', 'id': id}, 201

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
    args['admin'] = 0
    args['secret'] = s
    
    print(args)
    
    # Insert the user into the database
    id = DB.insert(qry, args)
    # Return a message and the user id
    return {'message': 'success', 'id': id}, 201



def create_projecten():
    # Parse all arguments for validity
    args = request.get_json()
    # Make the insert query with parameters
    qry = '''
            INSERT INTO 
              `project` (`klanten_id` ,`begin`, `naam`)
           VALUES (:klanten_id , :begin, :naam);
    '''
   
    data = {
        "klanten_id": args["klanten_id"],
        "begin": args["begin"],
        "naam": args["naam"]
        }
    try:
        id = DB.insert(qry, data)
    except Exception:
        print('Er is een probleem opgetreden, contact de admin.')
        
    return {'message': 'success', 'id': id}, 201

def create_klanten():
    # Parse all arguments for validity
    args = request.get_json()
    # Make the insert query with parameters
    qry = '''
          INSERT INTO 
              `klanten` ( voornaam, achternaam, woonplaats, adres, postcode, telefoon)
           VALUES (:voornaam, :achternaam, :woonplaats, :adres, :postcode, :telefoon);
    '''
   
    data = {
        "voornaam": args["voornaam"],
        "achternaam": args["achternaam"],
        "woonplaats": args["woonplaats"],
        "adres": args["adres"],
        "postcode": args["postcode"],
        "telefoon": args["telefoon"]
        }
    try:
        id = DB.insert(qry, data)
    except Exception:
        print('Er is een probleem opgetreden, contact de admin.')
        
    return {'message': 'success', 'id': id}, 201




#kijk ff als het slim is om de secret te hashen kost niet veel moeite maar dubbel check het 
@jwt_required()
def get_otp():
    # Parse all arguments for validity
    user = get_jwt_identity()
    #qry uit de database hier wordt de secret gehaald
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

    # Hier onder wordt de qry gezet in een String
    listToStr = ' '.join([str(elem) for elem in reservatie])

    # Met pyotp kan ik dus 2fa codes aanmaken dat hier onder gebereurd, 12:44 is letterlijk alleen de secret string die ik heb opgeslagen in de database
    otp = pyotp.totp.TOTP(listToStr[12:44]).provisioning_uri(name='info@dijkstraenvanpuffelen.nl', issuer_name='Dijkstra en van Puffelen')
    otp_code = pyotp.totp.TOTP(listToStr[12:44]).now()
    
 
    #Print alles wat ik hierboven heb gemaakt!
    return {'message': 'success', 'reservatie': reservatie, 'otp': otp_code , "barcode": otp}, 201    


@jwt_required()
def get_users():
    # Parse all arguments for validity
    user = get_jwt_identity()
    #qry uit de database hier wordt de secret gehaald
    qry = '''
     SELECT
        `*`
         FROM `users` where `id` = :id
    '''
    data = {
        "id": user["id"]
    }
    try:
        user = DB.all(qry, data)
    except Exception:
        print('Er is een probleem opgetreden, contact de admin.')

    #Print alles wat ik hierboven heb gemaakt!
    return {'message': 'success', 'user': user}, 201    


