




let country = document.getElementById("country");
let place = document.getElementById("location");
let button = document.getElementById("collegeSelector");
let uniName = document.getElementById("Name");



button.onclick = function () {
    let requestURL = "http://universities.hipolabs.com/search?country=United+Kingdom";


    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            uniIndex = Math.floor(Math.random() * data.length);
            university = data[uniIndex];

            uniName.innerHTML = university.name;
            country.innerHTML = university.country;


        })
        .catch(function (error) {
            console.log("Error during fetch:", error);
        });


}