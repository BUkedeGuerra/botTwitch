/* const tmi = require("tmi.js");
const { sample } = require("lodash"); */
import * as tmi from "tmi.js";
import sample from "lodash";

// Define configuration options
const opts = {
  identity: {
    username: "alsarabot",
    password: "upy7cpsygn2uxqbih6umqh3fil3jon",
  },
  channels: ["src_666"],
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
  if (self) {
    return;
  } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === "!dice") {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  }
  // If comand hola
  else if (commandName === "hola") {
    client.say(target, `Hola ${context.username}`);
  } else if (commandName.startsWith(`!8ball`)) {
    ball8();
    client.say(target, `A tu pregunta, mi respuesta es ` + ball8());
    console.log(`* Executed ${commandName} command`);
  } else if (commandName.startsWith(`!ping`)) {
    client.say(target, `${context.username}`);
  } else if (commandName.startsWith(`!echo`)) {
    const mensaje = commandName.replace(`!echo`, ``);
    for (let i = 0; i < 99; i++) {
      client.say(target, mensaje);
    }
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}

// Function called when the "dice" command is issued
function rollDice() {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

// Bola 8
function ball8() {
  const answers = [
    "𝗦𝗜",
    "𝗡𝗢",
    "𝗣𝘂𝗲𝗱𝗲 𝘀𝗲𝗿...",
    "𝗡𝗼 𝘃𝗲𝗼 𝗳𝗮𝗹𝗹𝗼 𝗲𝗻 𝘁𝘂 𝗹𝗼́𝗴𝗶𝗰𝗮",
    "𝗣𝗿𝗼𝗯𝗮𝗯𝗹𝗲𝗺𝗲𝗻𝘁𝗲 𝘀𝗶́",
    "𝗣𝗿𝗼𝗯𝗮𝗯𝗹𝗲𝗺𝗲𝗻𝘁𝗲 𝗻𝗼",
    "𝗔 𝘁𝘂 𝗽𝗿𝗲𝗴𝘂𝗻𝘁𝗮 𝗻𝗼 𝗲𝗻𝗰𝘂𝗲𝗻𝘁𝗿𝗼 𝗿𝗲𝘀𝗽𝘂𝗲𝘀𝘁𝗮",
    "𝗟𝗮 𝗿𝗲𝘀𝗽𝘂𝗲𝘀𝘁𝗮 𝗲𝘀𝘁𝗮́ 𝗲𝗻 𝘁𝘂 𝗶𝗻𝘁𝗲𝗿𝗶𝗼𝗿",
  ];

  return sample(answers);
}

ball8();
