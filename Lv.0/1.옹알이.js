function solution(babbling) {   
    var answer = 0;             
    const arr = ["aya","ye","woo","ma"];
    
    for(const argu of arr){   
    babbling = babbling.map((el,index)=>{
        if(el.includes(argu)){
            let ind = el.indexOf(argu);
            let word =''
            for(let i=0; i<el.length ;i++){
                if(i>=ind && i<ind+argu.length){
                    word+=' ';
                }
                else {
                    word+= el[i];
                }
            }return word
        }else return el
    })
    }
    let sum = babbling.length;
    for(const el of babbling){
     for(let i=0;i<el.length;i++){
         if(el[i]!==' '){
             sum--;
             break
         }
      }   
    }
    answer = sum
    return answer;
}
