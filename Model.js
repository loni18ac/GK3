var xhttp = new XMLHttpRequest();

class User {
    constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
}
postUser(){
    var post = new XMLHttpRequest ();
    Http.open("POST", "/");
    Http.send();

    Http.onreadystatechange = (e) => {
    console.log(Http.responseText)

    }
}

class FreeUser extends User {
    constructor (name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
}
}
class PaymentUser extends User {
    constructor(name, age, location, CardName, CVV, CardNumber, Expire) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.CardName =CardName;
    this.CVV = CVV;
    this.CardNumber = CardNumber;
    this.Expire = Expire;
    }

}
class Interest {
    constructor(hobbies, occupation, sexualPreference) {
    this.hobbies = hobbies;
    this.occupation = occupation;
    this.sexualPreference = sexualPreference;
}
}
class Match{
    
}

class Image{
    uploadfile(){
    
    var file = document.getElementById('file')
    //Vi finder den file, som er under file.files[0], i HTML er den måde en fil bliver gemt
    //når man går brug af input tagget med type file. Se her https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
        var myfile = file.files[0]
        //Vi gør brug af FormData, da den encoder vores data, til en bestemt type som hedder "multipart/form-data" https://developer.mozilla.org/en-US/docs/Web/API/FormData
        //Denne type kan vi sende
        var formData = new FormData()
        //Her sætter vi key value pair i formen til file: Myfile
        //Så nøglen file, bliver lig den fil, som vi har uploadet
        //Via append, bliver den en del af FormData se dokumentation linje 127. 
        formData.append('file', myfile)

        //Her laves en request, man "initializer" den. Vi forklare vores Request hvilken slags den er og hvor den skal hen. 
        //True betyder det er en asynkron request vi laver. skal være true når der bruges multipart. 
        xhttp.open("POST", "http://localhost:3000/upload", true); 
        //Sender den request vi har defineret lige over. https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send
        xhttp.send(formData); 
        //betyder når readystate skifter, sker der noget
    xhttp.onreadystatechange = function() {
        
        //4 er done, https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
        //status 200 er ok, alt gik fint
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            //når man får svar fra serveren. 
            console.log(xhttp.responseText)   
        }
    };

    }
    }

    module.exports=PaymentUser