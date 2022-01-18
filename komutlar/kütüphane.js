module.exports = {
  name:"$alwaysExecute",
  code:`
$deleteChannels[$channelID]
$wait[7s]
$channelSendMessage[$getServerVar[log];
{field:İsim Yaş:$getUserVar[isim;$authorID] | $getUserVar[yaş;$authorID]:yes}
{field:Başka Sunucularda Yetkilimi:$getUserVar[bsy;$authorID]:yes}
{field:Kütüphane/Modül/Dil:$getUserVar[kütüphane;$authorID]:yes}
{field:Günde Kaç Saat Aktif:$getUserVar[aktiflik;$authorID]:yes}
{field:Detaylar:__Kullanıcı:__ <@$authorID> - ( \`$authorID\` )
__Başvuru yaptığı saat:__ $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$hours;01s;4;-1];02s;5;-1];03s;6;-1];04s;7;-1];05s;8;-1];06s;9;-1];07s;10;-1];08s;11;-1];09s;12;-1];10s;13;-1];11s;14;-1];12s;15;-1];13s;16;-1];14s;17;-1];15s;18;-1];16s;19;-1];17s;20;-1];18s;21;-1];19s;22;-1];20s;23;-1];21s;00;-1];22s;01;-1];23s;02;-1];00s;03;-1]:$minute:$second:yes}
{field:Yetkili Komut:$getServerVar[prefix]onayla $authorID
$getServerVar[prefix]reddet $authorID sebep}
{color:RANDOM}]

$wait[1s]
$channelSendMessage[$channelID;{author:Başarılı!:$authorAvatar}
{description:Başvurun iletildi! Yakında cevap alıcaksın. Bu süreçte DM'ini açık tut. DM üzerinden başvuru sonucun iletilicek.}
{color:GREEN}]
$setUserVar[durum4;no;$authorID]
$setUserVar[kütüphane;$message;$authorID]
$onlyIf[$message!=;Lütfen bildiğin kütüphane/modül/dilleri yaz.]
$onlyIf[$getUserVar[durum4;$authorID]==yes;]
$onlyIf[$isTicket[$channelID]!=false;]
`
}
