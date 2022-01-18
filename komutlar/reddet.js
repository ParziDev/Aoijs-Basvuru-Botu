module.exports = {
  name:"reddet",
  code:`
$sendDM[$message[1];$servername sunucusunda yapmış olduğun yetkili başvurusu reddedildi. Sebebi $messageSlice[1]]
$channelSendMessage[$getServerVar[log];{description:**Başvurusu Reddedilen:** $usertag[$message[1]] | $message[1]
**Başvuruyuru Reddeden:** $usertag | $authorID
**Sebebi:** $messageSlice[1]}{color:RED}]
Başarılı bir şekilde başvuru reddedildi. Sebebi \`$messageSlice[1]\`
$onlyIf[$messageSlice[1]!=;Bir sebep girin.]
$onlyIf[$memberExists[$message[1]]==true;Sunucunuzda böyle bir kullanıcı yok.]
$onlyIf[$isnumber[$message[1]]!=false;Lütfen başvuru yapan kişinin IDsini girniz]
$onlyIf[$message[1]!=;Lütfen başvuru yapan kişinin IDsini girniz]
$onlyPerms[manageserver;admin;Yetkin Yetersiz.]  
  `
}
