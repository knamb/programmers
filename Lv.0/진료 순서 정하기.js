function solution(emergency) {  
  var answer = [];
  //const emergencyOrigin = emergency 와 같이 복사하면 주소가 복사되서 똑같아짐
  const emergencyOrigin = Array.from(emergency)
  //1.내림차순
  emergency.sort((a,b)=>b-a); //여기서 순서를 바꿔버렸으니 당연히 매칭이 안되는거지
  
  //2.키값을 응급도 값으로 가지고 : 인덱스값 +1 을 값으로 가지고
  const obj = {};
  for(const index in emergency){
      //console.log(typeof index) 인덱스는(배열도 객체형식) string 이다
      obj[emergency[index]] = parseInt(index)+1;
  }
  console.log(obj)
  console.log(emergencyOrigin)
  //3.{76 : 1, 24 : 2, 3: 3}
  //4. 원래배열의 원소를 인덱스로 하는 객체의 값들을 새로운 배열에 푸시 
  for(const el of emergencyOrigin){
      answer.push(parseInt(obj[el]));
  }
  return answer;
}