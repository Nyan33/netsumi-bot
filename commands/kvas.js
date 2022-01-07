"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.names = exports.run = void 0;
function run(e) {
    var d = Math.random();
    var roll = (Math.floor(Math.random() * 6) + 1);
    //console.log('chance: ' + d, '  roll: ' + roll)
    if (roll == 1 && d < 0.1) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/k1.jpg"
            ]
        });
    }
    else if (roll == 2 && d < 0.1) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/k2.jpg"
            ]
        });
    }
    else if (roll == 3 && d < 0.1) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/k3.jpg"
            ]
        });
    }
    else if (roll == 4 && d < 0.1) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/k4.jpg"
            ]
        });
    }
    else if (roll == 5 && d < 0.1) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/k5.jpg"
            ]
        });
    }
    else if (roll == 6 && d < 0.1) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/k6.jpg"
            ]
        });
    }
    else if (roll == 1 || roll == 2 || roll == 3 || roll == 4 || roll == 5 || roll == 6 && d > 0.1) {
        e.message.reply(`ты ничего выбил...`);
    }
}
exports.run = run;
exports.names = ["кк"];
