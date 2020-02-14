
function validateform(){
    var day = Number(document.getElementById("day-to-earth").value);
    var month = Number(document.getElementById("month-to-earth").value);
    var year = Number(document.getElementById("year").value);
    var century = Number(document.getElementById("century").value);
    var genderSelected = document.getElementsByName("gender");
    function genderPicked() {
    for (var gender of genderSelected) {
    if (gender.checked){
    return gender.value;
    }
    }
    }
    var genderValue = genderPicked();
    // alert(genderValue);
    function dayValid () {
    if (day < 1 || day > 31) {
    alert("Invalid day")
    return false;
    } else {
    return true;
    }
    }
    function monthValid () {
    if (month < 1 || month > 12) {
    alert ("Invalid month");
    return false;
    } else {
    return true;
    }
    }
    
    var isDayValid = dayValid();
    var isMonthValid = monthValid();
   
    var dayIndex = Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day) % 7);
    var akanName;
    if (genderValue === "male") {
    switch(dayIndex) {
    case 0:
    akanName = "Kwasi";
    alert("Hey there,Your name is Kwasi born on a sunday");
    break;
    case 1:
    akanName = "Kwadwo";
    alert("Hey there,Your name is Kwadwo born on a monday");
    break;
    case 2:
    akanName = "Kwabena";
    alert("Hey there,Your name is Kwabena born on tuesday");
    break;
    case 3:
    akanName = "Kwaku";
    alert("Hey there,Your name is Kwaku born on a wednasday");
    break;
    case 4:
    akanName = "Yaw";
    alert("Hey there,Your name is Yaw born on a thursday");
    break;
    case 5:
    akanName = "Kofi";
    alert("Hey there,Your name is Kofi born on a friday");
    break;
    case 6:
    akanName = "Kwame";
    alert("Hey there,Your name is Kwame born on a sarturday");
    break;
    default:
    akanName = "Please input the correct details!"
    alert("Please input the correct details!");
    }
    } else if (genderValue = "female") {
    switch(dayIndex) {
    case 0:
    akanName = "Akosua";
    alert("Hey there,Your name is Akosua born on a sunday");
    break;
    case 1:
    akanName = "Adwoa";
    alert("Hey there,Your name is Adwoa born on a monday");
    break;
    case 2:
    akanName = "Abenaa";
    alert("Hey there,Your name is Abenaa born on a tuesday");
    break;
    case 3:
    akanName = "Akua";
    alert("Hey there,Your name is Akua born on a wednasday");
    break;
    case 4:
    akanName = "Yaa";
    alert("Hey there,Your name is Yaa born on a thursday");
    break;
    case 5:
    akanName = "Afua";
    alert("Hey there,Your name is Afua born on a friday");
    break;
    case 6:
    akanName = "Ama";
    alert("Hey there,Your name is Ama borm on a sarturday");
    break;
    default:
    akanName = "Please input the correct details!"
    alert("Please input the correct details!");
    }
    } else {
    alert("Please try again with the correct data.");
    }
   }
