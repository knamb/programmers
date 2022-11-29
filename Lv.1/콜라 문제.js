function solution(a, b, n) {
  // 3개주면 1개준다 3으로 나누면 몫이 1x이다. 
  // 3개주면 2개준다 3으로 나누면 몫이 2x이다. 
  // a개주면 b개준다 a로 나누면 몫이 bx이다.
  // a=2, b=1, n=20 
  var answer = 0;
  let rest = 0;
  while(n>=a){
    rest = n%a; //  0개남음
    answer += parseInt(n/a)*b;  //10개 
    n = parseInt(n/a)*b; //
    n += rest;
  }
  console.log(answer)
  return answer;
}
