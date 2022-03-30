//Global Variables
let firstname = document.getElementById("firstname")
let regBtn = document.getElementById("regBtn")
let lastName = document.getElementById("lastName")
let enterAge = document.getElementById("enterAge")
let gender = document.getElementById("gender")
let phoneNumber = document.getElementById("phoneNumber")
let enterSchool = document.getElementById("enterSchool")
let firstNameError = document.getElementById("firstNameError")
let lastNameError = document.getElementById("lastNameError")
let ageError = document.getElementById("ageError")
let phoneNumberError = document.getElementById("phoneNumberError")
let schoolError = document.getElementById("schoolError")
let summaryHead=document.getElementById("summaryHead")
let ageSummary=document.getElementById("ageSummary")
let scores1 = document.getElementById("scores1")
let scores2 = document.getElementById("scores2")
let scores3 = document.getElementById("scores3")
let scores4 = document.getElementById("scores4")
let scores5 = document.getElementById("scores5")
let scores6 = document.getElementById("scores6")
let scores7 = document.getElementById("scores7")
let scores8 = document.getElementById("scores8")
let africaCountry = ["Nigeria", "Cameroon", "Ghana", "Egypt", "DR Congo", "Morocco", "Angola", "Mozambique", "Mali", "Malawi", "Senegal"]
let asiaCountry = ["China", "Japan", "Korea", "India", "Afghanistan", "Kazakhstan", "Vietnam", "Malaysia", "Yemen", "Thailand", "Iraq"]
let southAmerica = ["Brazil", "Argentina", "Chile", "Uruguay", "Paraguay", "Peru", "Ecuador", "Bolivia", "Colombia", "Venezuela"]
let northAmerica = ["US", "Canada", "Mexico", "Jamaica", "Cuba", "Dominica Republic", "Panama", "Haiti", "Greenland"]
let restofWorld = ["UK", "Finland", "Sweden", "Wales", "Portugal", "Germany", "Netherland", "Italy", "Israel", "Antarctica", "etc"]
let continent = document.getElementById("continent")
let country = document.getElementById("country")
let subjects = ["Chemistry", "Biology", "Physics", "Economics", "Geography", "Accounting", "Commerce", "Government", "Literature"]
let subjectsView = document.getElementById("subjectsView")
let selectSubjects = document.getElementById("selectSubjects")
let selectSubjects2 = document.getElementById("selectSubjects2")
let selectSubjects3 = document.getElementById("selectSubjects3")
let selectSubjects4 = document.getElementById("selectSubjects4")
let selectSubjects5 = document.getElementById("selectSubjects5")
let selectSubjects6 = document.getElementById("selectSubjects6")
let Average
let agePoint
let subjectPoint
let countryPoint
let TotalPoints
var totalScores

//Event Listeners
regBtn.addEventListener('click', function () {
    validateAll()
})
continent.addEventListener('change', function () {
    continentChange()
})

selectSubjects.addEventListener("change", function () {
    let subjectIndex = selectSubjects.value
    subjects.splice(subjectIndex, 1)
    loopSubjects2()
    loopSubjects3()
    loopSubjects4()
    loopSubjects5()
    loopSubjects6()
})
selectSubjects2.addEventListener("change", function () {
    let subjectIndex2 = selectSubjects2.value
    subjects.splice(subjectIndex2, 1)
    loopSubjects3()
    loopSubjects4()
    loopSubjects5()
    loopSubjects6()
})
selectSubjects3.addEventListener("change", function () {
    let subjectIndex3 = selectSubjects3.value
    subjects.splice(subjectIndex3, 1)
    loopSubjects4()
    loopSubjects5()
    loopSubjects6()
})

selectSubjects4.addEventListener("change", function () {
    let subjectIndex4 = selectSubjects4.value
    subjects.splice(subjectIndex4, 1)
    loopSubjects5()
    loopSubjects6()
})
selectSubjects5.addEventListener("change", function () {
    let subjectIndex5 = selectSubjects5.value
    subjects.splice(subjectIndex5, 1)
    loopSubjects6()
})
selectSubjects6.addEventListener("change", function () {
    let subjectIndex6 = selectSubjects6.value
    subjects.splice(subjectIndex6, 1)
})

function validateAll() {
    if (firstname.value == "") {
        alert("First Name is required")
        // firstNameError.innerHTML = "error! First Name is required"
    } else if (lastName.value == "") {
        alert("Last Name is required")
        // lastNameError.innerHTML = "error! Last Name is required"
    } else if (enterAge.value == "") {
        // ageError.innerHTML = "error! Age is required"
        alert("Age is required")
    } else if (gender.value == "" || gender.value == null) {
        // genderError.innerHTML=="Please choose your gender"
        alert("Please select Gender")
    } else if (phoneNumber.value == "") {
        // phoneNumberError.innerHTML="error! Mobile Number is required"
        alert("Phone number is required")
    } else if (enterSchool.value == "") {
        alert("School is required")
        // schoolError.innerHTML=="Please Enter School Name"
    } else if (continent.value == "emptyContinent") {
        alert("Please Select your Continent and Country")
    } else if (selectSubjects.value == "") {
        alert("Please Select eight Subjects")
    } else if (selectSubjects2.value == "") {
        alert("Please Select eight Subjects")
    } else if (selectSubjects3.value == "") {
        alert("Please Select eight Subjects")
    } else if (selectSubjects4.value == "") {
        alert("Please Select eight Subjects")
    } else if (selectSubjects5.value == "") {
        alert("Please Select eight Subjects")
    } else if (selectSubjects6.value == "") {
        alert("Please Select eight Subjects")
    } else if (scores1.value == "") {
        alert("Scores cannot be empty")
    } else if (scores2.value == "") {
        alert("Scores cannot be empty")
    } else if (scores3.value == "") {
        alert("Scores cannot be empty")
    } else if (scores4.value == "") {
        alert("Scores cannot be empty")
    } else if (scores5.value == "") {
        alert("Scores cannot be empty")
    } else if (scores6.value == "") {
        alert("Scores cannot be empty")
    } else if (scores7.value == "") {
        alert("Scores cannot be empty")
    } else if (scores8.value == "") {
        alert("Scores cannot be empty")
    } else {
        calcAgePoint()
    }
}

function calcAgePoint() {
    if (enterAge.value <= 24 && enterAge.value >= 18) {
        agePoint = 100
    } else if (enterAge.value <= 30 && enterAge.value >= 25) {
        agePoint = 80
    } else if (enterAge.value <= 35 && enterAge.value >= 31) {
        agePoint = 50
    } else if (enterAge.value <= 40 && enterAge.value >= 36) {
        agePoint = 30
    } else if (enterAge.value > 40) {
        agePoint = +10
    } else {
    } subjectAverage()
    console.log("Points for Age= " + agePoint);
}

function subjectAverage() {
    // alert("Hi br")
    totalScores = parseInt(scores1.value) + parseInt(scores2.value) + parseInt(scores3.value) + parseInt(scores4.value) + parseInt(scores5.value) + parseInt(scores6.value) + parseInt(scores7.value) + parseInt(scores8.value)
    console.log("Subject Total Score= " + totalScores);
    Average = (totalScores) / 8
    console.log("Average= " + Average);
    if (Average <= 100 && Average >= 90) {
        subjectPoint = 150
    } else if (Average <= 89 && Average >= 85) {
        subjectPoint = 140;
    } else if (Average <= 84 && Average >= 75) {
        subjectPoint = 120
    } else if (Average <= 74 && Average >= 65) {
        subjectPoint = 100
    } else if (Average <= 64 && Average >= 60) {
        subjectPoint = 80
    } else if (Average <= 59 && Average >= 50) {
        subjectPoint = 50
    } else if (Average <= 49 && Average >= 40) {
        subjectPoint = 20
    } continentPoint()
    console.log("Point for average=" + subjectPoint);
}

function continentPoint() {
    if (continent.value == "africaSelect") {
        countryPoint = 50
    } else if (continent.value == "asiaSelect") {
        countryPoint = 40
    } else if (continent.value == "southAmerica") {
        countryPoint = 30
    } else if (continent.value == "northAmerica") {
        countryPoint = 20
    } else if (continent.value == "rotw") {
        countryPoint = 10
    } totalPoint()
    console.log("Point for Country= " + countryPoint);
}

function totalPoint() {
    TotalPoints = agePoint + subjectPoint + countryPoint
    alert("Your total point= " + TotalPoints)
    summary()
}

function summary() {
    summaryHead.innerHTML="SUMMARY"  
    ageSummary.innerHTML=`For your age, you got ${agePoint} points`
    totalSubjectscore.innerHTML=`The total Score for your subject=${totalScores}`
    averageSummary.innerHTML=`The average score for the eight subjects=${Average}`
    averagePoints.innerHTML=`For the average above, you got ${subjectPoint}points`
    countryPoint.innerHTML=`For your Continent selected, you got ${countryPoint}points`
    cumulative.innerHTML=`You got a total of ${TotalPoints}points`
    if (TotalPoints>=180) {
        remark.innerHTML="Congratulations! You have been granted a fully funded Scholarship into Rework Academy"
        jsChart()
    }else if (TotalPoints<180) {
        remark.innerHTML="Ouch! Sorry you do not meet the requirement for our Scholarship"
    }
}

function jsChart() {
var ctx = document.getElementById('myChart').getContext('2d');
var myChart 
myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Age', 'Average', 'Country'],
        datasets: [{
            label: ['Points'],
            data: [agePoint, subjectPoint, countryPoint],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
        }]
    },
    options: {
        title:{
            display: true,
            text:'Chart showing Eligibility points',
            fontSize:25},
        legend:{
            display:false,
            position:'right',
            labels:{
                fontColor:'#000'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
}
});
}
function continentChange() {
    if (continent.value == "africaSelect") {
        let allOptions = ""
        for (var i = 0; i < africaCountry.length; i++) {
            allOptions += `<option value="${africaCountry[i]}">${africaCountry[i]}</option>`
        } country.innerHTML = `<option value="">Select Country</option> ${allOptions}`
    } else if (continent.value == "asiaSelect") {
        let allOptions = ""
        for (var a = 0; a < asiaCountry.length; a++) {
            allOptions += `<option value="${asiaCountry[a]}">${asiaCountry[a]}</option>`
        } country.innerHTML = `<option value="">Select Country</option> ${allOptions}`
    } else if (continent.value == "southAmerica") {
        let allOptions = ""
        for (var a = 0; a < southAmerica.length; a++) {
            allOptions += `<option value="${southAmerica[a]}">${southAmerica[a]}</option>`
        } country.innerHTML = `<option value="">Select Country</option> ${allOptions}`
    } else if (continent.value == "northAmerica") {
        let allOptions = ""
        for (var a = 0; a < northAmerica.length; a++) {
            allOptions += `<option value="${northAmerica[a]}">${northAmerica[a]}</option>`
        } country.innerHTML = `<option value="">Select Country</option> ${allOptions}`
    } else if (continent.value == "rotw") {
        let allOptions = ""
        for (var a = 0; a < restofWorld.length; a++) {
            allOptions += `<option value="${restofWorld[a]}">${restofWorld[a]}</option>`
        } country.innerHTML = `<option value="">Select Country</option> ${allOptions}`
    }
}

loopSubjects()
loopSubjects2()
loopSubjects3()
loopSubjects4()
loopSubjects5()
loopSubjects6()
function loopSubjects() {
    let allOptions = ""
    for (let a = 0; a < subjects.length; a++) {
        allOptions += ` <option value="${a}"> ${subjects[a]}</option>`
        console.log(subjects);
    }
    selectSubjects.innerHTML = `  <option value="">Select Subjects</option> ${allOptions}`
}

function loopSubjects2() {
    let allOptions = ""
    for (let a = 0; a < subjects.length; a++) {
        allOptions += ` <option value="${a}"> ${subjects[a]}</option>`
    }

    selectSubjects2.innerHTML = `  <option value="">Select Subjects</option> ${allOptions}`
}

function loopSubjects3() {
    let allOptions = ""
    for (let a = 0; a < subjects.length; a++) {
        allOptions += ` <option value="${a}"> ${subjects[a]}</option>`
    }
    selectSubjects3.innerHTML = `  <option value="">Select Subjects</option> ${allOptions}`
}
function loopSubjects4() {
    let allOptions = ""
    for (let a = 0; a < subjects.length; a++) {
        allOptions += ` <option value="${a}"> ${subjects[a]}</option>`
    }
    selectSubjects4.innerHTML = `  <option value="">Select Subjects</option> ${allOptions}`
}
function loopSubjects5() {
    let allOptions = ""
    for (let a = 0; a < subjects.length; a++) {
        allOptions += ` <option value="${a}"> ${subjects[a]}</option>`
    }
    selectSubjects5.innerHTML = `  <option value="">Select Subjects</option> ${allOptions}`
}
function loopSubjects6() {
    let allOptions = ""
    for (let a = 0; a < subjects.length; a++) {
        allOptions += ` <option value="${a}"> ${subjects[a]}</option>`
    }
    selectSubjects6.innerHTML = `  <option value="">Select Subjects</option> ${allOptions}`
}