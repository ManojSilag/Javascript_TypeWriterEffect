
const TypeWriter = function(txtElement, words, wait = 3000){
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}
//Type Method
TypeWriter.prototype.type = function(){
    // Current index of word
    const current = this.wordIndex % this.words.length;
    //Get full text of current word
    const fullTxt = this.words[current];
   // console.log(fullTxt);
    
   //Check if deleting
   if(this.isDeleting){
      //Remove Char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
   }else{
     //Add Char
     this.txt = fullTxt.substring(0, this.txt.length + 1);
   }

   //Insert txt into element
   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

    setTimeout(() => this.type(), 500)

}

//Init on Dom load
document.addEventListener('DOMContentLoaded', init);
//Init App
function init(){
    const txtElement =document.querySelector('.txt-type');
   // console.log(txtElement);
    
    const words = JSON.parse(txtElement.getAttribute('data-word'));
   // console.log(words);
    
    const wait = txtElement.getAttribute('data-wait');
   // console.log(wait);
    
    // Init Typewriter
    new TypeWriter(txtElement, words, wait);
    
    
}

