// Just to clear things out
console.log();
console.log();

// Start Code
var x = true;
var y = false;

var s = 'Nic';
var t = "Nic Cage's Best Films";

var m = 12;
var n = 12.123456789;

var arr = [2, 3, 4, 5];

var person = {
    age: 24,
    'first-name': 'Ryan',
    students: ['Cole', 'Alia', 'Scott'],
    favoriteGifs: {
        yatta: 'http://www.vixenvarsity.com/wp-content/uploads/2015/01/hiro-heroes-yatta.gif',
        waaaaa: 'http://gifrific.com/wp-content/uploads/2015/02/Despicable-Me-Minion-Saying-What.gif',
    }
};

function addAGif (name, url) {
    person.favoriteGifs[name] = url;
};

function validateAllowedAge (age) {
    return age >= 21;
};

var closingTime = 23;

function isBrunch (hour) {
    return hour >= 11 && hour < 14;
};

function isDinner (hour) {
    return hour >= 17 && hour < closingTime;
}

function isBuisnessHours (hour) {
    return isBrunch(hour) || isDinner(hour);
}

function isLastCall (hour) {
    if (hour == closingTime - 1) {
        return true;
    } else {
        return false;
    }
};

var time = 23;
var pirates = [
    'Flapjack',
    'Patchy',
    'Captain Hook',
    'Russford T Higgins',
    'you',
    'you',
    'you',
    'you',
    'you',
    'you',
    'you',
    'you',
    'you',
    'EVERYONE',
];

for (var l = 0; l < pirates.length; l++) {
    console.log(pirates[l]);
}

// Just to clear things out
console.log();
console.log();
