"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.names = exports.run = void 0;
function run(e) {
    var d = Math.random();
    var roll = (Math.floor(Math.random() * 22) + 1);
    //console.log('chance: ' + d, '  roll: ' + roll)
    if (roll == 1 && d < 0.5) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/1.jpg"
            ]
        });
    }
    else if (roll == 1 && d > 0.5) {
        e.message.reply(`ты ничего выбил...`);
    }
    else if (roll == 2 && d < 0.6) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/2.jpg"
            ]
        });
    }
    else if (roll == 3 && d < 0.6) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/3.jpg"
            ]
        });
    }
    else if (roll == 4 && d < 0.6) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/4.jpg"
            ]
        });
    }
    else if (roll == 5 && d < 0.6) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/5.jpg"
            ]
        });
    }
    else if (roll == 2 || roll == 3 || roll == 4 || roll == 5 && d > 0.6) {
        e.message.reply(`ты ничего выбил...`);
    }
    else if (roll == 6 && d < 0.1) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/6.jpg"
            ]
        });
    }
    else if (roll == 6 && d > 0.1) {
        e.message.reply(`ты ничего выбил...`);
    }
    else if (roll == 7 && d < 0.09) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/7.jpg"
            ]
        });
    }
    else if (roll == 7 && d > 0.09) {
        e.message.reply(`ты ничего выбил...`);
    }
    else if (roll == 8 && d < 0.9) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/8.jpg"
            ]
        });
    }
    else if (roll == 9 && d < 0.9) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/9.jpg"
            ]
        });
    }
    else if (roll == 8 || roll == 9 && d > 0.9) {
        e.message.reply(`ты ничего выбил...`);
    }
    else if (roll == 10 && d < 0.1) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/10.mp4"
            ]
        });
    }
    else if (roll == 10 && d > 0.1) {
        e.message.reply(`ты ничего выбил...`);
    }
    else if (roll == 11 && d < 0.1) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/11.mp4"
            ]
        });
    }
    else if (roll == 11 && d > 0.1) {
        e.message.reply(`ты ничего выбил...`);
    }
    else if (roll == 12 && d < 0.1) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/12.png"
            ]
        });
    }
    else if (roll == 12 && d > 0.1) {
        e.message.reply(`ты ничего выбил...`);
    }
    else if (roll == 13 && d < 0.11) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/13.jpg"
            ]
        });
    }
    else if (roll == 13 && d > 0.11) {
        e.message.reply(`ты ничего выбил...`);
    }
    else if (roll == 14 && d < 0.09) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/14.jpg"
            ]
        });
    }
    else if (roll == 14 && d > 0.09) {
        e.message.reply(`ты ничего выбил...`);
    }
    else if (roll == 15 && d < 0.1) {
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/15.jpg"
            ]
        });
    }
    else if (roll == 15 && d > 0.1) {
        e.message.reply(`ты ничего выбил...`);
    }
    else if (roll == 16 && d < 0.1) { //инвалид
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/16.jpg"
            ]
        });
    }
    else if (roll == 16 && d > 0.1) {
        e.message.reply(`ты ничего выбил...`);
    }
    else if (roll == 17 && d < 0.09) { //тоби пизда
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/17.gif"
            ]
        });
    }
    else if (roll == 17 && d > 0.09) {
        e.message.reply(`ты ничего выбил...`);
    }
    else if (roll == 18 && d < 0.07) { //сверх форма
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/18.gif"
            ]
        });
    }
    else if (roll == 18 && d > 0.07) {
        e.message.reply(`ты ничего выбил...`);
    }
    else if (roll == 19 && d < 0.2) { //амогас
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/19.gif"
            ]
        });
    }
    else if (roll == 19 && d > 0.2) {
        e.message.reply(`ты ничего выбил...`);
    }
    else if (roll == 20 && d < 0.2) { //готовь сраку
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/20.gif"
            ]
        });
    }
    else if (roll == 20 && d > 0.2) {
        e.message.reply(`ты ничего выбил...`);
    }
    else if (roll == 21 && d < 0.2) { //ril nyqn
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/21.png"
            ]
        });
    }
    else if (roll == 21 && d > 0.2) {
        e.message.reply(`ты ничего выбил...`);
    }
    else if (roll == 22 && d < 0.1) { //ril nyqn
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/22.png"
            ]
        });
    }
    else if (roll == 22 && d > 0.1) {
        e.message.reply(`ты ничего выбил...`);
    }
}
exports.run = run;
exports.names = ["карта"];
