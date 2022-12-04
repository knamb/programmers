function solution(array, n) {   
  var answer = array[0];
  const abs = []; // 가장 가까운 수가 여러개일 경우 (기억)
  
  for(const el of array){
      if(el >= n) abs.push(Math.abs(el-n));
      else abs.push(Math.abs(n-el));
  }
  // abs는 절대값의 집합이다
  
  const min = Math.min(...abs);
  const filteredAbs =[];
  
  for(const index in abs){
      if(abs[index] === min){
          filteredAbs.push(array[index])
      }
  }
  filteredAbs.sort((a,b)=>a-b);
  answer = filteredAbs[0];
  
  return answer;
}