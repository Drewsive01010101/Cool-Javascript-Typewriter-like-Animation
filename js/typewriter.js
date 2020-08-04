class typeWriter{
  constructor(txtelement,word,timeInterval){
    this.txtelement=txtelement;
    this.word=word;
    this.timeInterval=parseInt(timeInterval,10);
    this.text='';
    this.build=false;
    this.type();
    this.currentIndex=0;
  }

type(){
  
 

let fulltext=this.word[this.currentIndex];

 if(this.build===true){

    
this.text=fulltext;
    
this.txtelement.innerHTML+=`<span>${this.text}</span>`;
this.currentIndex++;

   }
   
   if(this.currentIndex==this.word.length){
    this.build=false; }else{this.build=true}

 setTimeout(()=>this.type(),this.timeInterval);
 


}



}
document.addEventListener('DOMContentLoaded', function(){
  let txtelement=document.querySelector('.welcome');
  let word=JSON.parse(txtelement.getAttribute('data-word'));
  console.log(word);
  let timeInterval=txtelement.getAttribute('data-wait');

  const typeWriter1=  new typeWriter(txtelement,word,timeInterval);

});


