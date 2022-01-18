const parzi = require("aoi.js");
var fs = require("fs");
const bot = new parzi.Bot({
  token: process.env.token,
  prefix: "$getServerVar[prefix]",
});
bot.onJoined();
bot.onLeave();
bot.onMessage();
var reader = fs
  .readdirSync("./komutlar/")
  .filter((file) => file.endsWith(".js"));
for (const file of reader) {
  const command = require(`./komutlar/${file}`);
  bot.command({
    name: command.name,
    code: command.code,
    aliases: command.aliases
  });
}

bot.command({
  name: "ping",
  code: `
  Gecikmem : $ping | Bot gecikmesi : $botPing
  `,
});

////////// STATUS \\\\\\\\\\
bot.status({
  text:"Parzi & Zuzia",
  type:"PLAYING",
  status:"dnd",
  time: 12
})

////////// VARİABLES \\\\\\\\\\
bot.variables({
  prefix:".",
  isim:"",
  yaş:"",
  aktiflik:"",
  bsy:"",
  kütüphane:"",
  durum1:"no",
  durum2:"no",
  durum3:"no",
  durum4:"no",
  basvuru:"",
  log:"",
  kategori:"",
  log:""
})
