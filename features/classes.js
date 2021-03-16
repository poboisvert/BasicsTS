"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Init
var Mobile = /** @class */ (function () {
    function Mobile(color) {
        this.color = color;
    }
    // Always a M not m
    Mobile.prototype.drive = function () {
        console.log("burp brup");
    }; // Blueprint of what the object should be
    Mobile.prototype.honk = function () {
        console.log("MUU MUUUUUU");
    };
    return Mobile;
}());
var mobile = new Mobile("black"); // mobile
// mobile.drive();
// mobile.honk();
// RUN ts-node classes.ts
// All mothods Mobile into CAR
var Mobile2 = /** @class */ (function (_super) {
    __extends(Mobile2, _super);
    function Mobile2(headphones, color) {
        var _this = _super.call(this, color) || this;
        _this.headphones = headphones;
        return _this;
    }
    return Mobile2;
}(Mobile));
var Mobile3 = /** @class */ (function (_super) {
    __extends(Mobile3, _super);
    function Mobile3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mobile3.prototype.driveMobile = function () {
        // We override driver() - override super class / parent
        console.log("Mobile3 Extends");
    };
    Mobile3.prototype.startMobile = function () {
        this.drive();
    };
    return Mobile3;
}(Mobile));
var Car = new Mobile2(2, "black");
Car.drive();
var Car2 = new Mobile3("black");
// Car2.drive();
Car2.driveMobile();
// RUN ts-node classes.ts
// Constructor
var MobileColor = /** @class */ (function () {
    // Constructor
    function MobileColor(color) {
        this.color = color;
    }
    return MobileColor;
}());
var mobileColor = new MobileColor("black"); // mobile
console.log(mobileColor.color);
