//Verscrikkele manier en onveilige manier om een qr code te genereren. Vraag bram ff hoe je dit beter kan doen. En waarom je geen import stateMENTS mag gebruiken in js

function register(e) {
  // Check if passwords match
  if (getValue("password3") != getValue("password4")) {
    alert("Passwords do not match");
    return;
  }
  data = {
    password: getValue("password3"),
    email: getValue("email3"),
    firstname: getValue("voornaam"),
    lastname: getValue("achternaam"),
    admin: 0,
    // s: 137173187381783
  };

  console.log(data);

  // Submit data to API
  api("users", "POST", data).then((res) => {
    if (res.message == "success") {
      userAanmaken();
      alert("Account created");
    }
  });
}



function projectPosten() {
  let x = idProject.toString()
  let y = idMedewerker.toString()

  data = {
    naam: getValue("projectNaam"),
    begin: getValue("projectBeginDatum"),
    klanten_id: x,
    user_id: y
    
  
  };

  console.log(data);

  // Submit data to API
  api("projecten", "POST", data).then((res) => {
    if (res.message == "success") {
    console.log("gelukt")
    }else{
      console.log("niet gelukt")
    }
  });
}

function urenPosten() {
  let x = idUrenKlanten.toString()
  let y = idUrenProject.toString()
  let z = idMedewerkerUren.toString()

  data = {
    datum: getValue("Datum"),
    activiteit: getValue("Activiteit"),
    uren_uren:getValue("Uren"),
    bonus: getValue("Bonus"),
    opmerking: getValue("Opmerking"),
    uren_declarabel: getValue("Aantal-Declarabel"),
    project_id: y, 
    klanten_id: x,
    user_id: z,
  
  };

  console.log(data);

  // Submit data to API
  api("uren", "POST", data).then((res) => {
    if (res.message == "success") {
    console.log("gelukt")
    }else{
      console.log("niet gelukt")
    }
  });
}




function KlantenPosten() {

  

  data = {
    voornaam: getValue("klant"),
    woonplaats: getValue("Woonplaats"),
    adres: getValue("Straat"),
    huisnummer: getValue("huisnummer1"),
    postcode: getValue("Postcode"),
    telefoon: getValue("Telefoon"),
 
   
    
  
  };

  console.log(data);

  // Submit data to API
  api("klanten", "POST", data).then((res) => {
    if (res.message == "success") {
    console.log("gelukt")
    klantenKlanten()
<<<<<<< HEAD
    }else{
      console.log("niet gelukt")
=======
>>>>>>> ca038e587e27f7eb9a14eb857dd890d02d4f6a7f
    }
    
  });
}









function login() {
  // Fetch data from html
  data = {
    password: getValue("password2"),
    email: getValue("email2"),
  };
  // Submit data to API

  api("auth", "POST", data).then((res) => {
    if (res.message == "success") {
      // Save the received JWT in a cookie
      setCookie("token", res.access_token, 365);
      console.log("gelukt");
      getUser();
      // showPage("dashboardPage");
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

  api("otpp", "GET", data).then((res) => {
    if (res.otp == getValue("code")) {
      // Save the received JWT in a cookie
      setCookie("token", res.access_token, 365);
      console.log("gelukt");
      // window.location.href="dashbord.html";
      userInfo();
      showPage("dashboardPage");
    } else {
      alert("Credentials are incorrect");
    }
  });
}

function showQrCode() {
  // hier roep ik otp aan en kan ik de qr code van pakken, dit is 1000000000% niet veilig ik moet ff vragen als ik een libary kan gebruiken in js
  api("otpp", "GET", data).then((res) => {
    img = document.getElementById("qr");
    img.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      res.barcode;
  });
}

function userInfo() {
  //
  api("users", "GET", data).then((res) => {
    text = document.getElementById("ww");
    console.log(res.user.firstname);
    text.innerText = res.user.firstname + " " + res.user.lastname;
  });
}

function getUser() {
  // Fetch user data from API
  api("me").then((res) => {
    if (res.message == "success") {
      document.getElementById(
        "welcome"
      ).innerText = `Welcome, ${res.user.firstname} ${res.user.lastname}`;
      console.log("user id: " + res.user.id);
      // showPage("otpPage");
      // showQrCode();
      // window.location.href="dashbord.html";
      showPage("dashboardPage");
      projectUren();
      klantenUren();
      klantenProject()
      medewerkerProject();
      klantenNaam();
      // showPage("registerPage")
      projectProject();
      klantenKlanten();
      urenUren();
      klantenProjectProject();
      userInfo();
      projectUrenMedewerker();
    }
  });
}

function projectUren() {
  api("projecten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selection").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].naam +
          "</option>";
      }
    }
  });
}

function klantenProjectProject() {
  api("projecten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selectionKlantProject").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].naam +
          "</option>";
      }
    }
  });
}


function projectUren() {
  api("projecten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selection").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].naam +
          "</option>";
      }
    }
  });
}


function projectUrenMedewerker() {
  api("medewerker", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selectionMedewerkerUren").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].firstname +
          "</option>";
      }
    }
  });
}

function projectProject() {
  api("projecten2", "GET").then((res) => {
    if (res.message == "success") {

      const table = document.getElementById("myTable1");




      for (i = 0; i < res.id.length; i++) {
        const data = res.id[i];
        
      // Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(i + 1);
console.log(data)
// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);

// Add some text to the new cells:
cell1.innerHTML = data.naam
cell2.innerHTML = data.firstname
cell3.innerHTML = data.klantennaam
cell4.innerHTML = data.begin


      }
    }
  });
}


function klantenKlanten() {
  api("klanten2", "GET").then((res) => {
    if (res.message == "success") {

      const table = document.getElementById("myTable2");




      for (i = 0; i < res.id.length; i++) {
        const data = res.id[i];
        
      // Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(i + 1);
console.log(data)
// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);


// Add some text to the new cells:
cell1.innerHTML = data.voornaam
cell2.innerHTML = data.adres
cell3.innerHTML = data.huisnummer
cell4.innerHTML = data.postcode
cell5.innerHTML = data.woonplaats
cell6.innerHTML = data.telefoon

<<<<<<< HEAD




      }
    }
  });
}



function urenUren() {
  api("uren", "GET").then((res) => {
    if (res.message == "success") {

      const table = document.getElementById("myTable");




      for (i = 0; i < res.id.length; i++) {
        const data = res.id[i];
        
      // Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(i + 1);
console.log(data)
// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
var cell8 = row.insertCell(7);
var cell9 = row.insertCell(8);


// Add some text to the new cells:
cell1.innerHTML = data.datum
cell2.innerHTML = data.activiteit
cell3.innerHTML = data.uren_uren
cell4.innerHTML = data.bonus
cell5.innerHTML = data.opmerking
cell6.innerHTML = data.uren_declarabel
cell7.innerHTML = data.naam
cell8.innerHTML = data.firstname
cell9.innerHTML = data.voornaam

=======
>>>>>>> ca038e587e27f7eb9a14eb857dd890d02d4f6a7f




      }
    }
  });
}


function klantenUren() {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        console.log(res);
        document.getElementById("selectionKlanten").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].voornaam +
          "</option>";
      }
    }
  });
}

function klantenProject() {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        console.log(res);
        document.getElementById("selectionKlanten1").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].voornaam +
          "</option>";
      }
    }
  });
}
function medewerkerProject() {
  api("medewerker", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        console.log(res);
        document.getElementById("selectionMedewerker").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].firstname +
          "</option>";
      }
    }
  });
}



function klantenNaam() {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        console.log(res);
        document.getElementById("selectionKlantKlant").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].voornaam +
          "</option>";
      }
    }
  });
}



let selectionProject = document.querySelector('#selectionKlanten1');
var idProject = []

selectionProject.addEventListener('change', () => {
  api("klanten", 'GET').then((res) => {
      if (res.message == 'success') {
          for (i = 0; i < res.id.length; i++) {
              if (res.id[i].id == selectionProject.value) {


                  idProject.push(res.id[i].id);


                  break;
              }


          }


      }
  })
})





let selectionMedewerker = document.querySelector('#selectionMedewerker');
var idMedewerker = []

selectionMedewerker.addEventListener('change', () => {
  api("medewerker", 'GET').then((res) => {
      if (res.message == 'success') {
          for (i = 0; i < res.id.length; i++) {
              if (res.id[i].id == selectionMedewerker.value) {

                  idMedewerker.push(res.id[i].id);


                  break;
              }


          }


      }
  })
})



let selectionMedewerkerUren = document.querySelector('#selectionMedewerkerUren');
var idMedewerkerUren = []

selectionMedewerkerUren.addEventListener('change', () => {
  api("medewerker", 'GET').then((res) => {
      if (res.message == 'success') {
          for (i = 0; i < res.id.length; i++) {
              if (res.id[i].id == selectionMedewerkerUren.value) {

                idMedewerkerUren.push(res.id[i].id);


                  break;
              }


          }


      }
  })
})


let selectionUrenMedewerker = document.querySelector('#selectionKlanten');
var idUrenKlanten = []

selectionUrenMedewerker.addEventListener('change', () => {
  api("klanten", 'GET').then((res) => {
      if (res.message == 'success') {
          for (i = 0; i < res.id.length; i++) {
              if (res.id[i].id == selectionUrenMedewerker.value) {

                  idUrenKlanten.push(res.id[i].id);


                  break;
              }


          }


      }
  })
})



let selectionUrenProject = document.querySelector('#selectionKlanten');
var idUrenProject = []

selectionUrenProject.addEventListener('change', () => {
  api("projecten", 'GET').then((res) => {
      if (res.message == 'success') {
          for (i = 0; i < res.id.length; i++) {
              if (res.id[i].id == selectionUrenProject.value) {

                idUrenProject.push(res.id[i].id);


                  break;
              }


          }


      }
  })
})




function link() {
  showPage("otpPage");
}

// Helper functions

function showPage(id) {
  let pages = document.getElementsByClassName("container");
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

function qrbtn() {
  x = document.getElementById("qr");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function userAanmaken() {
  showPage("dashboardPage");
}

function klanten() {
  showPage("klantenPage");
}

function projecten() {
  showPage("projectenPage");
}

function regerop() {
  showPage("dashboardPage");
}
function klantenPostenButton(){
  KlantenPosten();
 
  console.log("test test")
  
}
// Deze is niet meer nodig funcite werkt nu via een html/css verbinding
// function projectToevoegenConfirm() {
//   showPage("popupCenter");
// }

// Ref-linken van buttons: toevoegen -> overzicht BEGIN
function projectToevoegenCancel() {
  showPage("projectenPage");
}
function klantToevoegenCancel() {
  showPage("klantenPage");
}
function dashToevoegenCancel() {
  showPage("dashboardPage");
}
// Ref-linken van buttons: toevoegen -> overzicht END

// Ref-linken van buttons: overzicht -> toevoegen BEGIN
function projectToevoegen() {
  showPage("projectAanmaken");
}
function klantToevoegen() {
  showPage("klantAanmaken");
}
function dashToevoegen() {
  showPage("toevoegenPage");
}
// Ref-linken van buttons: overzicht -> toevoegen END

// Ref-linken van buttons in de navbar BEGIN
function dashboardPageNav() {
  showPage("dashboardPage");
}

function klantenPageNav() {
  showPage("klantenPage");
}

function projectenPageNav() {
  showPage("projectenPage");
}

function regerNav() {
  showPage("registerPage");
}

function loginBtn() {
  showPage("loginPage")
}
// Ref-linken van buttons in de navbar END

function projectConfirm() {
  projectPosten();
  
}

function urenconfirm () {

  urenPosten();
}



function bindEvents() {
  connectButton("login", login);
  connectButton("login2fa", login2fa);
  connectButton("reg", register);
  connectButton("regop", regerop);
  connectButton("klanten", klanten);
  connectButton("projecten", projecten);
  connectButton("projectConfirm", projectConfirm);
  connectButton("confirm", urenconfirm);

  
  // connectButton("confirm", projectToevoegenConfirm);

  connectButton("projectCancel", projectToevoegenCancel);
  connectButton("klantCancel", klantToevoegenCancel);
  connectButton("cancel", dashToevoegenCancel);

  connectButton("projectAdd", projectToevoegen);
  connectButton("klantAdd", klantToevoegen);
  connectButton("add", dashToevoegen);

  // Ref-linken van buttons in de Dashboard navbar BEGIN
  connectButton("dashboardPageBtn", dashboardPageNav);
  connectButton("klantenPageBtn", klantenPageNav);
  connectButton("projectenPageBtn", projectenPageNav);
  connectButton("registeren-navBtn", regerNav);
  connectButton("loginPageBtn", loginBtn);

  // Ref-linken van buttons in de Dashboard navbar END

  // Ref-linken van buttons in de Klant Aanmaken navbar BEGIN
  connectButton("dashboardPageBtn1", dashboardPageNav);
  connectButton("klantenPageBtn1", klantenPageNav);
  connectButton("projectenPageBtn1", projectenPageNav);
  connectButton("registeren-navBtn1", regerNav);
  connectButton("loginPageBtn1", loginBtn);
  // Ref-linken van buttons in de Klant Aanmaken navbar END

  // Ref-linken van buttons in de Klant Overzicht navbar BEGIN
  connectButton("dashboardPageBtn4", dashboardPageNav);
  connectButton("klantenPageBtn4", klantenPageNav);
  connectButton("projectenPageBtn4", projectenPageNav);
  connectButton("registeren-navBtn4", regerNav);
  connectButton("loginPageBtn4", loginBtn);
  // Ref-linken van buttons in de Klant Overzicht navbar END

  // Ref-linken van buttons in de Project Aanmaken navbar BEGIN
  connectButton("dashboardPageBtn2", dashboardPageNav);
  connectButton("klantenPageBtn2", klantenPageNav);
  connectButton("projectenPageBtn2", projectenPageNav);
  connectButton("registeren-navBtn2", regerNav);
  connectButton("loginPageBtn2", loginBtn);
  // Ref-linken van buttons in de Project Aanmaken navbar END

  // Ref-linken van buttons in de Project Overzicht navbar BEGIN
  connectButton("dashboardPageBtn5", dashboardPageNav);
  connectButton("klantenPageBtn5", klantenPageNav);
  connectButton("projectenPageBtn5", projectenPageNav);
  connectButton("registeren-navBtn5", regerNav);
  connectButton("loginPageBtn5", loginBtn);
  // Ref-linken van buttons in de Project Aanmaken navbar END

  // Ref-linken van buttons in de Toevoegen navbar BEGIN
  connectButton("dashboardPageBtn3", dashboardPageNav);
  connectButton("klantenPageBtn3", klantenPageNav);
  connectButton("projectenPageBtn3", projectenPageNav);
  connectButton("registeren-navBtn3", regerNav);
  connectButton("loginPageBtn3", loginBtn);
  connectButton("klantConfirm", klantenPostenButton);

  // Ref-linken van buttons in de Toevoegen navbar END

  enableSubmits();
}

function enableSubmits() {
  document.body.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
      // if enter is pressed
      console.log(e);
      let target = e.target;
      while (!target.className.includes("input")) {
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

function api(endpoint, method = "GET", data = {}) {
  const API = "http://127.0.0.1:5000/";
  return fetch(API + endpoint, {
    method: method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
    body: method == "GET" ? null : JSON.stringify(data),
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

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 1; i < tr.length; i++) {
    // td = tr[i].getElementsByTagName("td")[0];
    var tds = tr[i].getElementsByTagName("td");
    var found = false;
    for (j = 0; j < tds.length; j++) {
      td = tds[j]
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          found = true;
        }
      }
    }
    if (found) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
