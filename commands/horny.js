"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.names = exports.run = void 0;
function run(e) {
    var d = Math.random();
    var roll = (Math.floor(Math.random() * 5) + 1);
    //console.log('chance: ' + d, '  roll: ' + roll)
    if (roll == 1 && d < 0.01) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/h1.jpg"
            ]
        });
    }
    else if (roll == 1 && d > 0.01) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/h4.jpg"
            ]
        });
    }
    if (roll == 2 && d < 0.3) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/h2.jpg"
            ]
        });
    }
    else if (roll == 2 && d > 0.3) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/h4.jpg"
            ]
        });
    }
    if (roll == 3 && d < 0.5) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/h3.jpg"
            ]
        });
    }
    else if (roll == 3 && d > 0.5) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/h4.jpg"
            ]
        });
    }
    if (roll == 4 && d < 0.2) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/h5.jpg"
            ]
        });
    }
    else if (roll == 4 && d > 0.2) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/h4.jpg"
            ]
        });
    }
    if (roll == 5 && d < 0.013) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/h6.jpg"
            ]
        });
    }
    else if (roll == 5 && d > 0.013) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/h4.jpg"
            ]
        });
    }
}
exports.run = run;
exports.names = ["хк"];
