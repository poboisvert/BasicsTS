"use strict";
var profile = {
    name: "PartyPeople",
    age: 18,
    coords: {
        lat: 0,
        lng: 10,
    },
    setAge: function (age) {
        this.age = age;
    },
};
// ES2015 - Destructuring
var age = profile.age; // Fetch from const profile
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
var age = profile.age, name = profile.name; // Fetch from const profile
