var myForm = document.getElementById("myForm");//gets elements by id

var maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
var femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

function getAkanName() {
    var Male = document.getElementById("Male")
    var Female = document.getElementById("Female")
    var date = document.getElementById("date")
    thisDate = date.value.split("-")

    var CC = parseInt(thisDate[0][0] + thisDate[0][1])
    
    var YY = parseInt(thisDate[0][2] + thisDate[0][3])
    var MM = parseInt(thisDate[1])
    var DD = parseInt([2])
    

    day = Math.floor(parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7)
    

    if (maleAkanNames[day] === undefined || femaleAkanNames[day] === undefined) {
        alert("invalid date")
    } else 
    {
        if (Male.checked === true) 
        {
            document.getElementById('result').textContent = "Your Akan name is " + maleAkanNames[day];

        } else (Female.checked === true)
         { 
            document.getElementById('result').textContent = "Your Akan name is " + femaleAkanNames[day]; }
    }
}