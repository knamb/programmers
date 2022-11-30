function solution(chicken) {    //재밌는 문제
  var answer = 0;
  let rest = 0;
  // 최대 서비스 치킨의 수를 출력
  while(!(chicken<10)){
     if(chicken >=10){ 
      rest += chicken % 10;
      answer += parseInt(chicken/10);
      chicken = parseInt(chicken/10);
     }
      if(chicken<10){
          chicken += rest;
          rest = 0;
     }
  }
  console.log(answer)
  
  return answer;
}