let rockets: Rocket[] = [];

// Create Rocket1
function create1() {
    let brandName = "32WESSDS";
    let thrusters;

    if (findRocket("1") === undefined) {
        thrusters = [new Thruster(10),
        new Thruster(30),
        new Thruster(80)];
        let newRocket = new Rocket(brandName, thrusters);
        console.log(`New Rocket:`);
        alert("Rocket1 created!");
        console.log(newRocket);
        rockets.push(newRocket);
        console.log(`added ${newRocket} to 'rockets'`);
        console.log(rockets);
    } else {
        alert("Rocket1 already exists");
    }
}

// Create Rocket2
function create2() {
    let brandName = "LDSFJA32";
    let thrusters;

    if (findRocket("2") === undefined) {
        thrusters = [
            new Thruster(30),
            new Thruster(40),
            new Thruster(50),
            new Thruster(50),
            new Thruster(30),
            new Thruster(10)
        ];
        let newRocket = new Rocket(brandName, thrusters);
        console.log(`New Rocket:`);
        alert("Rocket2 created!");
        console.log(newRocket);
        rockets.push(newRocket);
        console.log(`added ${newRocket} to 'rockets'`);
        console.log(rockets);
    } else {
        alert("Rocket2 already exists");
    }
}
/* Print Rocket1*/
function print1() {
    let indexRocket = findRocket("1");
    if (indexRocket !== undefined) {
        let message = `Rocket´s name = ${rockets[indexRocket].brandName}` + "<br><br>" +
            `Actual Rocket Power = ${rockets[indexRocket].Poten_Act}` + "<br><br>" +
            "Maximum powers of the thrusters: ";
        let message1 = [];
        for (const item of rockets[indexRocket].thrusters) {
            message1.push(item.Poten_Max);
        }
        message += message1.toString();
        (document.getElementById("result") as HTMLInputElement).innerHTML = message;
    } else {
        alert("Rocket1 has not been created");
    }
}
/* Print Rocket2*/
function print2() {
    let indexRocket = findRocket("2");
    if (indexRocket !== undefined) {
        let message = `Rocket´s name = ${rockets[indexRocket].brandName}` + "<br><br>" +
            `Actual Rocket Power = ${rockets[indexRocket].Poten_Act}` + "<br><br>" +
            "Maximum powers of the thrusters: ";
        let message1 = [];
        for (const item of rockets[indexRocket].thrusters) {
            message1.push(item.Poten_Max);
        }
        message += message1.toString();
        (document.getElementById("result") as HTMLInputElement).innerHTML = message;
    } else {
        alert("Rocket1 has not been created");
    }
}
/*Print Rockets*/
function printRockets() {
    let message = "";

    if (rockets.length === 0) {
        alert("Aún no se ha creado ningún cohete!");
    } else {
        for (const item of rockets) {
            message += `Rocket's Name = ${item.brandName}` + "<br>" +
                `Actual Rocket Power = ${item.Poten_Act}` + "<br>" +
                "Maximum powers of the thrusters: ";
            let message1 = [];
            for (const thruster of item.thrusters) {
                message1.push(thruster.Poten_Max);
            }
            message += message1.toString() + ".<br><br>";
        }

        (document.getElementById("result") as HTMLInputElement).innerHTML = message;
    }
}
/*Arrays*/
function findRocket(RocketToFind: string) {
    let indexOfFound: number | undefined;

    if (rockets.length === 0) {
        console.log("No rocket has been created");
    } else {
        for (const rocket of rockets) {
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
document.getElementById("speed1")!.addEventListener("click", () => {
    let indexOfFound = findRocket("1");

    if (indexOfFound !== undefined) {
        console.log("Rocket1 ready to accelerate");
        if (rockets[indexOfFound].Poten_Act < calcularPotenciaMaxima(rockets[indexOfFound])) {
            rockets[indexOfFound].speed();
            calcularPotenciaActual(rockets[indexOfFound]);
            console.log("Speed Rocket1 complet!");
            alert(`Rocket1 speed!! Actual Power = ${rockets[indexOfFound].Poten_Act}`);
        } else {
            alert("Full power, can't be accelerate!");
        }
    }
});
/*Speed Rocket2*/
document.getElementById("speed2")!.addEventListener("click", () => {
    let indexOfFound = findRocket("2");

    if (indexOfFound !== undefined) {
        console.log("Rocket1 ready to accelerate");
        if (rockets[indexOfFound].Poten_Act < calcularPotenciaMaxima(rockets[indexOfFound])) {
            rockets[indexOfFound].speed();
            calcularPotenciaActual(rockets[indexOfFound]);
            console.log("Speed Rocket1 complet!");
            alert(`Rocket2 speed!! Actual Power = ${rockets[indexOfFound].Poten_Act}`);
        } else {
            alert("Full power, can't be accelerate!");
        }
    }
});

//   Stop Rocket1
document.getElementById("stop1")!.addEventListener("click", () => {
    let indexOfFound = findRocket("1");

    if (indexOfFound !== undefined) {
        console.log("Rocket1 ready to stop");
        if (rockets[indexOfFound].Poten_Act > 0) {
            rockets[indexOfFound].stop();
            calcularPotenciaActual(rockets[indexOfFound]);
            console.log("Rocket1 deceleration completed!");
            alert(`Rocket1 stopped!! Current Power = ${rockets[indexOfFound].Poten_Act}`);
        } else {
            alert(`It is not possible to brake! The current power of the rocket is = ${rockets[indexOfFound].Poten_Act}`);
        }
    }
});

//   Stop Rocket2
document.getElementById("stop2")!.addEventListener("click", () => {
    let indexOfFound = findRocket("2");

    if (indexOfFound !== undefined) {
        console.log("Rocket2 ready to stop");
        if (rockets[indexOfFound].Poten_Act > 0) {
            rockets[indexOfFound].stop();
            calcularPotenciaActual(rockets[indexOfFound]);
            console.log("Rocket2 deceleration completed!");
            alert(`Rocket2 stopped!! Current Power = ${rockets[indexOfFound].Poten_Act}`);
        } else {
            alert(`It is not possible to brake! The current power of the rocket is = ${rockets[indexOfFound].Poten_Act}`);
        }
    }
});



function calcularPotenciaActual(rocket: Rocket) {
    let result = 0;
    for (const thruster of rocket.thrusters) {
        result += thruster.Poten_Act;
    }
    rocket.Poten_Act = result;
    console.log(`The current rocket power ${rocket} is = ${result}`);
}

function calcularPotenciaMaxima(rocket: Rocket) {
    let result = 0;
    for (const thruster of rocket.thrusters) {
        result += thruster.Poten_Max;
    }
    console.log(`Maximum power of the rocket ${rocket} is = ${result}`);
    return result;
}