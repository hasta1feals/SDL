//Verscrikkele manier en onveilige manier om een qr code te genereren. Vraag bram ff hoe je dit beter kan doen. En waarom je geen import stateMENTS mag gebruiken in js

let x = (Date.now = function () {
  return new Date().getTime();
});

function exportTableToExcel(tableID, filename = "") {
  var downloadLink;
  var dataType = "application/vnd.ms-excel";
  var tableSelect = document.getElementById(tableID);
  var tableHTML = tableSelect.outerHTML.replace(/ /g, "%20");

  // Specify file name
  filename = filename ? filename + ".xls" : "excel_data.xls";

  //create dowanliad link element
  downloadLink = document.createElement("a");

  document.body.appendChild(downloadLink);
  if (navigator.msSaveOrOpenBlob) {
    var blob = new Blob(["\ufeff", tableHTML], {
      type: dataType,
    });
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    // Create a link to the file
    downloadLink.href = "data:" + dataType + ", " + tableHTML;

    // Setting the file name
    downloadLink.download = filename;

    //triggering the function
    downloadLink.click();
  }
}

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

// Submit data to API
api("users", "POST", data).then((res) => {
  if (res.message == "success") {
    userAanmaken();
    alert("Account created");
  }
});
}
function projectBer() {
  x = idProjectber2.toString();
  // Check if passwords match
  data = {
    begin: getValue("b"),
    firstname: getValue("m"),
    klantennaam: getValue("k"),
    id: x,
  };

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
    show: 0,
    klanten_id: x,
    user_id: y,
  };

  // Submit data to API
  api("projecten", "POST", data).then((res) => {
    if (res.message == "success") {
    }
  });
}

function projectPosten2() {
  let x = idProject2.toString();
  let y = idMedewerker2.toString();

  data = {
    naam: getValue("projectNaamM"),
    begin: getValue("projectBeginDatumM"),
    show: 0,
    klanten_id: x,
    user_id: y,
  };

  // Submit data to API
  api("projecten", "POST", data).then((res) => {
    if (res.message == "success") {
    }
  });
}

function urenPosten() {
  let x = idMederwerkerUren.toString();
  let y = idProjectUren.toString();
  let z = idKlantenUren.toString();
  let zz = userID.toString();

  data = {
    datum: getValue("Datum"),
    activiteit: getValue("Activiteit"),
    uren_uren: getValue("Uren"),
    bonus: getValue("Bonus"),
    opmerking: getValue("Opmerking"),
    uren_declarabel: getValue("Aantal-Declarabel"),
    project_id: y,
    user_id: x,
    klanten_id: z,
    myID: zz,
    show: 0,
  };

  // Submit data to API
  api("uren", "POST", data).then((res) => {
    if (res.message == "success") {
    }
  });
}

function urenPosten2() {
  let x = idMederwerkerUren2.toString();
  let y = idProjectUren2.toString();
  let z = idKlantenUren2.toString();
  let zz = userID.toString();

  data = {
    datum: getValue("DatumM"),
    activiteit: getValue("ActiviteitM"),
    uren_uren: getValue("UrenM"),
    bonus: getValue("BonusM"),
    opmerking: getValue("OpmerkingM"),
    uren_declarabel: getValue("Aantal-DeclarabelM"),
    project_id: y,
    user_id: x,
    klanten_id: z,
    myID: zz,
  };

  // Submit data to API
  api("uren", "POST", data).then((res) => {
    if (res.message == "success") {
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
    show: 0,
  };

  // Submit data to API
  api("klanten", "POST", data).then((res) => {
    if (res.message == "success") {
      // klantenKlanten();
    }
  });
}

function KlantenPosten2() {
  data = {
    voornaam: getValue("klantm"),
    woonplaats: getValue("Woonplaatsm"),
    adres: getValue("Straatm"),
    huisnummer: getValue("huisnummer1m"),
    postcode: getValue("Postcodem"),
    telefoon: getValue("Telefoonm"),
    show: 0,
  };

  // Submit data to API
  api("klanten", "POST", data).then((res) => {
    if (res.message == "success") {
      // klantenKlanten2();
    }
  });
}

function projectVerwijder() {
  let x = idProjectver.toString();
  data = {
    id: x,
  };

  // Submit data to API
  api("projectV", "PATCH", data).then((res) => {
    if (res.message == "success") {
      console.log("succes");
    }
  });
}



function klantenBewerken111() {
  let x = idKlantKlant.toString();
  data = {
    id: x,
    voornaam: getValue("klantBijwerken"),
    woonplaats: getValue("WoonplaatsBijwerken"),
    adres: getValue("StraatBijwerken"),
    huisnummer: getValue("huisnummer1Bijwerken"),
    postcode: getValue("PostcodeBijwerken"),
    telefoon: getValue("TelefoonBijwerken"),
    
  };

  // Submit data to API
  api("klantenB", "PATCH", data).then((res) => {
    if (res.message == "success") {
      console.log("succes");
    }
  });
}




function projectVerwijder2() {
  let x = idProjectver2.toString();
  data = {
    id: x,
  };

  // Submit data to API
  api("projectV", "PATCH", data).then((res) => {
    if (res.message == "success") {
      console.log("succes");
    }
  });
}

function klantenVerwijder() {
  let x = idKlantver.toString();
  data = {
    id: x,
  };

  // Submit data to API
  api("klantenV", "PATCH", data).then((res) => {
    if (res.message == "success") {
      console.log("succes");
    }
  });
}

function klantenVerwijder2() {
  let x = idKlantver2.toString();
  data = {
    id: x,
  };

  // Submit data to API
  api("klantenV", "PATCH", data).then((res) => {
    if (res.message == "success") {
      console.log("succes");
    }
  });
}


function projectUpdate() {
  let x = idBewerkenKlan.toString();
  let y = idBewerkenMed.toString();
  let z = idBewerkenOptie.toString();
  data = {
    naam: getValue("projectNaamBewerken"),
    id: z,
    klanten_id: x,
    user_id: y,
    begin: getValue("projectBeginDatumBewerken"),
  };

  // Submit data to API
  api("projectB", "PATCH", data).then((res) => {
    if (res.message == "success") {
      console.log("succes");
    }
  });
}





//debo


function urenUpdate123() {
  let x = idUrenProj1.toString();
  let y = idUrenMed1.toString();
  let z = idUrenKlant.toString();
  let zz = idUrenVer.toString();


  data = {
    activiteit: getValue("ActiviteitBewerken"),
    uren_uren: getValue("UrenBewerken"),
    datum: getValue("DatumBewerken"),
    bonus: getValue("BonusBewerken"),
    myID: y,
    uren_declarabel: getValue("Aantal-DeclarabelBewerken"),
    opmerking: getValue("OpmerkingBewerken"),


    project_id: x,
    user_id: y,
    klanten_id: z,
    id: zz,

   
  };

  // Submit data to API
  api("urenB", "PATCH", data).then((res) => {
    if (res.message == "success") {

      console.log("succes");
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
      // window.location.href="dashbord.html";
      userInfo();

      showPage("dashboardPage");
    } else {
      alert("Credentials are incorrect");
    }
  });
}

function login2faM() {
  // Fetch data from html
  data = {
    otp_code: getValue("code1"),
  };
  // Submit data to API
  api("otpp", "GET", data).then((res) => {
    if (res.otp == getValue("code1")) {
      console.log(res.otp);
      // Save the received JWT in a cookie
      setCookie("token", res.access_token, 365);
      // window.location.href="dashbord.html";
      userInfo();

      showPage("dashboardPageM");
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

function showQrCodeM() {
  // hier roep ik otp aan en kan ik de qr code van pakken, dit is 1000000000% niet veilig ik moet ff vragen als ik een libary kan gebruiken in js
  api("otpp", "GET", data).then((res) => {
    img = document.getElementById("qrM");
    img.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      res.barcode;
  });
}

function userInfo() {
  api("users", "GET", data).then((res) => {
    text = document.getElementById("ww");

    text.innerText = res.user.firstname + " " + res.user.lastname;
  });
}

function userInfo2() {
  api("users", "GET", data).then((res) => {
    text = document.getElementById("ww1");

    text.innerText = res.user.firstname + " " + res.user.lastname;
  });
}

function userInfo3() {
  api("users", "GET", data).then((res) => {
    text = document.getElementById("ww2");

    text.innerText = res.user.firstname + " " + res.user.lastname;
  });
}

function userInfoM1() {
  api("users", "GET", data).then((res) => {
    text = document.getElementById("Mdwrk");

    text.innerText = res.user.firstname + " " + res.user.lastname;
  });
}

function userInfoM2() {
  api("users", "GET", data).then((res) => {
    text = document.getElementById("Mdwrk1");

    text.innerText = res.user.firstname + " " + res.user.lastname;
  });
}

function userInfoM3() {
  api("users", "GET", data).then((res) => {
    text = document.getElementById("Mdwrk2");

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

      userID.push(res.user.id);
      showPage("otpPage");
      showQrCode();
      showQrCodeM();
      // window.location.href="dashbord.html";
      if (res.user.admin == 1) {
        // showPage("otpPageM");
        showPage("dashboardPageM");
        klantenKlanten2();
        projectProject2();
        klantenProject2();
        medewerkerProject2();
      } else {
              
        projectBewerken11();
        // showPage("otpPage");
        showPage("dashboardPage");
        projectProject();
      }
      klantenNaam23();
      projectBer();
      klantVer2();
      projectVer();
      klantVer();
      projectUren();
      klantenUren();
      klantenProject();
      medewerkerProject();
      klantenNaam();
      urenBewerken123();
      // showPage("registerPage")
      klantBer();
      klantenKlanten();
      klantenProjectProject();
      userInfo();
      medewerkerUren();
      UrenUren();
      UrenUrenM();
      medewerkerUren2();
      projectUren2();
      klantenUren2();
      userInfo2();
      userInfo3();
      userInfoM1();
      userInfoM2();
      userInfoM3();
      projectVer2();
      medewerkerBewerkenAdmin();
      klantenBewerken1212();
      projectBerwerken000();
      medewerkerBewerkenAdminuren();
    }
  });
}

var userID = [];

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



function urenBewerken123() {
  api("uren2", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selectionSelectBewerken1").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].activiteit +
          "</option>";
      }
    }
  });
}


function projectBewerken11() {
  api("projecten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selectionProjectBewerken1131").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].naam +
          "</option>";
      }
    }
  });
}

function projectBerwerken000() {
  api("projecten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selectionBewerken").innerHTML +=
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
  api("uren", "GET").then((res) => {
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

function projectUren2() {
  api("projecten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selectionM").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].naam +
          "</option>";
      }
    }
  });
}

function projectVer() {
  api("projecten2", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selectverwijdenproject").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].naam +
          "</option>";
      }
    }
  });
}

function projectBer() {
  api("projecten2", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selectionMedewerkerBewerkenM1").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].naam +
          "</option>";
      }
    }
  });
}

function projectVer2() {
  api("projecten2", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selectionKlanten1VerwijderenM").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].naam +
          "</option>";
      }
    }
  });
}


function klantenBewerken1212() {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("klantSelectBijwerken").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].voornaam +
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

function projectVerwijderen() {
  api("projecten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selectionProjectNaamVerwijderen").innerHTML +=
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

function projectProject2() {
  api("projecten2", "GET").then((res) => {
    if (res.message == "success") {
      const table = document.getElementById("myTable1M");

      for (i = 0; i < res.id.length; i++) {
        const data = res.id[i];

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(i + 1);
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

function UrenUren() {
  api("uren", "GET").then((res) => {
    if (res.message == "success") {
      const table = document.getElementById("myTable");

      for (i = 0; i < res.id.length; i++) {
        const data = res.id[i];

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(i + 1);
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
        cell1.innerHTML = data.datum;
        cell2.innerHTML = data.firstname;
        cell3.innerHTML = data.voornaam;
        cell4.innerHTML = data.naam;
        cell5.innerHTML = data.activiteit;
        cell6.innerHTML = data.uren_uren;
        cell7.innerHTML = data.uren_declarabel;
        cell8.innerHTML = data.bonus;
        cell9.innerHTML = data.opmerking;
      }
    }
  });
}

function UrenUrenM() {
  api("users2", "GET").then((res) => {
    if (res.message == "success") {
      const table = document.getElementById("myTableM");

      for (i = 0; i < res.id.length; i++) {
        const data = res.id[i];

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(i + 1);
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
        cell1.innerHTML = data.datum;
        cell2.innerHTML = data.firstname;
        cell3.innerHTML = data.voornaam;
        cell4.innerHTML = data.naam;
        cell5.innerHTML = data.activiteit;
        cell6.innerHTML = data.uren_uren;
        cell7.innerHTML = data.uren_declarabel;
        cell8.innerHTML = data.bonus;
        cell9.innerHTML = data.opmerking;
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

function klantenKlanten2() {
  api("klanten2", "GET").then((res) => {
    if (res.message == "success") {
      const table = document.getElementById("myTable2M");

      for (i = 0; i < res.id.length; i++) {
        const data = res.id[i];

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(i + 1);
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

function klantVer() {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("klantselectverwijderen").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].voornaam +
          " " +
          res.id[i].achternaam +
          "</option>";
      }
    }
  });
}

function klantVer2() {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selectionKlanten1B").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].voornaam +
          "</option>";
      }
    }
  });
}


function klantBer() {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selectionKlantenBewerken").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].voornaam +
          "</option>";
      }
    }
  });
}


function klantenUren2() {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selectionKlantenM").innerHTML +=
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

function klantenProject2() {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selectionKlanten1M").innerHTML +=
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

function medewerkerProject2() {
  api("medewerker", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selectionMedewerkerM").innerHTML +=
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


function klantenNaam23() {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selectionKlanten1Bewerken").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].voornaam +
          "</option>";
      }
    }
  });
}

function medewerkerUren() {
  api("medewerker", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        document.getElementById("selectionMedewerkerUren").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].firstname +
          "</option>";
        console.log(res.id[i].firstname);
      }
    }
  });
}

function medewerkerUren2() {
  api("medewerker2", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        console.log(res);
        document.getElementById("selectionMedewerkerUrenM").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].firstname +
          "</option>";
      }
    }
  });
}

function medewerkerBewerkenAdmin() {
  api("medewerker", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        console.log(res);
        document.getElementById("selectionMedewerkerBewerken11").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].firstname +
          "</option>";
      }
    }
  });
}


function medewerkerBewerkenAdminuren() {
  api("medewerker", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        console.log(res);
        document.getElementById("selectionMedewerkerUrenBewerken").innerHTML +=
          '<option value="' +
          res.id[i].id +
          '">' +
          res.id[i].firstname +
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

let selectionProject2 = document.querySelector("#selectionKlanten1M");
var idProject2 = [];

selectionProject2.addEventListener("change", () => {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionProject2.value) {
          idProject2.push(res.id[i].id);

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

let selectionMedewerker2 = document.querySelector("#selectionMedewerkerM");
var idMedewerker2 = [];

selectionMedewerker2.addEventListener("change", () => {
  api("medewerker", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionMedewerker2.value) {
          idMedewerker2.push(res.id[i].id);

          break;
        }
      }
    }
  });
});

let selectionMedewerkerUren = document.querySelector(
  "#selectionMedewerkerUren"
);
var idMederwerkerUren = [];

selectionMedewerkerUren.addEventListener("change", () => {
  api("medewerker", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionMedewerkerUren.value) {
          idMederwerkerUren.push(res.id[i].id);

          break;
        }
      }
    }
  });
});

let selectionMedewerkerUren2 = document.querySelector(
  "#selectionMedewerkerUrenM"
);
var idMederwerkerUren2 = [];

selectionMedewerkerUren2.addEventListener("change", () => {
  api("medewerker", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionMedewerkerUren2.value) {
          idMederwerkerUren2.push(res.id[i].id);

          break;
        }
      }
    }
  });
});

let selectionProjectUren = document.querySelector("#selection");
var idProjectUren = [];

selectionProjectUren.addEventListener("change", () => {
  api("projecten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionProjectUren.value) {
          idProjectUren.push(res.id[i].id);
          break;
        }
      }
    }
  });
});

let selectionProjectVer2 = document.querySelector(
  "#selectionKlanten1VerwijderenM");
var idProjectver2 = [];

selectionProjectVer2.addEventListener("change", () => {
  api("projecten2", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionProjectVer2.value) {
          console.log("dadak");
          document.getElementsByClassName("klantVer2")[0].placeholder =
            res.id[i].klantennaam;
          document.getElementsByClassName("mederwerkerVer2")[0].placeholder =
            res.id[i].firstname;
          document.getElementsByClassName("beginVer2")[0].placeholder =
            res.id[i].begin;

          idProjectver2.push(res.id[i].id);
          break;
        }
      }
    }
  });
});



let selectionProjectBer2 = document.querySelector(
  "#selectionMedewerkerBewerkenM1"
);
var idProjectber2 = [];

selectionProjectBer2.addEventListener("change", () => {
  api("projecten2", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionProjectBer2.value) {
          console.log("dadak");
          document.getElementsByClassName("klan2")[0].placeholder =
            res.id[i].klantennaam;
          document.getElementsByClassName("med2")[0].placeholder =
            res.id[i].firstname;
          document.getElementsByClassName("beg2")[0].placeholder =
            res.id[i].begin;

          idProjectber2.push(res.id[i].id);
          break;
        }
      }
    }
  });
});


let selectionBewerKlantenKlanten = document.querySelector("#klantSelectBijwerken");
var idKlantKlant = [];

selectionBewerKlantenKlanten.addEventListener("change", () => {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionBewerKlantenKlanten.value) {
          document.getElementsByClassName("klantNam")[0].placeholder =
            res.id[i].voornaam;

          document.getElementsByClassName("Woonpla")[0].placeholder =
            res.id[i].woonplaats;

          document.getElementsByClassName("stra")[0].placeholder =
            res.id[i].adres;

            document.getElementsByClassName("tell")[0].placeholder =
            res.id[i].telefoon;

            document.getElementsByClassName("hui")[0].placeholder =
            res.id[i].huisnummer;

            document.getElementsByClassName("pos")[0].placeholder =
            res.id[i].postcode;

            idKlantKlant.push(res.id[i].id);
          break;
        }
      }
    }
  });
});




















let selectionProjectVer = document.querySelector("#selectverwijdenproject");
var idProjectver = [];

selectionProjectVer.addEventListener("change", () => {
  api("projecten2", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionProjectVer.value) {
          console.log("dadak");
          document.getElementsByClassName("klantVer")[0].placeholder =
            res.id[i].klantennaam;
          document.getElementsByClassName("mederwerkerVer")[0].placeholder =
            res.id[i].firstname;
          document.getElementsByClassName("beginVer")[0].placeholder =
            res.id[i].begin;

          idProjectver.push(res.id[i].id);
          break;
        }
      }
    }
  });
});


// HIER BEGINT
let selectionBewerkenOptie = document.querySelector("#selectionProjectBewerken1131");
var idBewerkenOptie = [];

selectionBewerkenOptie.addEventListener("change", () => {
  api("projecten2", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionBewerkenOptie.value) {
          console.log("dadak");
          document.getElementsByClassName("projectNaamBer")[0].placeholder =
            res.id[i].naam;
            document.getElementById ("projectBeginDatumBewerken").value =
            res.id[i].begin;

          

            idBewerkenOptie.push(res.id[i].id);
          break;
        }
      }
    }
  });
});

let selectionBewerkenMed = document.querySelector("#selectionMedewerkerBewerken11");
var idBewerkenMed = [];

selectionBewerkenMed.addEventListener("change", () => {
  api("medewerker", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionBewerkenMed.value) {

          

            idBewerkenMed.push(res.id[i].id);
            console.log(idBewerkenMed);
          break;
        }
      }
    }
  });
});


let selectionBewerkenKlan = document.querySelector("#selectionKlanten1Bewerken");
var idBewerkenKlan = [];

selectionBewerkenKlan.addEventListener("change", () => {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionBewerkenKlan.value) {
        
          idBewerkenKlan.push(res.id[i].id);
          console.log(idBewerkenKlan);
          break;
        }
      }
    }
  });
});




let selectionUrenKlant = document.querySelector("#selectionKlantenBewerken");
var idUrenKlant = [];

selectionUrenKlant.addEventListener("change", () => {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionUrenKlant.value) {
        
          idUrenKlant.push(res.id[i].id);

          break;
        }
      }
    }
  });
});



//jasmine
let selectionUrenMed1 = document.querySelector("#selectionMedewerkerUrenBewerken");
var idUrenMed1 = [];

selectionUrenMed1.addEventListener("change", () => {
  api("medewerker", "GET").then((res) => {
    if (res.message == "success") {
      
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionUrenMed1.value) {
        
          idUrenMed1.push(res.id[i].id);

          break;
        }
      }
    }
  });
});



let selectionUrenProj1 = document.querySelector("#selectionBewerken");
var idUrenProj1 = [];

selectionUrenProj1.addEventListener("change", () => {
  api("projecten", "GET").then((res) => {
    console.log("test222");
    if (res.message == "success") {
      
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionUrenProj1.value) {
        
          idUrenProj1.push(res.id[i].id);
          console.log("test");
          break;
        }
      }
    }
  });
});














let selectionUrenVer = document.querySelector("#selectionSelectBewerken1");
var idUrenVer = [];

selectionUrenVer.addEventListener("change", () => {
  api("uren2", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
       
        if (res.id[i].id == selectionUrenVer.value) {

          document.getElementById ("DatumBewerken").value =
          res.id[i].datum;

          document.getElementsByClassName("acti1")[0].placeholder =
            res.id[i].activiteit;

            document.getElementsByClassName("ure1")[0].placeholder =
            res.id[i].uren_uren;

            document.getElementsByClassName("opm1")[0].placeholder =
            res.id[i].opmerking;

            
            document.getElementsByClassName("ure23")[0].placeholder =
            res.id[i].uren_declarabel;

            document.getElementsByClassName("bonus23")[0].placeholder =
            res.id[i].bonus;
       
       

            idUrenVer.push(res.id[i].id);
          break;
        }
      }
    }
  });
});










let selectionKlantenVer = document.querySelector("#klantselectverwijderen");
var idKlantver = [];

selectionKlantenVer.addEventListener("change", () => {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        console.log("dadak");
        if (res.id[i].id == selectionKlantenVer.value) {
          document.getElementsByClassName("woonplaatsVer")[0].placeholder =
            res.id[i].woonplaats;
          document.getElementsByClassName("streetVer")[0].placeholder =
            res.id[i].adres;
          document.getElementsByClassName("huisnummerVer")[0].placeholder =
            res.id[i].huisnummer;
          document.getElementsByClassName("postcodeVer")[0].placeholder =
            res.id[i].postcode;
          document.getElementsByClassName("telefoonVer")[0].placeholder =
            res.id[i].telefoon;

          idKlantver.push(res.id[i].id);
          break;
        }
      }
    }
  });
});

let selectionKlantenVer2 = document.querySelector("#selectionKlanten1B");
var idKlantver2 = [];

selectionKlantenVer2.addEventListener("change", () => {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        console.log("dadak");
        if (res.id[i].id == selectionKlantenVer2.value) {
          document.getElementsByClassName("woonplaatsVer2")[0].placeholder =
            res.id[i].woonplaats;
          document.getElementsByClassName("streetVer2")[0].placeholder =
            res.id[i].adres;
          document.getElementsByClassName("huisnummerVer2")[0].placeholder =
            res.id[i].huisnummer;
          document.getElementsByClassName("postcodeVer2")[0].placeholder =
            res.id[i].postcode;
          document.getElementsByClassName("telefoonVer2")[0].placeholder =
            res.id[i].telefoon;

          idKlantver2.push(res.id[i].id);
          break;
        }
      }
    }
  });
});

let selectionProjectUren2 = document.querySelector("#selectionM");
var idProjectUren2 = [];

selectionProjectUren2.addEventListener("change", () => {
  api("projecten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selectionProjectUren2.value) {
          idProjectUren2.push(res.id[i].id);
          break;
        }
      }
    }
  });
});

let selctionKlantenUren = document.querySelector("#selectionKlanten");
var idKlantenUren = [];

selctionKlantenUren.addEventListener("change", () => {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selctionKlantenUren.value) {
          idKlantenUren.push(res.id[i].id);

          break;
        }
      }
    }
  });
});

let selctionKlantenUren2 = document.querySelector("#selectionKlantenM");
var idKlantenUren2 = [];

selctionKlantenUren2.addEventListener("change", () => {
  api("klanten", "GET").then((res) => {
    if (res.message == "success") {
      for (i = 0; i < res.id.length; i++) {
        if (res.id[i].id == selctionKlantenUren2.value) {
          idKlantenUren2.push(res.id[i].id);

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

// Ref-linken van buttons voor Medewerker: overzicht -> bewerken BEGIN
function projectBewerkenM() {
  showPage("projectBewerkenM");
}
function klantBewerkenM() {
  showPage("klantBewerkenM");
}
function dashBewerkenM() {
  showPage("toevoegenPageBewerkenM");
}
// Ref-linken van buttons voor Medewerker: overzicht -> bewerken END

// Ref-linken van buttons voor Medewerker: overzicht -> verwijderen BEGIN
function projectVerwijderenM() {
  showPage("projectVerwijderenM");
}
function klantVerwijderenM() {
  showPage("klantVerwijderenM");
}
function dashVerwijderenM() {
  showPage("toevoegenPageVerwijderenM");
}
// Ref-linken van buttons voor Medewerker: overzicht -> verwijderen END

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

// Ref-linken van buttons voor ADMIN: overzicht -> bewerken BEGIN
function projectBewerken() {
  showPage("projectBewerken");
}
function klantBewerken() {
  showPage("klantBewerken");
}
function dashBewerken() {
  showPage("toevoegenPageBewerken");
}
// Ref-linken van buttons voor ADMIN: overzicht -> bewerken END

// Ref-linken van buttons voor ADMIN: overzicht -> verwijderen BEGIN
function projectVerwijderen() {
  showPage("projectVerwijderen");
}
function klantVerwijderen() {
  showPage("klantVerwijderen");
}
function dashVerwijderen() {
  showPage("toevoegenPageVerwijderen");
}
// Ref-linken van buttons voor ADMIN: overzicht -> verwijderen END

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
  location.reload();
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
  location.reload();
}
// Ref-linken van buttons in de Medwerker navbar END

//voor admin
function projectConfirm() {
  projectPosten();
}

function projectVerwijderen1() {
  projectVerwijder();
}
//voor admin
function klantenPostenButton() {
  KlantenPosten();
}

//voor medewerker
function projectConfirmM() {
  projectPosten2();
}

//voor medewerker
function klantenPostenButtonM() {
  KlantenPosten2();
}

function projectConfirm() {
  projectPosten();
  //waarom is dit dat moet het niet het volgende zijn ' projectPosten() '
}

function projectVerwijderen2() {
  projectVerwijder2();
}

function klantenVerwijder22() {
  klantenVerwijder2();
}

function QrCodeShow() {
  showPage("QRCodePage");
}

// function TEMP() {
//   showPage("dashboardPageM");
// }
function proejctVeranderen111() {
 projectUpdate();
}

function klantenBijwerken15() {
  klantenBewerken111();
}

function urenUpdaten() {
  urenUpdate123();
}

function bindEvents() {
  connectButton("projectConfirmBewerken", proejctVeranderen111);
  connectButton("QRCodeShowKA", QrCodeShow);
  connectButton("QRCodeShowKB", QrCodeShow);
  connectButton("QRCodeShowKV", QrCodeShow);

  connectButton("QRCodeShowPA", QrCodeShow);
  connectButton("QRCodeShowPB", QrCodeShow);
  connectButton("QRCodeShowPV", QrCodeShow);
  connectButton("confirmBewerken", urenUpdaten);
  
  connectButton("QRCodeShowUA", QrCodeShow);
  connectButton("QRCodeShowUB", QrCodeShow);
  connectButton("QRCodeShowUV", QrCodeShow);

  connectButton("klantConfirmVerwijderenM1", klantenVerwijder22);
  connectButton("klantConfirmVerwijderen1", klantenVerwijder);
  connectButton("login", login);
  connectButton("login2fa", login2fa);
  connectButton("login2faM", login2faM);

  // connectButton("login2faM", TEMP);

  connectButton("reg", register);
  connectButton("regop", regerop);
  connectButton("klanten", klanten);
  connectButton("projecten", projecten);

  //voor admin
  connectButton("projectAdd", projectToevoegen);
  connectButton("klantAdd", klantToevoegen);
  connectButton("add", dashToevoegen);

  connectButton("projectEdit", projectBewerken);
  connectButton("klantEdit", klantBewerken);
  connectButton("edit", dashBewerken);

  connectButton("projectDelete", projectVerwijderen);
  connectButton("klantDelete", klantVerwijderen);
  connectButton("delete", dashVerwijderen);

  connectButton("projectCancel", projectToevoegenCancel);
  connectButton("projectCancelBewerken", projectToevoegenCancel);
  connectButton("projectCancelVerwijderen", projectToevoegenCancel);
  connectButton("projectConfirmVerwijderen1", projectVerwijderen1);
  connectButton("projectConfirmVerwijderenM1", projectVerwijderen2);

  connectButton("klantCancel", klantToevoegenCancel);
  connectButton("klantCancelBijwerken", klantToevoegenCancel);
  connectButton("klantCancelVerwijderen", klantToevoegenCancel);

  connectButton("cancel", dashToevoegenCancel);
  connectButton("cancelBewerken", dashToevoegenCancel);
  connectButton("cancelVerwijderen", dashToevoegenCancel);

  connectButton("projectConfirm", projectConfirm);
  connectButton("projectConfirmBijwerken"); // Hier moet een link komen naar project bijwerken functie voor de ADMIN
  connectButton("projectConfirmVerwijderen"); // Hier moet een link komen naar project verwijderen functie voor de ADMIN

  connectButton("klantConfirm", klantenPostenButton);
  connectButton("klantConfirmBijwerken", klantenBijwerken15); // Hier moet een link komen naar klant bijwerken functie voor de ADMIN
  connectButton("klantConfirmVerwijderen"); // Hier moet een link komen naar klant verwijderen functie voor de ADMIN

  connectButton("confirm", urenPosten);

  connectButton("projectConfirmVerwijderen"); // Hier moet een link komen naar dash verwijderen functie voor de ADMIN

  // voor medewerker
  connectButton("projectAddM", projectToevoegenM);
  connectButton("klantAddM", klantToevoegenM);
  connectButton("addM", dashToevoegenM);

  connectButton("projectEditM", projectBewerkenM);
  connectButton("klantEditM", klantBewerkenM);
  connectButton("editM", dashBewerkenM);

  connectButton("projectDeleteM", projectVerwijderenM);
  connectButton("klantDeleteM", klantVerwijderenM);
  connectButton("deleteM", dashVerwijderenM);

  connectButton("projectCancelM", projectToevoegenCancelM);
  connectButton("projectCancelBewerkenM", projectToevoegenCancelM);
  connectButton("projectCancelVerwijderenM", projectToevoegenCancelM);

  connectButton("klantCancelM", klantToevoegenCancelM);
  connectButton("klantCancelBewerkenM", klantToevoegenCancelM);
  connectButton("klantCancelVerwijderenM", klantToevoegenCancelM);

  connectButton("cancelM", dashToevoegenCancelM);
  connectButton("cancelBewerkenM", dashToevoegenCancelM);
  connectButton("cancelVerwijderenM", dashToevoegenCancelM);

  connectButton("projectConfirmM", projectConfirmM);
  connectButton("projectConfirmBijwerkenM"); // Hier moet een link komen naar project bijwerken functie voor de MEDEWERKER
  connectButton("projectConfirmVerwijderenM"); // Hier moet een link komen naar project verwijderen functie voor de MEDEWERKER

  connectButton("klantConfirmM", klantenPostenButtonM);
  connectButton("klantConfirmBijwerkenM"); // Hier moet een link komen naar klant bijwerken functie voor de MEDEWERKER
  connectButton("klantConfirmVerwijderenM"); // Hier moet een link komen naar klant verwijderen functie voor de MEDEWERKER

  connectButton("confirmm", urenPosten2);
  connectButton("klantConfirmBijwerkenM"); // Hier moet een link komen naar dash bijwerken functie voor de MEDEWERKER
  connectButton("projectConfirmVerwijderenM"); // Hier moet een link komen naar dash verwijderen functie voor de MEDEWERKER

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

  // Ref-linken van buttons in de Klant Bewerken navbar BEGIN
  connectButton("dashboardPageBtn16", dashboardPageNav);
  connectButton("klantenPageBtn16", klantenPageNav);
  connectButton("projectenPageBtn16", projectenPageNav);
  connectButton("registeren-navBtn16", regerNav);
  connectButton("loginPageBtn16", loginBtn);
  // Ref-linken van buttons in de Klant Bewerken navbar END

  // Ref-linken van buttons in de Klant Verwijderen navbar BEGIN
  connectButton("dashboardPageBtn17", dashboardPageNav);
  connectButton("klantenPageBtn17", klantenPageNav);
  connectButton("projectenPageBtn17", projectenPageNav);
  connectButton("registeren-navBtn17", regerNav);
  connectButton("loginPageBtn17", loginBtn);
  // Ref-linken van buttons in de Klant Verwijderen navbar END

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

  // Ref-linken van buttons in de Project Bewerken navbar BEGIN
  connectButton("dashboardPageBtn18", dashboardPageNav);
  connectButton("klantenPageBtn18", klantenPageNav);
  connectButton("projectenPageBtn18", projectenPageNav);
  connectButton("registeren-navBtn18", regerNav);
  connectButton("loginPageBtn18", loginBtn);
  // Ref-linken van buttons in de Project Bewerken navbar END

  // Ref-linken van buttons in de Project Verwijderen navbar BEGIN
  connectButton("dashboardPageBtn19", dashboardPageNav);
  connectButton("klantenPageBtn19", klantenPageNav);
  connectButton("projectenPageBtn19", projectenPageNav);
  connectButton("registeren-navBtn19", regerNav);
  connectButton("loginPageBtn19", loginBtn);
  // Ref-linken van buttons in de Project Verwijderen navbar END

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

  // Ref-linken van buttons in de Bewerken navbar BEGIN
  connectButton("dashboardPageBtn20", dashboardPageNav);
  connectButton("klantenPageBtn20", klantenPageNav);
  connectButton("projectenPageBtn20", projectenPageNav);
  connectButton("registeren-navBtn20", regerNav);
  connectButton("loginPageBtn20", loginBtn);
  // Ref-linken van buttons in de Bewerken navbar END

  // Ref-linken van buttons in de Verwijderen navbar BEGIN
  connectButton("dashboardPageBtn21", dashboardPageNav);
  connectButton("klantenPageBtn21", klantenPageNav);
  connectButton("projectenPageBtn21", projectenPageNav);
  connectButton("registeren-navBtn21", regerNav);
  connectButton("loginPageBtn21", loginBtn);
  // Ref-linken van buttons in de Verwijderen navbar END

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

  // Ref-linken van buttons in de Klant Bewerken navbar BEGIN
  connectButton("dashboardPageBtn6M", dashboardPageNavM);
  connectButton("klantenPageBtn6M", klantenPageNavM);
  connectButton("projectenPageBtn6M", projectenPageNavM);
  connectButton("loginPageBtn6M", loginBtnM);
  // Ref-linken van buttons in de Klant Bewerken navbar END

  // Ref-linken van buttons in de Klant Verwijderen navbar BEGIN
  connectButton("dashboardPageBtn7M", dashboardPageNavM);
  connectButton("klantenPageBtn7M", klantenPageNavM);
  connectButton("projectenPageBtn7M", projectenPageNavM);
  connectButton("loginPageBtn7M", loginBtnM);
  // Ref-linken van buttons in de Klant Verwijderen navbar END

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

  // Ref-linken van buttons in de Project Bewerken navbar BEGIN
  connectButton("dashboardPageBtn8M", dashboardPageNavM);
  connectButton("klantenPageBtn8M", klantenPageNavM);
  connectButton("projectenPageBtn8M", projectenPageNavM);
  connectButton("loginPageBtn8M", loginBtnM);
  // Ref-linken van buttons in de Project Bewerken navbar END

  // Ref-linken van buttons in de Project Verwijderen navbar BEGIN
  connectButton("dashboardPageBtn9M", dashboardPageNavM);
  connectButton("klantenPageBtn9M", klantenPageNavM);
  connectButton("projectenPageBtn9M", projectenPageNavM);
  connectButton("loginPageBtn9M", loginBtnM);
  // Ref-linken van buttons in de Project Verwijderen navbar END

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

  // Ref-linken van buttons in de Toevoegen Bewerken navbar BEGIN
  connectButton("dashboardPageBtn10M", dashboardPageNavM);
  connectButton("klantenPageBtn10M", klantenPageNavM);
  connectButton("projectenPageBtn10M", projectenPageNavM);
  connectButton("loginPageBtn10M", loginBtnM);
  // Ref-linken van buttons in de Toevoegen Bewerken navbar END

  // Ref-linken van buttons in de Toevoegen Verwijderen navbar BEGIN
  connectButton("dashboardPageBtn11M", dashboardPageNavM);
  connectButton("klantenPageBtn11M", klantenPageNavM);
  connectButton("projectenPageBtn11M", projectenPageNavM);
  connectButton("loginPageBtn11M", loginBtnM);
  // Ref-linken van buttons in de Toevoegen Verwijderen navbar END

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
