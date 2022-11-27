function solution(array) {  //좋은 문제다 주옥 같은문제
  var answer = 0;
  // 객체생성 1.undefined 2. +=
  const obj = {};
  const arr = [];
  
  
  for(let i=0;i<array.length; i++){
      if(obj[array[i]] === undefined){ //중복은 피해버리는 좋은 로직
              obj[array[i]] = 1;
      }else
          continue;
      for(j=0;j<array.length; j++){
          if(array[i] === array[j] && i!=j){      
              obj[array[i]]+=1;
          }
      }
  }
  // 객체 for..in 순회하면서 배열로 뽑아내
  for(const i in obj){
      arr.push([parseInt(i),obj[i]]);
  }
  
  // 배열 내림차순으로 정렬([1] 기준으로)
  arr.sort((a,b)=> b[1]-a[1]);
  console.log(arr)
  // 맨 앞의 값으로 탐색하여 같은게 있으면 -1반환 없으면 맨앞의 값 반환
  for(let i=0; i<arr.length;i++){ // 여기선 최빈값의 빈도수가 중복되는지를 확인하는 부분이다!(헷갈림 주의)
      if(arr[0][1] === arr[i][1] && i!==0) {
       //console.log(arr[[0][0], arr[i][0]])
          return -1
      }
  }
  answer = arr[0][0]
  return answer;
}