# Examples for CaptchaJS

```javascript
const Captcha = require("@eyp57/aptchajs");
const fs = require("fs");
const captcha = new Captcha({
    string: "ThAtS a CaPtChA vAluE", // If not set default is random
    background_color: "YELLOW", // If not set default is a random color
    textColor: "GREEN", // If not set default is "WHITE"
    length: 6 // If not set default is 5
});

captcha.getString() // Get the captcha value
captcha.check("3213") // Check the captcha with a string
const buffer = captcha.getBuffer() // Get the canvas buffer

fs.writeFileSync('./image.png', buffer); // Writes the buffer to the PNG file
```

### More examples in github page:

[Github](https://github.com/eyp57/captchajs) - [NPMJS](https://npmjs.com/package/@zrooter/captchajs)