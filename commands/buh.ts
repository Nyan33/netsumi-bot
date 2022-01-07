import {Client, Collection, Message, TextChannel} from "discord.js";
import dotenv from "dotenv";
import {runEvent} from "../index";

export function run(e:runEvent) {
    var roll =(Math.floor(Math.random()*8)+1);
    if (roll == 1) {    
    e.message.reply(`ты выпил колы`);   
    }      
    else if (roll == 2) {    
    e.message.reply(`ты выпил фанты`);   
    }  
    else if (roll == 3) {    
    e.message.reply(`ты выпил чаю`);   
    }  
    else if (roll == 4) {    
    e.message.reply(`ты попил водички`);   
    }
    else if (roll == 5) {    
    e.message.reply(`ты бухнул пива`);   
    } 
    else if (roll == 6) {    
    e.message.reply(`ты бухнул водки`);   
    }
    else if (roll == 7) {    
    e.message.reply(`ты бухнул кваса`);   
    } 
    else if (roll == 8) {    
    e.message.reply(`ты бухнул неонового кваса`);   
    }                                              
}



export const names = ["бухнуть"];