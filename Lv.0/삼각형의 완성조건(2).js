function solution(sides) {  // 
  var answer = 0;
  //const arr  = []
  
  //우선 주어진 배열에서 긴것을 긴변으로 가져간다면
  //이건 자기 자신하고 같은것을 포함하겠다는 의미
  max = Math.max(...sides);
  min = Math.min(...sides);
  for(let i=max-min+1; i<=max; i++){
      //set.add(i);
      answer++;
  }
  //나머지 한변이 제일 길다고 가정한다면(자기자신은 빼야함)
  for(let i=max+1; i<max+min ;i++){
      //set.add(i);
      answer++
  }

  return answer;
}