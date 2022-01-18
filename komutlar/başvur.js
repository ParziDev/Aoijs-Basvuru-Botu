module.exports = {
  name:"başvur",
  code:`
  $setUserVar[durum1;yes;$authorID]
  $useChannel[$get[başvuru]]
  $clear[1]
  $wait[1s]
  $pinMessage[$get[başvuru];$get[kapat]]
  $let[kapat;$channelSendMessage[$get[başvuru];<@$authorID>
  {description:Lütfen kanala soruların cevaplarını yaz. **İlk sorun isim ve yaşın.**}{color:GREEN};yes]]
  $modifyChannelPerms[$get[başvuru];-viewchannel;$guildID]
  $let[başvuru;$newTicket[$username・başvuru;.{delete:1s};$getServerVar[kategori];yes;:x: | **!!HATA!!**]]
  $wait[1s]
  $deletecommand
`
}
