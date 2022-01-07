import {runEvent} from "../index";

export function run(e:runEvent) {
    e.message.reply(`Команды:\nахегао - отправляет ахегао лицо из символов\nбухнуть - выпить случайный написток\nкарта - вытянуть случайную карту из колоды\nкк - вытянуть случайную карту из КВАСОВОЙ колоды`) }

export const names = ["хелп"];