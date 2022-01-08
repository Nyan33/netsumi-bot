"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.names = exports.run = void 0;
function run(e) {
    var d = Math.random();
    var roll = (Math.floor(Math.random() * 5) + 1);
    //console.log('chance: ' + d, '  roll: ' + roll)
    if (roll == 1 && d < 0.9) { //шар
        e.message.reply(`ты выбил`, {
            files: [
                "./wish/1.png"
            ]
        });
    }
    else if (roll == 1 && d > 0.9) {
        e.message.reply(`ты ничего не выбил`);
    }
    if (roll == 2 && d < 0.2) { //катана
        e.message.reply(`ты выбил`, {
            files: [
                "./wish/2.png"
            ]
        });
    }
    else if (roll == 2 && d > 0.2) {
        e.message.reply(`ты выбил`, {
            files: [
                "./wish/1.png"
            ]
        });
    }
    if (roll == 3 && d < 0.1) { //падору нетсуми
        e.message.reply(`ты выбил`, {
            files: [
                "./wish/3.png"
            ]
        });
    }
    else if (roll == 3 && d > 0.1) {
        e.message.reply(`ты выбил`, {
            files: [
                "./wish/1.png"
            ]
        });
    }
    if (roll == 4 && d < 0.1) { //огненный нян
        e.message.reply(`ты выбил`, {
            files: [
                "./wish/4.png"
            ]
        });
    }
    else if (roll == 4 && d > 0.1) {
        e.message.reply(`ты выбил`, {
            files: [
                "./wish/1.png"
            ]
        });
    }
    if (roll == 5 && d < 0.08) { //злой нян
        e.message.reply(`ты выбил`, {
            files: [
                "./wish/5.png"
            ]
        });
    }
    else if (roll == 5 && d > 0.08) {
        e.message.reply(`ты выбил`, {
            files: [
                "./wish/2.png"
            ]
        });
    }
}
exports.run = run;
exports.names = ["молитва"];
