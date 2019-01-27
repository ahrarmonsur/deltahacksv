// var QRCode = require("qrcode");
// function CreateQRCode(url) {
//     QRCode.toDataURL(`http://localhost:3000/api/patients/${url}`, function(
//         err,
//         image
//     ) {
//         console.log(image);
//         return image;
//     });
// }

function clean(obj) {
    for (var propName in obj) {
        if (
            obj[propName] === null ||
            obj[propName] === undefined ||
            obj[propName] === ""
        ) {
            delete obj[propName];
        }
    }
}

export default { clean };
