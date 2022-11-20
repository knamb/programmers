function solution(n) { 
  //나머지가 1이다 그럼 주어진수에 1을 빼면 배수가 된다는 의미
  //n+1 % ==0 을 만족하는 수를 n보다 작은수 중 찾아서 리턴
  //가장작은 자연수이므로 1부터 반복문 돌린다(x) 
  //1은 모든수에 대해서 약수므로, n+1을 1로 나눠도 나머지가 없다. 따라서 초기값 2 
  var answer = 0;
  for(let i=2; i<=n  ;i++){    
      if((n-1)%i===0)return i;
  }
  answer = n;
  return answer;
}