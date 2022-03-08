var myForm=document.getElementById("myForm");//gets elements by id

var maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
var femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

myForm.addEventListener("submit", (e) => {
        e.preventDefault(); //on form submission, prevent default
        var gender=document.getElementByName("gender");
        var formData = new FormData(e.target);//collect inputs from HTML elements
        var dateEntered=new Date(formData.get("name"));
        var day=dateEntered.getDay();
        alert(day)
//gender
        if (formData.get("gender") == "Male") {
            document.getElementById('result').innerHTML = "You Akan name is" + maleAkanNames[dateEntered.getDate()];
      alert(male)
        } else {
            document.getElementById('result').innerHTML = "YouAkan name is" + femaleAkanNames[dateEntered.getDate()];
      alert(female)
        }
    })
