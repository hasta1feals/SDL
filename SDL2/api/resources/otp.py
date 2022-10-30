from flask import request
from flask_bcrypt import generate_password_hash
from db import DB
import pyotp
from dotenv import load_dotenv
import os



def create_otp():
    # Dit moet ff een .ENV beter worden gezet NIET VEILIG ZO en gebruik //pyotp.random_base32()// voor random key
    secret="JBSWY3DPEHPK3PXP"
    
    #Dit zorgt ervoor met de secret dat pyotp een token genereerd dat kan worden geparst naar een barcode die je dan kan scaannen.
    otp = pyotp.totp.TOTP(secret).provisioning_uri(name='info@dijkstraenvanpuffelen.nl', issuer_name='Dijkstra en van Puffelen')

    print(otp)
    #Dit is de code die in de google app staat zo kunnen we het vergelijken met de code die de gebruiker invoert.
    otp_code = pyotp.totp.TOTP(secret).now()

    #ff vragen als dit wel veilig is of dat we dit moeten veranderen. Want je stuurt wel de otp code steeds heen en weer
    return{'message': 'success', 'id': otp_code}
