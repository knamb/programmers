function solution(n) { //생각해보니 max두자리면 세자리까지도 가능할듯 (그래서 헤맸다) #다시풀고 싶은문제
  var answer = 0;
  let i=0;
  let j=1;
  //구하고자 하는 값을 인덱스 값으로 
  //3x마을에서 쓰는 숫자는 공식으로 
  // 1, 2, x ,4 ,5 ,x , 7, 8 ,x, 10, 11, x, x, 14, x, 16
  //       3        6         9          12 13     15 
  // 제한사항이 100이하니까 두자리 잘라서 비교
  while(1){ //-> 카운팅결과가 n일때 break하고, 증가하는 i값을둬서 대상값으로 둔다
       let isValid = true;
       //3의 배수인지 판단
       if(j%3===0){
           isValid = false;
       }   
      //3이 들어간 수 인지판단
       const num = Array.from(String(j)); // ['1'] ['11'] ['111']-> [['1']] [['1'],['1']] [['1'],['1']['1']]
       console.log(num)
       for(const el of num){
           if((el)==='3' && el!=='0'){                 
               isValid = false; 
           }
       }
       //유동적인 자리수로 생각하고 3이 나왔을때 false를 줘서 해결
       if(isValid===true) i++;
            
  // 둘다 아니면 카운팅(둘다 아니면  그 마을에서 쓰일 수 있는 숫자다, 그런게 n개가 있어야 10진법에서의 n인거고 그것의 실제 값은
  // 그걸 구하기 까지의 반복문의 돌아간 수 
       if(i===n)break;
      
      j++;
  }
  answer = j   
  return answer;
}