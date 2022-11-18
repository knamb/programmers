function solution(board) { //반복문에서 반복범위 잘 쓰기 ex) for(let i=0; arr.length; i++) 처럼 반복변수 누락 조심
  var answer = 0;         // 다른풀이법 찾아보기
  const arr =[]
  for(let i=0;i<board.length;i++){ //지뢰의 position과 지뢰의 상하 포지션을 먼저 구한다.
      for(let j=0;j<board[0].length;j++){
            if(board[i][j]===1){
                arr.push([i,j])
                if(i+1<board.length)arr.push([i+1,j])
                if(i-1>=0)arr.push([i-1,j])
            }          
      }
  }

      const len = arr.length;
      for(i=0;i<len ;i++){  // 경계범위를 않게 조건문을 사용하여  각각의 좌우 포지션을 구해준다 
          if(arr[i][1]-1>=0){
              arr.push([parseInt(arr[i][0]), parseInt(arr[i][1])-1]) //좌측
          }
          if(arr[i][1]+1<board[0].length){
              arr.push([arr[i][0], arr[i][1]+1]) //우측
          }
      }
  
  for(let i=0; i<arr.length;i++){ // 안전하지 않는 모든지역을 1로 바꾸준다
      board[arr[i][0]][arr[i][1]] = 1; 
  }

  for(let i=0;i<board.length ;i++){ // 0을 원소값으로 가진 지역은 이제 안전한 지역이다
      for(let j=0; j<board[0].length ;j++){
          if(board[i][j]===0)answer++;
      }        
  }
  

  return answer;
}