import {runEvent} from "../index";

export function run(e:runEvent) {
    var roll =(Math.floor(Math.random()*2)+1);
    if (roll == 1) { 
    e.message.reply(`go fuk`);
    }
    if (roll == 2) { 
    e.message.reply(`go fuk urself`);
    }    
}

export const names = ["wish"];