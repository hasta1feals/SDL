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

def get_medewerker(): 
    qry = '''
    SELECT
      firstname, lastname, email, id
         FROM `users`
          ORDER BY firstname;


    '''
    try:
        id = DB.all(qry)
    except Exception:
        print('Er is een probleem opgetreden, contact de admin.');

    return {'message': 'success', 'id': id}, 201




def get_projecten2():
    # qry om users te laten zien
    qry = '''
   SELECT project.naam, project.id, klanten.voornaam klantennaam ,project.begin , users.firstname 
FROM project
INNER JOIN users
ON klanten.id = project.klanten_id
INNER JOIN klanten
ON users.id = project.user_id
 where project.show = 0


    '''
    try:
        id = DB.all(qry)
    except Exception:
        print('Er is een probleem opgetreden, contact de admin.');

    return {'message': 'success', 'id': id}, 201





def get_klanten2():
    # qry om users te laten zien
    qry = '''
 SELECT klanten.voornaam, klanten.achternaam , klanten.adres, klanten.woonplaats, klanten.huisnummer, klanten.telefoon, klanten.postcode, project.naam
FROM klanten
left JOIN project
ON klanten.id = project.klanten_id
WHERE klanten.show = 0;

    '''
    try:
        id = DB.all(qry)
    except Exception:
        print('Er is een probleem opgetreden, contact de admin.');

    return {'message': 'success', 'id': id}, 201



def get_uren2():
    # qry om users te laten zien
    qry = '''
SELECT uren.datum, uren.activiteit, uren.uren_uren, uren.bonus, uren.opmerking, uren.uren_declarabel, project.naam, users.firstname, klanten.voornaam
FROM uren
left JOIN project
ON uren.project_id = project.id
left JOIN users
ON uren.user_id = users.id
left JOIN klanten
ON uren.klanten_id = klanten.id

    '''
    try:
        id = DB.all(qry)
    except Exception:
        print('Er is een probleem opgetreden, contact de admin.');

    return {'message': 'success', 'id': id}, 201    



def get_uren3():
    # qry om users te laten zien
    qry = '''
SELECT uren.datum, uren.activiteit, uren.uren_uren, uren.bonus, uren.opmerking, uren.uren_declarabel, project.naam, users.firstname, klanten.voornaam
FROM uren
left JOIN project
ON uren.project_id = project.id
left JOIN users
ON uren.user_id = users.id
left JOIN klanten
ON uren.klanten_id = klanten.id
where myID = id

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
              `project` (`klanten_id` ,`begin`, `naam`, 'user_id', 'show')
           VALUES (:klanten_id , :begin, :naam, :user_id, :show);
    '''
   
    data = {
        "klanten_id": args["klanten_id"],
        "begin": args["begin"],
        "naam": args["naam"],
        "user_id": args["user_id"],
        "show": args["show"]
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
              `klanten` ( voornaam, woonplaats,huisnummer, adres, postcode, telefoon, 'show')
           VALUES (:voornaam, :woonplaats, :adres,:huisnummer, :postcode, :telefoon, :show);
    '''
   
    data = {
        "voornaam": args["voornaam"],
        "woonplaats": args["woonplaats"],
        "huisnummer": args["huisnummer"],
        "adres": args["adres"],
        "postcode": args["postcode"],
        "telefoon": args["telefoon"],
        "show": args["show"]
    
        }
    try:
        id = DB.insert(qry, data)
    except Exception:
        print('Er is een probleem opgetreden, contact de admin.')
        
    return {'message': 'success', 'id': id}, 201


def create_uren():
    # Parse all arguments for validity
    args = request.get_json()
    # Make the insert query with parameters
    qry = '''
          INSERT INTO
              uren ( datum, activiteit,uren_uren, bonus, opmerking, uren_declarabel, project_id, user_id, klanten_id, myID)
           VALUES (:datum, :activiteit, :uren_uren, :bonus, :opmerking, :uren_declarabel, :project_id, :user_id, :klanten_id, :myID);
    '''
   
    data = {
        "datum": args["datum"],
        "activiteit": args["activiteit"],
        "uren_uren": args["uren_uren"],
        "bonus": args["bonus"],
        "opmerking": args["opmerking"],
        "uren_declarabel": args["uren_declarabel"],
        "project_id": args["project_id"],
        "user_id": args["user_id"],
        "klanten_id": args["klanten_id"],
        "myID": args["myID"]
    
        }
    try:
        id = DB.insert(qry, data)
    except Exception:
        print('Er is een probleem opgetreden, contact de admin.')
        
    return {'message': 'success', 'id': id}, 201


@jwt_required()
def delete_project():
    user = get_jwt_identity()

    args = request.get_json()
    print(user)

    qry = '''
 UPDATE project SET `show` = :show
WHERE id = :id;

    '''
    data = {
    
          "id": args["id"],
        "show": 1
       
        }
    
    model = DB.update(qry,data)
    
    return {'message': 'success', 'id': model}, 201


@jwt_required()
def delete_klanten():
    user = get_jwt_identity()

    args = request.get_json()
    print(user)

    qry = '''
 UPDATE klanten SET `show` = :show
WHERE id = :id;

    '''
    data = {
    
          "id": args["id"],
        "show": 1
       
        }
    
    model = DB.update(qry,data)
    
    return {'message': 'success', 'id': model}, 201




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
        
    print('Er is een probleem opgetreden, contact de admin.')
    #Print alles wat ik hierboven heb gemaakt!
    return {'message': 'success', 'user': user}, 201    

@jwt_required()
def get_uren3():

    user = get_jwt_identity()

    # qry om users te laten zien
    qry = '''
SELECT uren.datum, uren.activiteit, uren.uren_uren, uren.bonus, uren.opmerking, uren.uren_declarabel, project.naam, users.firstname, klanten.voornaam
FROM uren
left JOIN project
ON uren.project_id = project.id
left JOIN users
ON uren.user_id = users.id
left JOIN klanten
ON uren.klanten_id = klanten.id
where myID = :id

    '''

    data = {
        "id": user["id"]
    }
    try:
        id = DB.all(qry , data)
    except Exception:
        print('Er is een probleem opgetreden, contact de admin.')

    return {'message': 'success', 'id': id}, 201    

@jwt_required()
def get_medewerker2(): 
    user = get_jwt_identity()

    qry = '''
       SELECT
      firstname, lastname, email, id
         FROM `users`
		  where id = :id
          ORDER BY firstname
		 
    '''
    
    data = {
        "id": user["id"]
    }
    try:
        id = DB.all(qry, data)
    except Exception:
        print('Er is een probleem opgetreden, contact de admin.');

    return {'message': 'success', 'id': id}, 201


@jwt_required()
def get_usersId():
    # Parse all arguments for validity
    user = get_jwt_identity()
    #qry uit de database hier wordt de secret gehaald
    qry = '''
     SELECT
        `id`
         FROM `users` where `id` = :id
    '''
    data = {
        "id": user["id"]
    }
    try:
        user = DB.all(qry, data)
    except Exception:
        print('Er is een probleem opgetreden, contact de admin.')

    x = str(user)
    y = x[8:10]

    #Print alles wat ik hierboven heb gemaakt!
    print(y )
   
    return {'message': 'success', 'user': y}, 201    

