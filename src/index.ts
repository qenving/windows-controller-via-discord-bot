import { Client, GatewayIntentBits, Message } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const token = process.env.BOT_TOKEN;

client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('messageCreate', (message: Message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '!ping') {
    message.channel.send('Pong!');
  }
});

if (!token) {
  console.error('Bot token is not provided. Please set the BOT_TOKEN environment variable.');
  process.exit(1);
}

client.login(token);
