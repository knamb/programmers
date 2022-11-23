function solution(sizes) {
  // 문제를 파악할때, 예시나 어떠한 조건을 잘 관찰하면 법칙을 찾을 수 있는것 같다
  // (하지만 2번 명함을 가로로 눕혀 수납한다면) <- 이 부분이 핵심
  // 어차피 최대부분에 그보다 작은값을 끼워넣고 다른 부분에서 크기를 줄인다는 아이디어
  // 좀더 큰 시야로 보면, 모든 명함들을 한쪽에 긴것을 모아놓고, 한쪽에는 짧은것을 모아서 모든것을 담을수 있는 크기를 찾으면 됨
  var answer = 0;
  const maxArr = [];
  const minArr = [];
  for(const el of sizes){
      maxArr.push(Math.max(el[0], el[1])); 
      minArr.push(Math.min(el[0], el[1]));
  }
  answer = Math.max(...maxArr) * Math.max(...minArr);
  return answer;
}