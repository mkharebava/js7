const text = "ver gitan martla"

const words = text.split(" ");
console.log(words);

let i;
let m=words.length;
for (i=0; i<m; i++){
    if(words[i].length<5){
        words[i]="short"
    } else{
        words[i]="long"
    }
}
console.log(words.join(" "));

let count = 0;
i=0;
const textt=text.split(" ");
let n=textt.length;
while(i<n){
    if(textt[i].includes ("a")){
        count=count+1;
    }
    i=i+1;
}
console.log(count);

const texttt=text.split(" ")
i=0;
do{
    console.log(texttt[i]);
    i=i+1;
} while(i<texttt.length)