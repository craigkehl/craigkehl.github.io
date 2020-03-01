const windChillDisp = document.getElementById("wChill");
const cTmp = parseFloat(document.getElementById("high").textContent);
const wSpeed = parseFloat(document.getElementById("wSpeed").textContent);

let calcWindChill = checkInput(wSpeed, cTmp);


function checkInput(ws, ct) {

  if (ws >= 4.8 && ct <= 50) { // make sure windspeed is at or above 4.8 mph and temp is at or below 50 degrees Fahrenheit. 
    
    let windchill = (35.74 + (.6215 * ct) - (35.75 * (Math.pow(ws, .16))) + (.4275 * (ct * (Math.pow(ws, .16)))));

    // document.getElementById("wChill").textContent = Math.floor(windchill);
    windChillDisp.innerHTML = Math.floor(windchill) + "&deg F";
  }
  else {
    
    windChillDisp = "Error";
  }
}