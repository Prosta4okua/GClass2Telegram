const telegramBotAPI = require('node-telegram-bot-api');
const token = require('token.json');

class TelegramBot{
    constructor(token) {
        this.bot = new TelegramBot(token, { polling: true });
        this.bot.on("message", this.handleMessage.bind(this))
    }

    handleMessage(msg){
        const chatId = msg.chat.id;
        const message = msg.text;

        this.bot.sendMessage(chatId, `Ви написали: ${message}`);
    }
    sendMessage(chatId, message) {
        this.bot.sendMessage(chatId, message);
    }
}

module.exports = new telegramBotAPI(token.TELEGRAM_BOT_TOKEN)
