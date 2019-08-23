const el_name = document.getElementById("name");
const el_address = document.getElementById("address");
const el_description = document.getElementById("description");
const el_hours = document.getElementById("hours");
const el_number = document.getElementById("number");
const el_whatsapp = document.getElementById("whatsapp");
const el_website = document.getElementById("website");
const el_email = document.getElementById("email");

getCompanyInfo();

function getCompanyInfo(){
  var request = new XMLHttpRequest();

  request.open("GET", "/api/getCompany");

  request.onload = function(){
    if(request.readyState === 4){
      if(request.status === 200){
        var comp = JSON.parse(request.responseText)[0];
        el_name.innerText = comp.name;
        el_address.innerText = comp.address;
        el_description.innerText = comp.description;
        el_hours.innerText = comp.hours;
        el_number.innerText = comp.number;
        el_whatsapp.innerText = comp.whatsapp;
        el_website.innerText = comp.website;
        el_email.innerText = comp.email;
      } else {
        console.log("Error: " + request.status);
      }
    }
  }

  request.onerror = function(){
    console.log("Something went wrong!");
  }

  request.send(null);
}
