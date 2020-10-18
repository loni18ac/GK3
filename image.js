class Image{ 
    constructor (Pixels, FileType) {
        this.Pixels=Pixels;
        this.FileType=FileType;
    }
}

module.exports=Image

//image klassen har altså to attributter: antal pixels og hvilken filtype, billedet er i, e.g. PNG og JPG