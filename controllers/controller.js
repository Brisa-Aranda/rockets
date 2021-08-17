"use strict";
var rockets = [];
// Create Rocket1
function create1() {
    var brandName = "32WESSDS";
    var thrusters;
    if (findRocket("1") === undefined) {
        thrusters = [new Thruster(10),
            new Thruster(30),
            new Thruster(80)];
        var newRocket = new Rocket(brandName, thrusters);
        console.log("New Rocket:");
        alert("Rocket1 created!");
        console.log(newRocket);
        rockets.push(newRocket);
        console.log("added " + newRocket + " to 'rockets'");
        console.log(rockets);
    }
    else {
        alert("Rocket1 already exists");
    }
}
// Create Rocket2
function create2() {
    var brandName = "LDSFJA32";
    var thrusters;
    if (findRocket("2") === undefined) {
        thrusters = [
            new Thruster(30),
            new Thruster(40),
            new Thruster(50),
            new Thruster(50),
            new Thruster(30),
            new Thruster(10)
        ];
        var newRocket = new Rocket(brandName, thrusters);
        console.log("New Rocket:");
        alert("Rocket2 created!");
        console.log(newRocket);
        rockets.push(newRocket);
        console.log("added " + newRocket + " to 'rockets'");
        console.log(rockets);
    }
    else {
        alert("Rocket2 already exists");
    }
}
/* Print Rocket1*/
function print1() {
    var indexRocket = findRocket("1");
    if (indexRocket !== undefined) {
        var message = "Rocket\u00B4s name = " + rockets[indexRocket].brandName + "<br><br>" +
            ("Actual Rocket Power = " + rockets[indexRocket].Poten_Act) + "<br><br>" +
            "Maximum powers of the thrusters: ";
        var message1 = [];
        for (var _i = 0, _a = rockets[indexRocket].thrusters; _i < _a.length; _i++) {
            var item = _a[_i];
            message1.push(item.Poten_Max);
        }
        message += message1.toString();
        document.getElementById("result").innerHTML = message;
    }
    else {
        alert("Rocket1 has not been created");
    }
}
/* Print Rocket2*/
function print2() {
    var indexRocket = findRocket("2");
    if (indexRocket !== undefined) {
        var message = "Rocket\u00B4s name = " + rockets[indexRocket].brandName + "<br><br>" +
            ("Actual Rocket Power = " + rockets[indexRocket].Poten_Act) + "<br><br>" +
            "Maximum powers of the thrusters: ";
        var message1 = [];
        for (var _i = 0, _a = rockets[indexRocket].thrusters; _i < _a.length; _i++) {
            var item = _a[_i];
            message1.push(item.Poten_Max);
        }
        message += message1.toString();
        document.getElementById("result").innerHTML = message;
    }
    else {
        alert("Rocket1 has not been created");
    }
}
/*Print Rockets*/
function printRockets() {
    var message = "";
    if (rockets.length === 0) {
        alert("Aún no se ha creado ningún cohete!");
    }
    else {
        for (var _i = 0, rockets_1 = rockets; _i < rockets_1.length; _i++) {
            var item = rockets_1[_i];
            message += "Rocket's Name = " + item.brandName + "<br>" +
                ("Actual Rocket Power = " + item.Poten_Act) + "<br>" +
                "Maximum powers of the thrusters: ";
            var message1 = [];
            for (var _a = 0, _b = item.thrusters; _a < _b.length; _a++) {
                var thruster = _b[_a];
                message1.push(thruster.Poten_Max);
            }
            message += message1.toString() + ".<br><br>";
        }
        document.getElementById("result").innerHTML = message;
    }
}
/*Arrays*/
function findRocket(RocketToFind) {
    var indexOfFound;
    if (rockets.length === 0) {
        console.log("No rocket has been created");
    }
    else {
        for (var _i = 0, rockets_2 = rockets; _i < rockets_2.length; _i++) {
            var rocket = rockets_2[_i];
            switch (RocketToFind) {
                case "1":
                    if (rocket.brandName === "32WESSDS") {
                        indexOfFound = rockets.indexOf(rocket);
                    }
                    break;
                case "2":
                    if (rocket.brandName === "LDSFJA32") {
                        indexOfFound = rockets.indexOf(rocket);
                    }
                    break;
            }
        }
    }
    return indexOfFound;
}
/*Speed Rocket1*/
document.getElementById("speed1").addEventListener("click", function () {
    var indexOfFound = findRocket("1");
    if (indexOfFound !== undefined) {
        console.log("Rocket1 ready to accelerate");
        if (rockets[indexOfFound].Poten_Act < calcularPotenciaMaxima(rockets[indexOfFound])) {
            rockets[indexOfFound].speed();
            calcularPotenciaActual(rockets[indexOfFound]);
            console.log("Speed Rocket1 complet!");
            alert("Rocket1 speed!! Actual Power = " + rockets[indexOfFound].Poten_Act);
        }
        else {
            alert("Full power, can't be accelerate!");
        }
    }
});
/*Speed Rocket2*/
document.getElementById("speed2").addEventListener("click", function () {
    var indexOfFound = findRocket("2");
    if (indexOfFound !== undefined) {
        console.log("Rocket1 ready to accelerate");
        if (rockets[indexOfFound].Poten_Act < calcularPotenciaMaxima(rockets[indexOfFound])) {
            rockets[indexOfFound].speed();
            calcularPotenciaActual(rockets[indexOfFound]);
            console.log("Speed Rocket1 complet!");
            alert("Rocket2 speed!! Actual Power = " + rockets[indexOfFound].Poten_Act);
        }
        else {
            alert("Full power, can't be accelerate!");
        }
    }
});
//   Stop Rocket1
document.getElementById("stop1").addEventListener("click", function () {
    var indexOfFound = findRocket("1");
    if (indexOfFound !== undefined) {
        console.log("Rocket1 ready to stop");
        if (rockets[indexOfFound].Poten_Act > 0) {
            rockets[indexOfFound].stop();
            calcularPotenciaActual(rockets[indexOfFound]);
            console.log("Rocket1 deceleration completed!");
            alert("Rocket1 stopped!! Current Power = " + rockets[indexOfFound].Poten_Act);
        }
        else {
            alert("It is not possible to brake! The current power of the rocket is = " + rockets[indexOfFound].Poten_Act);
        }
    }
});
//   Stop Rocket2
document.getElementById("stop2").addEventListener("click", function () {
    var indexOfFound = findRocket("2");
    if (indexOfFound !== undefined) {
        console.log("Rocket2 ready to stop");
        if (rockets[indexOfFound].Poten_Act > 0) {
            rockets[indexOfFound].stop();
            calcularPotenciaActual(rockets[indexOfFound]);
            console.log("Rocket2 deceleration completed!");
            alert("Rocket2 stopped!! Current Power = " + rockets[indexOfFound].Poten_Act);
        }
        else {
            alert("It is not possible to brake! The current power of the rocket is = " + rockets[indexOfFound].Poten_Act);
        }
    }
});
function calcularPotenciaActual(rocket) {
    var result = 0;
    for (var _i = 0, _a = rocket.thrusters; _i < _a.length; _i++) {
        var thruster = _a[_i];
        result += thruster.Poten_Act;
    }
    rocket.Poten_Act = result;
    console.log("The current rocket power " + rocket + " is = " + result);
}
function calcularPotenciaMaxima(rocket) {
    var result = 0;
    for (var _i = 0, _a = rocket.thrusters; _i < _a.length; _i++) {
        var thruster = _a[_i];
        result += thruster.Poten_Max;
    }
    console.log("Maximum power of the rocket " + rocket + " is = " + result);
    return result;
}
