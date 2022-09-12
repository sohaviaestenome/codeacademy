"use strict";
exports.__esModule = true;
var raccoon_meadows_log_1 = require("./raccoon-meadows-log");
var wolf_point_log_1 = require("./wolf-point-log");
function combineVolunteers(volunteers) {
    return volunteers.map(function (volunteer) {
        var id = volunteer.id;
        if (typeof id === 'string') {
            id = parseInt(id, 10);
        }
        return {
            id: id,
            name: volunteer.name,
            activities: volunteer.activities
        };
    });
}
var isVerified = function (verified) {
    if (typeof verified === 'string') {
        return verified === 'Yes';
    }
    return verified;
};
var getHours = function (activity) {
    if ('hours' in activity) {
        return activity.hours;
    }
    else {
        return activity.time;
    }
};
function calculateHours(volunteers) {
    return volunteers.map(function (volunteer) {
        var hours = 0;
        volunteer.activities.forEach(function (activity) {
            if (isVerified(activity.verified)) {
                hours = hours + getHours(activity);
            }
        });
        return {
            id: volunteer.id,
            name: volunteer.name,
            hours: hours
        };
    });
}
var byHours = function (a, b) {
    return b.hours - a.hours;
};
var combinedVolunteers = combineVolunteers([].concat(wolf_point_log_1.wolfPointVolunteers, raccoon_meadows_log_1.raccoonMeadowsVolunteers));
var result = calculateHours(combinedVolunteers);
console.log(result.sort(byHours));
