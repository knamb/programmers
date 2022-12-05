function solution(i, j, k) {
  var answer = 0;
  
  for(let index = i; index<=j; index++){  
      const arr = Array.from(String(index));
      for(const el of arr){
          if(parseInt(el) === k) answer++
      }
  }
  
  return answer;
}