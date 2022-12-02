function solution(balls, share) { //테스트케이스로 보니 나눗셈이라 소수점 결과가 나옴 
  var answer = 0;                //따라서 반올림해서 통과. 왜 반올림이지? 왜 내림은 안되는거지 ?
  const n = balls ;               //이거 부동소수점 관련해서 정밀도 문제인듯
  const m = share ;                 //나중에 알아보자 일단 .9999999995이런식으로 나오게 되는데 정밀도가 부족해서다
                                      
  function f(v){
      let rt = 1;
      for(let i=1; i<=v; i++){
          rt*= i;
      }
      return rt;
  }
  answer = f(n)/(f(n-m)*f(m))
  if(n===m)answer =1
  answer = Math.round(answer);
  return answer;
}


