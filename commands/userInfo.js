const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    global: true,
    data: new SlashCommandBuilder()
        .setName('user-info')
        .setDescription('Display info about yourself.')
        .setDefaultPermission(true),
    async execute(client, interaction) {
        return interaction.reply(`Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`)
    },
}
