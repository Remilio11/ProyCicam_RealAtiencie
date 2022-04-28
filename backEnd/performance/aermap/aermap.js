const fs = require('fs');

let promesaEscrituraArchivo = new Promise((resolve, reject) => {
    fs.writeFile('aermap.inp', 'JOB \r\n    MESSAGES MET2119246_AERMET_2019-2020.ER3 \r\n    REPORT   MET2119246_AERMET_2019-2020.OU3\r\n \r\nMETPREP\r\n    DATA     MET2119246_AERMET_2019-2020.DAT.MER\r\n    XDATES   2019/01/01 2020/12/31', 
    (error) => {
        if(error){
            reject(error);
        } else {
            resolve();
        }
    });
});

promesaEscrituraArchivo
.then(() => {
    console.log('La escritura del archivo ha sido satisfactoria.');
})
.catch((error) => {
    console.log('Ha ocurrido un error:', error);
});