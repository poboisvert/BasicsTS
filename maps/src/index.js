"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var Company_1 = require("./Company");
var CustomMap_1 = require("./CustomMap");
// Initialize and add the map
var user = new User_1.User();
var customMap = new CustomMap_1.CustomMap("map");
var company = new Company_1.Company();
customMap.addMarker(user); // Link User to CustomMap
customMap.addMarker(company);
