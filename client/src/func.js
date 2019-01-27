<<<<<<< HEAD
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
=======
var QRCode = require('qrcode')
function createQRCode(url){
    QRCode.toDataURL(`http://localhost:3000/api/patients/${url}`, function (err, image) {
      console.log(image);
      return image;
    })
}

// function filterNullFields(obj){
//   var fieldArr = Object.entries(obj);
//   var keys = Object.keys(obj);
//   for(var i=keys.length-1; i> -1; i--)
//   {
//     if (fieldArr[i]=='')
//     {
//       delete fieldArr[i];//fieldArr.splice(i,1);
//       delete keys[i]//keys.splice(i,1);
//     }
//   }
//   console.log(fieldArr.length)
//   console.log(keys.length)
//   retObj = {}
//   for(var i=keys.length-1; i> -1; i--)
//   {
//     retObj[keys[i]] = fieldArr[i];
//   }
//   return retObj
// }

export {createQRCode, filterNullFields}
>>>>>>> a28d2bc987c5eba7d2451754a58119ddfaa20543
