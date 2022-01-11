const {Captcha} = require("@eyp57tr/captchajs");
const fs = require("fs");
const captcha = new Captcha({
    textColor: "GREEN",
    backgoround_color: "PINK"
});

fs.writeFileSync("./examples/PNG_Example.png", captcha.getBuffer());