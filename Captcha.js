const { createCanvas, loadImage } = require('canvas')
const fs = require("fs");
class Captcha {
    constructor({string = null, backgoround_color = null, textColor = null, length = 5} = {}) {
        var captcha;
        if(string == null) {
            const NumsAndAlphabet = "ABCDEFGHIJKLMNOPQRSTUVabcdefghijklmnopqrstuv123456789"

            const numsAndAlphabet_arr = NumsAndAlphabet.split("");
            // captcha = numsAndAlphabet_arr[Math.floor(Math.random()*(numsAndAlphabet_arr.length))] + numsAndAlphabet_arr[Math.floor(Math.random()*(numsAndAlphabet_arr.length))] + numsAndAlphabet_arr[Math.floor(Math.random()*(numsAndAlphabet_arr.length))] + numsAndAlphabet_arr[Math.floor(Math.random()*(numsAndAlphabet_arr.length))] + numsAndAlphabet_arr[Math.floor(Math.random()*(numsAndAlphabet_arr.length))] + numsAndAlphabet_arr[Math.floor(Math.random()*(numsAndAlphabet_arr.length))]
            
            captcha = [];
            for(let i = 0; i < length; i++) {
                captcha.push(numsAndAlphabet_arr[Math.floor(Math.random()*(numsAndAlphabet_arr.length))]);
            }
            captcha = captcha.join("");
        } else {
            captcha = string;
        }
        this.captcha = captcha;

        this.backgoround_color = backgoround_color;
        this.textColor = textColor;
    }
    getString() {
        return this.captcha;
    }
    getValue() {
        return this.captcha;
    }
    check(string = null) {
        if(string == null) throw new Error("Please give an controll value");
        
        if(string == this.captcha) {
            return true;
        } else {
            return false;
        }
    }
    getBuffer() {
        var colors = ["GREEN", "BLUE", "ORANGE", "BLACK", "PINK"]
        const canvas = createCanvas(200, 64)
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = this.backgoround_color == null ? colors[Math.floor(Math.random()*colors.length)] : this.backgoround_color;
        ctx.fillRect(0, 0, 200, 64)
        ctx.font = 'bold 30pt Poppins'
        ctx.textAlign = 'center'
        ctx.fillStyle = this.textColor == null ? '#fff' : this.textColor
        ctx.fillText(this.captcha, 100, 42)
        return canvas.toBuffer('image/png')
    }
}

module.exports = {Captcha};