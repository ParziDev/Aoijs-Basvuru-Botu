module.exports = {
  name:"onayla",
  code:`
$sendDM[$message[1];$servername sunucusunda yapmış olduğun yetkili başvurusu kabul edildi.]
$channelSendMessage[$getServerVar[log];{description:**Başvurusu Onaylanan:** $usertag[$message[1]] | $message[1]
**Başvuruyuru Onaylayan:** $usertag | $authorID}{color:GREEN}]
$giveRole[$message[1];$getServerVar[rol]]
Başarılı bir şekilde başvuru onaylandı.
$onlyIf[$memberExists[$message[1]]==true;Sunucunuzda böyle bir kullanıcı yok.]
$onlyIf[$isnumber[$message[1]]!=false;Lütfen başvuru yapan kişinin IDsini girniz]
$onlyIf[$message[1]!=;Lütfen başvuru yapan kişinin IDsini girniz]
$onlyPerms[manageserver;admin;Yetkin Yetersiz.]  
  `
}
