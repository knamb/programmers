function solution(polynomial) {     //다시풀어라 좋은 문제인듯
  var answer = '';
  const x  = [];
  const num = [];
  
  // " + " 연산자 기준으로 분류
  // 배열의 마지막 요소가 x 인것과 아닌것 분류(동류항 분류)
  const sep = polynomial.split(" + ");
  for(const el of sep){
      if(el.includes('x'))x.push(el)
      else num.push(el);
  }
  console.log(x,num)
  // x항 정리(조건에 계수가 1이면 삭제하는 조건 필요)
  let count = 0;
  for(const el of x){
      if(el==='x')count++;
      else{
          count += parseInt(el.split('x')[0])
      }
  }
  if(count!=0 && count!=1){
      answer += `${count}x`
  }else if(count===1){
      answer += "x";
  }
  // 상수항 정리
  count = 0;
  for(const el of num){
      if(!isNaN(parseInt(el))) //여기서 걸러
      count += parseInt(el) //여기서 나중에 문제생길수도? 빈배열 빈문자면? 빈배열이면 애초에 루프안돌거고 정수변환 불가면 NaN임
  }
  
  // 정리된 항들을 다시 더해서 리턴
  
  //일단 x항은 계수가 1인경우는 그냥 x 이고, 없는 경우는 아예 안더해서 answer 가 빈 문자열임
  //0 < polynomial에 있는 수 < 100 인거보니 무조건 x항이던 상수항이던 존재는 하는거임
  if(count!=0 && answer!=''){ //x항도 존재, 상수항 존재
      answer += ` + ${count}`
  }else if(count!=0 && answer === ''){ //x항 없고, 상수항 존재
      answer +=  `${count}`
  }
  return answer;
}
