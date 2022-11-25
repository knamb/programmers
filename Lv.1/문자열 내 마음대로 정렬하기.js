function solution(arr, index) {
  var answer;
  arr.sort((a, b) => {
    // b, a <-이거 적고 생각하면 편함 & 음수 리턴시 자리바꿈
    if (b[index] > a[index]) return -1;
    // 첫조건만 보면 위의 조건만 필요하다
    // 두번째 조건을 생각하면 같을 때
    else if (b[index] === a[index]) {
      if (b > a) return -1;
    }
  });
  answer = Array.from(arr);
  return answer;
}