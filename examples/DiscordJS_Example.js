const Captcha = require("@eyp57tr/captchajs");
const { MessageAttachment } = require("discord.js");
const captcha = new Captcha({
    textColor: "GREEN",
    backgoround_color: "PINK"
});

const attachment = new MessageAttachment(buffer, 'DiscordJS_Example.png');
(GuildChannel).send({
    files: [attachment]
})