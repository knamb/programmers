function solution(bin1, bin2) { 
  var answer = '';
  let el1 = 0;
  let el2 = 0;
  let up = false;
  const resultArr = [];   
  
  bin1 = Array.from(bin1);
  bin2 = Array.from(bin2);
  const len = bin1.length>= bin2.length ? bin1.length : bin2.length;
  
  for(let i=0;i<len;i++){
      el1=0
      el2=0
      if(bin1.length !== 0){
      el1 = parseInt(bin1.pop());    
      }
      if(bin2.length !== 0){
      el2 = parseInt(bin2.pop());    
      }
      
      let sum = el1+el2+up;
      resultArr.push(sum%2);
      if(sum/2>=1){
          up = true;
      }
      else {
          up = false;
      }
  }
  if(up === true) resultArr.push(1);
  resultArr.reverse();
  
  for(const el of resultArr){
      answer += el;
  }
  
  return answer;

}
  

