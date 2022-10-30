

//Verscrikkele manier en onveilige manier om een qr code te genereren. Vraag bram ff hoe je dit beter kan doen. En waarom je geen import stateMENTS mag gebruiken in js
img = document.getElementById("qr");
img.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=otpauth://totp/Dijkstra%20en%20van%20Puffelen:info%40dijkstraenvanpuffelen.nl?secret=JBSWY3DPEHPK3PXP&issuer=Dijkstra%20en%20van%20Puffelen"


function register(e) {
    // Check if passwords match

    // Fetch data from html

    // Submit data to API
}

function login() {
    // Fetch data from html
    data = {
        password: getValue("password2"),
        email: getValue("email2"),
    };
    // Submit data to API
    
    api("auth", 'POST', data).then((res) => {
        if (res.message == 'success') {
            // Save the received JWT in a cookie
            setCookie("token", res.access_token, 365);
            console.log("gelukt")
            getUser();
           

        } else {
            alert("Credentials are incorrect");
        }
    });
    
}



function login2fa() {
    // Fetch data from html
    data = {
        otp_code: getValue("code"),
    };
    // Submit data to API
    
    api("otp", 'GET', data).then((res) => {
        if (res.id== getValue("code")) {
            // Save the received JWT in a cookie
            setCookie("token", res.access_token, 365);
          console.log("gelukt")
           

        } else {
            alert("Credentials are incorrect");
        }
    });
    
}




function getUser() {
    // Fetch user data from API
    api("me").then((res) => {
        if (res.message == 'success') {
            document.getElementById('welcome').innerText = `Welcome, ${res.user.firstname} ${res.user.lastname}`;
            console.log("user id: " + res.user.id)
            //als user id 1 is dan is het admin account
            if (res.user.admin === 1) {
                showPage('otpPage');
                
            } else {
                //hier moet de normale pagina komen voor medewerkers
                console.log("user is geen admin")
            }        
        }

            
    });
}

function link(){
    showPage('otpPage')
    
}


// Helper functions

function showPage(id){
    let pages = document.getElementsByClassName("container");
    for(let i = 0; i < pages.length; i++){
        pages[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}

function qrbtn() {
    x = document.getElementById("qr");
    if(x.style.display == "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}


function bindEvents() {
    connectButton("register", register);
    connectButton("login", login);
    connectButton("login2fa", login2fa);
   



    enableSubmits();
}

function enableSubmits(){
    document.body.addEventListener("keydown", function (e) {
        if (e.key == "Enter") { // if enter is pressed
            console.log(e);
            let target = e.target;
            while (!target.className.includes('input')) {
                console.log(target);
                target = target.parentElement;
            }
            target.parentElement.getElementsByTagName("button")[0].click(); // click the first button
        }
    });
}

function connectButton(id, event) {
    let element = document.getElementById(id);
    if (element) {
        element.addEventListener("click", event);
    }
}

function getValue(id) {
    let element = document.getElementById(id);
    if (element) {
        return element.value;
    }
    return "";
}

function api(endpoint, method = 'GET', data = {}) {
    const API = "http://127.0.0.1:5000/";
    return fetch(API + endpoint, {
        method: method,
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getCookie("token"),
        },
        body: method == 'GET' ? null : JSON.stringify(data),
    }).then((res) => res.json());
}

// Cookie functions stolen from w3schools (https://www.w3schools.com/js/js_cookies.asp)
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
    setCookie(cname, "", -1);
}

bindEvents();
