function solution(n, m) {  //어렵진 않지만 헷갈리는 개념 (정리한번 필요)
  var answer = [];
  const min = n <= m ? n : m; 
  const max = n >= m ? n : m;
  for(let i=max; i>=1 ; i--){
      if(min%i===0 && max%i===0){
          answer.push(i);
          break;
      }
  }
  answer.push(max*min/answer[0]);
  
  return answer;
}