function solution(s) {
  var answer = '';
  const arr = [];
  s = Array.from(s)
  
  for(const word of s){ 
      let count = 0;
      for(const target of s){
          if(word === target) count ++;   
      }
      if(count ===1)arr.push(word);
  }
  arr.sort();
  for(const word of arr){
      answer += word;
  }
  
  return answer;
}