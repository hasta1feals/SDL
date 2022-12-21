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
  let x = idProject.toString();
  let y = idMedewerker.toString();

  data = {
    naam: getValue("projectNaam"),
    begin: getValue("projectBeginDatum"),
    klanten_id: x,
    user_id: y,
  };

  console.log(data);

  // Submit data to API
  api("projecten", "POST", data).then((res) => {
    if (res.message == "success") {
      console.log("gelukt");
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
      console.log("gelukt");
      klantenKlanten();
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
      klantenProject();
      medewerkerProject();
      klantenNaam();
      // showPage("registerPage")
      projectProject();
      klantenKlanten();
      klantenProjectProject();
      userInfo();
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

function projectProject() {
  api("projecten2", "GET").then((res) => {
    if (res.message == "success") {
      const table = document.getElementById("myTable1");

      for (i = 0; i < res.id.length; i++) {
        const data = res.id[i];

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(i + 1);
        console.log(data);
        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        // Add some text to the new cells:
        cell1.innerHTML = data.naam;
        cell2.innerHTML = data.firstname;
        cell3.innerHTML = data.klantennaam;
        cell4.innerHTML = data.begin;
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
        console.log(data);
        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        // Add some text to the new cells:
        cell1.innerHTML = data.voornaam;
        cell2.innerHTML = data.adres;
        cell3.innerHTML = data.huisnummer;
        cell4.innerHTML = data.postcode;
        cell5.innerHTML = data.woonplaats;
        cell6.innerHTML = data.telefoon;
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

let selectionProject = document.querySelector("#selectionKlanten1");
var idProject = [];

selectionProject.addEventListener("change", () => {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionProject.value) {
          idProject.push(res.id[i].id);

          break;
        }
      }
    }
  });
});

let selectionMedewerker = document.querySelector("#selectionMedewerker");
var idMedewerker = [];

selectionMedewerker.addEventListener("change", () => {
  api("medewerker", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionMedewerker.value) {
          idMedewerker.push(res.id[i].id);

          break;
        }
      }
    }
  });
});

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

// Deze is niet meer nodig funcite werkt nu via een html/css verbinding
// function projectToevoegenConfirm() {
//   showPage("popupCenter");
// }

// Ref-linken van buttons voor Medewerker: toevoegen -> overzicht BEGIN
function projectToevoegenCancelM() {
  showPage("projectenPageM");
}
function klantToevoegenCancelM() {
  showPage("klantenPageM");
}
function dashToevoegenCancelM() {
  showPage("dashboardPageM");
}
// Ref-linken van buttons voor Medewerker: toevoegen -> overzicht END

// Ref-linken van buttons voor Medewerker: overzicht -> toevoegen BEGIN
function projectToevoegenM() {
  showPage("projectAanmakenM");
}
function klantToevoegenM() {
  showPage("klantAanmakenM");
}
function dashToevoegenM() {
  showPage("toevoegenPageM");
}
// Ref-linken van buttons voor Medewerker: overzicht -> toevoegen END

// Ref-linken van buttons voor ADMIN: toevoegen -> overzicht BEGIN
function projectToevoegenCancel() {
  showPage("projectenPage");
}
function klantToevoegenCancel() {
  showPage("klantenPage");
}
function dashToevoegenCancel() {
  showPage("dashboardPage");
}
// Ref-linken van buttons voor ADMIN: toevoegen -> overzicht END

// Ref-linken van buttons voor ADMIN: overzicht -> toevoegen BEGIN
function projectToevoegen() {
  showPage("projectAanmaken");
}
function klantToevoegen() {
  showPage("klantAanmaken");
}
function dashToevoegen() {
  showPage("toevoegenPage");
}
// Ref-linken van buttons voor ADMIN: overzicht -> toevoegen END

// Ref-linken van buttons in de Admin navbar BEGIN
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
  showPage("loginPage");
}
// Ref-linken van buttons in de Admin navbar END

// Ref-linken van buttons in de Medwerker navbar BEGIN
function dashboardPageNavM() {
  showPage("dashboardPageM");
}

function klantenPageNavM() {
  showPage("klantenPageM");
}

function projectenPageNavM() {
  showPage("projectenPageM");
}

function loginBtnM() {
  showPage("loginPage");
}
// Ref-linken van buttons in de Medwerker navbar END

//voor admin
function projectConfirm() {
  projectPosten();
}

//voor admin
function klantenPostenButton() {
  KlantenPosten();

  console.log("test test");
}

//voor medewerker
function projectConfirmM() {
  projectPosten();
}

//voor medewerker
function klantenPostenButtonM() {
  KlantenPosten();

  console.log("test test");
}

function bindEvents() {
  // connectButton("confirm", projectToevoegenConfirm);
  connectButton("login", login);
  connectButton("login2fa", login2fa);
  connectButton("reg", register);
  connectButton("regop", regerop);
  connectButton("klanten", klanten);
  connectButton("projecten", projecten);

  //voor admin
  connectButton("projectCancel", projectToevoegenCancel);
  connectButton("klantCancel", klantToevoegenCancel);
  connectButton("cancel", dashToevoegenCancel);

  connectButton("projectAdd", projectToevoegen);
  connectButton("klantAdd", klantToevoegen);
  connectButton("add", dashToevoegen);

  connectButton("projectConfirm", projectConfirm);
  connectButton("klantConfirm", klantenPostenButton);

  // voor medewerker
  connectButton("projectAddM", projectToevoegenM);
  connectButton("klantAddM", klantToevoegenM);
  connectButton("addM", dashToevoegenM);

  connectButton("projectCancelM", projectToevoegenCancelM);
  connectButton("klantCancelM", klantToevoegenCancelM);
  connectButton("cancelM", dashToevoegenCancelM);

  connectButton("projectConfirmM", projectConfirmM);
  connectButton("klantConfirmM", klantenPostenButtonM);

  // ----------- Admin navlinks ------------------------------------------------------------

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
  // Ref-linken van buttons in de Toevoegen navbar END

  // ---------- Medewerker navlinks ---------------------------------------------------------------
  // Ref-linken van buttons in de Dashboard navbar BEGIN
  connectButton("dashboardPageBtnM", dashboardPageNavM);
  connectButton("klantenPageBtnM", klantenPageNavM);
  connectButton("projectenPageBtnM", projectenPageNavM);
  connectButton("loginPageBtnM", loginBtnM);
  // Ref-linken van buttons in de Dashboard navbar END

  // Ref-linken van buttons in de Klant Aanmaken navbar BEGIN
  connectButton("dashboardPageBtn1M", dashboardPageNavM);
  connectButton("klantenPageBtn1M", klantenPageNavM);
  connectButton("projectenPageBtn1M", projectenPageNavM);
  connectButton("loginPageBtn1M", loginBtnM);
  // Ref-linken van buttons in de Klant Aanmaken navbar END

  // Ref-linken van buttons in de Klant Overzicht navbar BEGIN
  connectButton("dashboardPageBtn4M", dashboardPageNavM);
  connectButton("klantenPageBtn4M", klantenPageNavM);
  connectButton("projectenPageBtn4M", projectenPageNavM);
  connectButton("loginPageBtn4M", loginBtnM);
  // Ref-linken van buttons in de Klant Overzicht navbar END

  // Ref-linken van buttons in de Project Aanmaken navbar BEGIN
  connectButton("dashboardPageBtn2M", dashboardPageNavM);
  connectButton("klantenPageBtn2M", klantenPageNavM);
  connectButton("projectenPageBtn2M", projectenPageNavM);
  connectButton("loginPageBtn2M", loginBtnM);
  // Ref-linken van buttons in de Project Aanmaken navbar END

  // Ref-linken van buttons in de Project Overzicht navbar BEGIN
  connectButton("dashboardPageBtn5M", dashboardPageNavM);
  connectButton("klantenPageBtn5M", klantenPageNavM);
  connectButton("projectenPageBtn5M", projectenPageNavM);
  connectButton("loginPageBtn5M", loginBtnM);
  // Ref-linken van buttons in de Project Aanmaken navbar END

  // Ref-linken van buttons in de Toevoegen navbar BEGIN
  connectButton("dashboardPageBtn3M", dashboardPageNavM);
  connectButton("klantenPageBtn3M", klantenPageNavM);
  connectButton("projectenPageBtn3M", projectenPageNavM);
  connectButton("loginPageBtn3M", loginBtnM);
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
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
