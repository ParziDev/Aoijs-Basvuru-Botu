module.exports = {
  name:"$alwaysExecute",
  code:`
$setUserVar[durum4;yes;$authorID]
$author[Başarılı!;$authorAvatar]
$description[**Sıradaki sorun:** Bildiğin kütüphane/modül/diller]
$color[GREEN]
$setUserVar[durum3;no;$authorID]
$setUserVar[bsy;$message[1];$authorID]
$onlyIf[$checkContains[$toLowercase[$message[1]];evet;hayır;evt;hayr;hyr]==true;Evet veya Hayır yaz.]
$onlyIf[$message[1]!=;Evet veya Hayır yaz.]
$onlyIf[$getUserVar[durum3;$authorID]==yes;]
$onlyIf[$isTicket[$channelID]!=false;]
  `
}
