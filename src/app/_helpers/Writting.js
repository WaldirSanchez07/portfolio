const TypeWriter = function(element,words,wait = 3000){
    this.element = element;
    this.words = words;
    this.txt = '';
    this.wordIdx = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}

TypeWriter.prototype.type = function(){
    const current = this.wordIdx %  this.words.length;
    const fullText = this.words[current];
    if(this.isDeleting){
        //remove char
        this.txt = fullText.substring(0,this.txt.length -1);
    }else{
        //add char
        this.txt = fullText.substring(0,this.txt.length +1);
    }
    this.element.innerHTML = this.txt;

    let typeSpeed = 450;
    if(this.isDeleting){
        typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fullText){
        typeSpeed = this.wait;
        this.isDeleting = true;
    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        this.wordIdx++;
        typeSpeed = 450;
    }

    setTimeout(() => this.type(),typeSpeed);
}

export {
    TypeWriter
};