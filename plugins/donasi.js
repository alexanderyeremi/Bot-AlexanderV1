let handler = async m => m.reply(`
╭─「 DONATION 」
│• SAWERIA :
│https://saweria.co/alexanderyeremi
│• OVO [+6281281783202]
│• TELKOMSEL [+6281281783202]
│• DANA [+6281281783202]
│• GOPAY [+6281281783202]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
