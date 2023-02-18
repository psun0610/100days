const dDay = document.querySelector("#d-day");
const remainTime = document.querySelector("#remain-time");

function diffDay() {
  const compareTime = new Date(2023,3,3);
  const todayTime = new Date();
  const diff = compareTime - todayTime;
  // 여기서 Date() 객체를 사용할 때 console.log를 찍어보면
  // 한국 표준시를 밀리세컨드 단위로 나타내기 때문에 수가 크다
  // 따라서 아래와 같이 계산을 해준다.
  const diffDay = String(Math.floor(diff / (1000*60*60*24)));
  const diffHour = String(Math.floor((diff / (1000*60*60)) % 24)).padStart(2, '0');
  const diffMin = String(Math.floor((diff / (1000*60)) % 60)).padStart(2, '0');
  const diffSec = String(Math.floor(diff / 1000 % 60)).padStart(2, '0');

  dDay.innerText = `D-${diffDay}`;
  remainTime.innerText = `${diffHour}:${diffMin}:${diffSec}`;
}

diffDay();
setInterval(diffDay, 1000);