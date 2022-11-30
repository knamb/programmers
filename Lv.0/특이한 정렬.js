function solution(numlist, n) { // 재밌는 정렬문제 좋은문제
  var answer = [];
  const arr = [];
  // [4-1][4-2][4-3][4-4][5-4][6-4]
  // 3,2,1,0,1,2
  // 순서대로 정렬 
  // 0,1,1,2,2,3
  // 절대값은 정렬이 되었는데 여기서 절대값 기준이 아닌 값기준으로 한번더 정렬하면
  // 0,1,1,2,2,3
  // 원소2개를 가진 배열로 처리하면 편할듯
  for(let i=0;i<numlist.length;i++){
      let large = (n >= numlist[i]) ? n : numlist[i];
      let min = (n < numlist[i]) ? n : numlist[i];
      arr.push([Math.abs(large-min), numlist[i]]);
  }
  console.log(arr)
  arr.sort((a,b)=> a[0]-b[0]);
  console.log(arr)
  arr.sort((a,b)=> a[0]===b[0]? b[1]-a[1] : 0);
  console.log(arr)
  for(const el of arr){
      answer.push(el[1]);
  }
  return answer;
}