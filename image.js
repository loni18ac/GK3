class Image{ 
    constructor (Pixels, FileType) {
        this.Pixels=Pixels;
        this.FileType=FileType;

        let image1 = new Image ('500px', 'PNG')
        let image2 = new Image ('500px', 'JPG')
        
        ImageArray = [image1, image2];
    }
}

module.exports=Image