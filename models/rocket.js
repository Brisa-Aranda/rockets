"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(brandName, thrusters) {
        this.brandName = brandName;
        this.Poten_Act = 0;
        this.thrusters = thrusters;
    }
    Rocket.prototype.speed = function () {
        for (var _i = 0, _a = this.thrusters; _i < _a.length; _i++) {
            var thruster = _a[_i];
            if (thruster.Poten_Act < thruster.Poten_Max) {
                thruster.Poten_Act = thruster.Poten_Act + 10;
                console.log("thruster " + this.thrusters.indexOf(thruster) + " aceler\u00F3 +10!");
            }
        }
    };
    Rocket.prototype.stop = function () {
        for (var _i = 0, _a = this.thrusters; _i < _a.length; _i++) {
            var thruster = _a[_i];
            if (thruster.Poten_Act > 0) {
                thruster.Poten_Act = thruster.Poten_Act - 10;
                console.log("thruster " + this.thrusters.indexOf(thruster) + " fren\u00F3 +10!");
            }
        }
    };
    return Rocket;
}());
var Thruster = /** @class */ (function () {
    function Thruster(Poten_Max) {
        this.Poten_Act = 0;
        this.Poten_Max = Poten_Max;
    }
    Object.defineProperty(Thruster.prototype, "getPoten_Max", {
        get: function () {
            return this.Poten_Max;
        },
        enumerable: false,
        configurable: true
    });
    return Thruster;
}());
