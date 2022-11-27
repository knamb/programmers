function solution(quiz) {
  var answer = [];
  //","기준으로 스플릿 할 필요는 딱히없는듯
  //" = "기준으로 스플릿
  for(let i=0; i<quiz.length;i++){
      const arr = quiz[i].split(" = ");
      if(eval(arr[0])=== parseInt(arr[1])){
          answer.push('O')
      }else answer.push('X')
  }
  console.log(answer)
  //eval 함수를 통해서 계산 후 비교
  
  return answer;
}