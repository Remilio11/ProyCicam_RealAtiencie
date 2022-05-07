const validator = (req, next) => {
    let positionInArray1 = false;
    let positionInArray1Type = '';
    let positionInArray2 = false;
    let positionInArray2Type = '';
    if(req.files.length > 2 || req.files.length <= 1 || req.files === undefined){
        throw new Error('You have to send 2 files');
    }
    if((req.files[0].originalname.split('.')[1] == 'FSL') || (req.files[0].originalname.split('.')[1] == 'fsl') || (req.files[0].originalname.split('.')[1] == 'DAT') || (req.files[0].originalname.split('.')[1] == 'dat')){
        positionInArray1 = true;
        positionInArray1Type = req.files[0].originalname.split('.')[1];
    }
    if((req.files[1].originalname.split('.')[1] == 'FSL') || (req.files[1].originalname.split('.')[1] == 'fsl') || (req.files[1].originalname.split('.')[1] == 'DAT') || (req.files[1].originalname.split('.')[1] == 'dat')){
        positionInArray2 = true;
        positionInArray2Type = req.files[1].originalname.split('.')[1];
    }
    if(!positionInArray1 || !positionInArray2){
        throw new Error('You only can upload files with extension .FSL or .DAT');
    };
    if(positionInArray1Type === positionInArray2Type){
        throw new Error('Files must be different');
    }
    next();
}

exports.getAermetData = async (req, res, next) => {
    try {
        validator(req, next);
        console.log('pues pasamos')
    } catch (error) {
        next(new Error(error));
    }
}