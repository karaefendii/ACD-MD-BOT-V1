const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ydF1VCpQ#DGVOUk3F1HvTb0Gk1dYRkJWQhvI_eFpMlbYnqJdEIdE",  //මෙතනට ඔයාගෙ සෙශන් කෝඩ් එක දාන්න
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/Qp22bZ1/IMG-20241129-WA0428.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "*Hoşgeldin Dostum* ${pushname}\n *İyi Eğlenceler Dilerim*",
SUDO_NB: process.env.SUDO_NB || "905541878489",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE:"true"
};

