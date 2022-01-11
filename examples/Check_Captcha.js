const {Captcha} = require("@eyp57tr/captchajs");
const captcha = new Captcha({
    string: "ABC"
});

let string = "ABC";

if(captcha.check(string)) {
    console.log("Guard: You're not a Bot :)")
} else {
    console.log("Guard: You are a Bot :/")
}