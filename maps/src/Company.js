"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var faker_1 = __importDefault(require("faker"));
var Company = /** @class */ (function () {
    function Company() {
        // Usually at the top
        this.companyName = faker_1.default.company.companyName();
        this.catchPhrase = faker_1.default.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker_1.default.address.latitude()),
            lng: parseFloat(faker_1.default.address.longitude()),
        };
    }
    Company.prototype.markerContent = function () {
        return "\n    <h3>\n    Comapny is " + this.companyName + " \n    and say " + this.catchPhrase + "\n    </h3>\n    ";
    };
    return Company;
}());
exports.Company = Company;
