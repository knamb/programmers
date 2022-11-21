function solution(s) { 
  var answer = '';
  //헷갈린다 정렬이 핵심
  //기본적으로 sort()는 오름차순
  //따라서 오름차순 하고 reverse()를 하면 내림차순
  //하지만 유니코드를 기반으로 하기때문에 문자열에 대한 정렬임을 인지!
  //1. sort()->reverse()
  //2. sort((a, b)=> callback) 콜백함수에서 조건에따른 return -1,0,1 
  arr = Array.from(s);
  arr.sort();
  arr.reverse();
  for(const word of arr){
      answer += word;
  } 
 
  return answer;
}

//@@참고 ///

// cFunction(a, b) : return -1 =>  (순서 안바꾼다) a를 b보다 낮은 색인으로 정렬합니다. a, b 순서
// cFunction(a, b) : return 0; =>  (그대로 둔다) a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬.
// cFunction(a, b) : return 1; =>  (순서를 바꾼다) b를 a보다 낮은 인덱스로 소트합니다. [0]:b [1]:a 

//////////////랜덤함수 같이 리턴값이 일정하지 않으면 안된다는 의미인듯/////////////////////////
// compareFunction(a, b)은 요소 a와 b의 특정 쌍이 두 개의 인수로 주어질 때 항상 동일한 값을 반환해야합니다. 
// 일치하지 않는 결과가 반환되면 정렬 순서는 정의되지 않습니다.


// arr.sort((a,b)=>{
//   if(a>b)return -1; 
// });
//## 해석 ##
//1. a, b 순으로 되어있는데 
//2. if(a > b) : 만약 a가 b보다 큰 상태라면 
//3. return -1 : 순서를 바꿔라
//4. 따라서 작은것이 뒤로 가도록 정렬이 된다