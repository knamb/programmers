function solution(n) {
  // n 진법 변환 : 
  //1. n으로 나눈 나머지를 가장 우측자리에 기입 (stack을 이용하면 역으로 쌓이므로 reverse()마지막에 사용)
  //2. 원본값을 갱신 [원본 = 원본/n 의 몫]
  //3. 원본값이 0이 된다면, 나누어 질 수 없는 나머지가 마지막으로 스택에 들어갈 때
  //4. 구해진 값을 역으로 바꿔준다
  
  var answer = 0;    
  let num = n;
  const arr = []; 

  while (num != 0) {
      arr.push(num % 3);
      num = Math.floor(num / 3);
  }
  arr.reverse();
  for (let i = 0; i < arr.length; i++) {
      answer += parseInt(arr[i]) * Math.pow(3, i);
  }

  return answer;
}