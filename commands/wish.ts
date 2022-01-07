import {Client, Collection, Message, TextChannel} from "discord.js";
import dotenv from "dotenv";
import {runEvent} from "../index";

export function run(e:runEvent) {
    var d = Math.random();
    var roll =(Math.floor(Math.random()*15)+1);
    //console.log('chance: ' + d, '  roll: ' + roll)
    if (roll == 1 && d < 0.5) {    
    e.message.reply(`ты выбил`, {
        files: [
            "./pics/1.jpg"
        ]
    });   
    }
    else if (roll == 1 && d > 0.5) { 
        e.message.reply(`ты ничего выбил...`)
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
    else if (roll == 2 ||roll == 3 ||roll == 4 ||roll == 5 && d > 0.6) { 
        e.message.reply(`ты ничего выбил...`)
        }         
    else if (roll == 6 && d < 0.1) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/6.jpg"
            ]
        });
        } 
    else if (roll == 6 && d > 0.1) { 
        e.message.reply(`ты ничего выбил...`)
        }         
    else if (roll == 7 && d < 0.09) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/7.jpg"
            ]
        });
        }
    else if (roll == 7 && d > 0.09) { 
        e.message.reply(`ты ничего выбил...`)
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
        e.message.reply(`ты ничего выбил...`)
        }          
    else if (roll == 10 && d < 0.1) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/10.mp4"
            ]
        });
        } 
    else if (roll == 10 && d > 0.1) { 
        e.message.reply(`ты ничего выбил...`)
        }           
    else if (roll == 11 && d < 0.1) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/11.mp4"
            ]
        });
        } 
    else if (roll == 11 && d > 0.1) { 
        e.message.reply(`ты ничего выбил...`)
        }           
    else if (roll == 12 && d < 0.1) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/12.png"
            ]
        });
        }
    else if (roll == 12 && d > 0.1) { 
        e.message.reply(`ты ничего выбил...`)
        }           
    else if (roll == 13 && d < 0.11) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/13.jpg"
            ]
        });
        } 
    else if (roll == 13 && d > 0.11) { 
        e.message.reply(`ты ничего выбил...`)
        }  
    else if (roll == 14 && d < 0.09) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/14.jpg"
            ]
        });
        }
    else if (roll == 14 && d > 0.09) { 
        e.message.reply(`ты ничего выбил...`)
        }          
    else if (roll == 15 && d < 0.1) { 
        e.message.reply(`ты выбил`, {
            files: [
                "./pics/15.jpg"
            ]
        });
        }
    else if (roll == 15 && d > 0.1) { 
        e.message.reply(`ты ничего выбил...`)
        }          
}



export const names = ["карта"];