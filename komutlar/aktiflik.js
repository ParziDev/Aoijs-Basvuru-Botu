module.exports = {
  name:"$alwaysExecute",
  code:`
  $setUserVar[durum3;yes;$authorID]
  $author[Başarılı!;$authorAvatar]
  $description[**Sıradaki sorun:** Başka sunucuda yetkilimisi? Evet veya Hayır]
  $color[GREEN]
  $setUserVar[durum2;no;$authorID]
  $setUserVar[aktiflik;$message[1];$authorID]
  $onlyIf[$isNumber[$message[1]]==true;Bir sayı gir.]
  $onlyIf[$message[1]!=;Bir sayı gir.]
  $onlyIf[$getUserVar[durum2;$authorID]==yes;]
  $onlyIf[$isTicket[$channelID]!=false;]
  `
}
