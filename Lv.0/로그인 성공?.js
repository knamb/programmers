function solution(id_pw, db) {      // 재밌는 문제
  var answer = '';                // 굳이 이중포문 돌리지 않고 아이디가 일치할때만 해당하는 아이디의 비밀번호를 바로 확인하면
  const checkArr =[false, false]; // 인덱스를 기억 할 필요도 없다 (놓치기 쉬운 조건 : 아이디는 중복 x , 비밀번호는 중복 가능)
  let idIndex
  //1.아이디 비교 2.패스워드 비교 순서
  
      for(let j=0; j<db.length;j++){
          if(id_pw[0]===db[j][0]){
              checkArr[0] = true;
              if(id_pw[1]=== db[j][1]){
                  checkArr[1] =true;
              }
              break;
          }
      }    
  
  if(checkArr[0]===false) answer += 'fail';
  else if(checkArr[0]===true && checkArr[1] ===false) answer += 'wrong pw';
  else answer += 'login'
  
  return answer;
}