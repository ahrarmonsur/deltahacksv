var QRCode = require('qrcode')
function CreateQRCode(url){
    QRCode.toDataURL(`http://localhost:3000/api/patients/${url}`, function (err, image) {
      console.log(image);
      return image;
    })
}

export {CreateQRCode}