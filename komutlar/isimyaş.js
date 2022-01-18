module.exports = {
  name:"$alwaysExecute",
  code:`
$setUserVar[durum2;yes;$authorID]
$author[Başarılı!;$authorAvatar]
$description[**Sıradaki sorun:** Günde kaç saat aktifsin saat olarak yaz.]
$color[GREEN]
$setUserVar[durum1;no;$authorID]
$setUserVar[isim;$message[1];$authorID]
$setUserVar[yaş;$message[2];$authorID]
$onlyIf[$isNumber[$message[2]]==true;Yaşını yaz.]
$onlyIf[$message[2]!=;Yaşını yaz.]
$onlyIf[$message[1]!=;İsmini yaz.]
$onlyIf[$getUserVar[durum1;$authorID]==yes;]
$onlyIf[$isTicket[$channelID]!=false;]
  `
}
