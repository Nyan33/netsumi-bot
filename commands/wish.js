"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.names = exports.run = void 0;
function run(e) {
    var roll = (Math.floor(Math.random() * 2) + 1);
    if (roll == 1) {
        e.message.reply(`go fuk`);
    }
    if (roll == 2) {
        e.message.reply(`go fuk urself`);
    }
}
exports.run = run;
exports.names = ["wish"];
