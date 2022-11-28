function solution(progresses, speeds) {
  var answer = [];
  const result = [];
  
  for(let i=progresses.length-1; i>=0 ;i--){
      answer.push(Math.ceil((100-progresses[i])/speeds[i]));//올림=>7.8일 8일걸림 100퍼가 안되니까
  }
  
  let max = answer[answer.length-1];
  let temp = 1;
  
  for(let i=answer.length-2; i>=0 ;i--){
      if(answer[i]>max){
          max= answer[i];
          result.push(temp);
          temp =1;
      }
      else temp++
  }
  result.push(temp);
  
  return result;
}