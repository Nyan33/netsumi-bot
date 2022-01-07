import {Client, Collection, Message, TextChannel} from "discord.js";
import dotenv from "dotenv";
import {runEvent} from "../index";

export function run(e:runEvent) {
    var roll =(Math.floor(Math.random()*11)+1);
    if (roll == 1) { 
    e.message.reply(`ты выбил`, {
        files: [
            "./pics/1.jpg"
        ]
    });
    }
    if (roll == 2) { 
    e.message.reply(`ты выбил`, {
        files: [
            "./pics/2.jpg"
        ]
    });
    }  
    if (roll == 3) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/3.jpg"
            ]
        });
        }
    if (roll == 4) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/4.jpg"
            ]
        });
        } 
    if (roll == 5) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/5.jpg"
            ]
        });
        }
    if (roll == 6) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/6.jpg"
            ]
        });
        } 
    if (roll == 7) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/7.jpg"
            ]
        });
        }
    if (roll == 8) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/8.jpg"
            ]
        });
        }   
    if (roll == 9) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/9.jpg"
            ]
        });
        }  
    if (roll == 10) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/10.mp4"
            ]
        });
        }   
    if (roll == 11) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/11.mp4"
            ]
        });
        }   
    if (roll == 12) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/12.png"
            ]
        });
        }                                                     
}

export const names = ["карта"];