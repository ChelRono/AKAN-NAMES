console.log(Akan-names)
//formula to determine day of month

//creating arrays for female and male Akan names and days of the week
  var days0fWeek=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var maleAkanNames=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
  var femaleAkanNames=['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
  let form=document.getElementById("form");
  form.addEventListener("Submit", (Event));{event.preventDefault();
}
gender = document.getElementById("Gender").value
    date= document.getElementById("date").value

    let yearOfBirth=date.getFullYear();
    let monthOfTheYear=date.getMonth();
    let day=daysOfWeek[date.getDay()];
