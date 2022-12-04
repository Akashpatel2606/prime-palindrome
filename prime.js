let num=7;
let p=0;
   for(let i=1;i<=num;i++){
       if(num%i==0){
         p+=1;
   }
  }
       if(p==2){
          console.log("prime")
       }
        else{
          console.log("not prime")
}

// for palindrome
let new_str="";
let str="naman";
   for(let i=str.length-1;i>=0;i--){
         new_str+=str[i];
    }
   if(new_str==str){
                console.log("Palindrome No"); }
   else  {
             console.log("Not Palindrome No") }

