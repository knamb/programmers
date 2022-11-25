function solution(n,arr1, arr2) {
  //정수로 암호화 된 배열을 지도배열로 변환 (10진수->2진수 변환)
  //지도1, 지도2 각원소를 반복하면서 or 연산을 통해 벽을 찾는다
  //if(A1=='#' || B1=='#') C1='#' else C1=' ' 
  
  var answer = [];
  function decode(arr) { //정수배열을 해독하여 기호로 표현된 지도로 변환
    const resultArr = [];
    for (let i = 0; i < arr.length; i++) {
      let el = arr[i];
      const elArr = [];
      while (el !== 0) { //2진수로 변환하면서 공백과 #으로 변환
        if (el % 2 === 0) elArr.push(' ');
        else elArr.push('#');
        el = parseInt(el / 2);
      }
      const fillLen = n - elArr.length; //<- push에 의해 배열의 길이가 가변. 따라서 고정값 변수 생성
      for (let i = 0; i < fillLen; i++) { 
        elArr.push(' '); 
      }
      resultArr.push(elArr.reverse()); //<- push를 통한 스택을 이용했으므로 reverse()
    }
    return resultArr;
  }


  const dArr1 = decode(arr1);
  const dArr2 = decode(arr2);
  const len = dArr1.length;

  for (let i = 0; i < len; i++) { // 진수변환시 값에 따라서 길이가 다르기때문에 NxN:정사각형 형식이 깨지므로 지도 형식을 맞춰준다
    const tmp = [];
    for (let j = 0; j < len; j++) {
      if (dArr1[i][j] === '#' || dArr2[i][j] === '#') tmp.push('#');
      else tmp.push(' ');
    }
    answer.push(String(tmp.join(''))); //한줄 한줄 배열을 문자열 형태로 합쳐서 결국엔 한 배열에 문자열들의 집합을 담는다 
  }

  console.log(answer);
  return answer;
}