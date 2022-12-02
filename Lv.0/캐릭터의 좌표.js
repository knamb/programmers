function solution(keyinput, board) {    //시키는대로
  var answer = [];
  board[0] = Math.floor(board[0]/2)
  board[1] = Math.floor(board[1]/2)
  
  const position = [0,0];
  // 즉 보드의 맥스 크기(가로, 세로) 음수로 주어지면 그와 가장 밀접한 짝수길이 만큼이 이동 최대치 경계라인
  // [x, y] index0 은 가로방향 index1은 세로방향
  for(const input of keyinput){
      if(input ==='left' && position[0]>(-board[0])){
          position[0]--;
      }else if(input ==='right' && position[0]<board[0]){
          position[0]++;    
      }else if(input ==='up' && position[1]<board[1]){
          position[1]++;
      }else if(input === 'down'&& position[1]>(-board[1])){
          position[1]--;            
      }
  }
  return position;
}