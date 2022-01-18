module.exports = {
  name:"başvuru-sistem",
  code:`
$if[$message[1]==aç]
Başvuru sistemi açılmıştır.
$setServerVar[rol;$mentionedRoles[1]]  
$onlyIf[$mentionedRoles[1]!=; Bir rol etiketle ve botun rolünü etiketlediğin rolün üstüne koy.]
$endif
$if[$message[1]==kategori]
Kategori ayarlandı.
$setServerVar[kategori;$message[2]]
$onlyIf[$isnumber[$message[2]]!=false;Lütfen bir kategori IDsi giriniz]
$onlyIf[$message[2]!=;Lütfen bir kategori IDsi giriniz]
$endif
$if[$message[1]==log]
Log ayarlandı.
$setServerVar[log;$mentionedChannels[1]]  
$onlyIf[$mentionedChannels[1]!=; Bir kanal etiketle.]
$endif
$if[$message[1]==kapat]
Başvuru sistemi kapatılmıştır.
$setServerVar[rol;]  
$setServerVar[kategori;]
$setServerVar[log;]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kategori;log;kapat]==true;\`aç\`, \`log\`, \`kategori\` ya da \`kapat\` argümanlarını kullan.]
  `
}
