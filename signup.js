const changeFocus1 = () => {
  const phoneNum1 = document.getElementById("num1");
  const phoneNum2 = document.getElementById("num2");
  if (phoneNum1.value.length === 3) {
    phoneNum2.focus();
  }
};

const changeFocus2 = () => {
  const phoneNum2 = document.getElementById("num2");
  const phoneNum3 = document.getElementById("num3");
  if (phoneNum2.value.length === 4) {
    phoneNum3.focus();
  }
};

const onlyNumber = (input) => {
  input.value = input.value.replace(/[^0-9]/g, "");
  checkPhoneNumber();
};

const checkPhoneNumber = () => {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const num3 = document.getElementById("num3").value;
  const authButton = document.getElementById("auth-btn");
  const successButton = document.getElementById("success-btn");
  const signupButton = document.getElementById("signup-btn");

  if (num1.length === 3 && num2.length === 4 && num3.length === 4) {
    // console.log("인증번호 전송 버튼 활성화");
    authButton.disabled = false;
  } else {
    authButton.disabled = true;
    clearInterval(timerId);
    successButton.disabled = true;
    signupButton.disabled = true;
  }
};

const authentication = () => {
  let randomNum = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("auth-num").innerText = randomNum;
  // console.log("random");

  const successButton = document.getElementById("success-btn");
  const signupButton = document.getElementById("signup-btn");

  successButton.disabled = true;
  signupButton.disabled = true;
};

let timerId;
const timerStart = () => {
  if (timerId) {
    clearInterval(timerId);
  }

  let time = 180;
  let min = Math.floor(time / 60);
  let sec = String(Math.floor(time % 60)).padStart(2, "0");
  const timer = document.getElementById("timer");
  timer.innerText = `${min}:${sec}`;

  const successButton = document.getElementById("success-btn");
  successButton.disabled = false;

  timerId = setInterval(() => {
    if (time > 0) {
      time--;
      min = Math.floor(time / 60);
      sec = String(Math.floor(time % 60)).padStart(2, "0");
      timer.innerText = `${min}:${sec}`;
    } else {
      clearInterval(timerId);
      successButton.disabled = true;
    }
  }, 1000);
};

const disabledAuth = () => {
  clearInterval(timerId);

  const successButton = document.getElementById("success-btn");
  successButton.disabled = true;

  const signupButton = document.getElementById("signup-btn");
  signupButton.disabled = false;
};

const signupVerification = () => {
  const infoEmail = document.getElementById("email").value.trim();
  const infoName = document.getElementById("name").value.trim();
  const infoPw1 = document.getElementById("pw1").value.trim();
  const infoPw2 = document.getElementById("pw2").value.trim();
  const infoRegion = document.getElementById("select-region").value;
  const infoGender = document.querySelector(
    "input[type=radio][name=gender]:checked"
  );

  const checkEmail = document.getElementById("check-email");
  const checkName = document.getElementById("check-name");
  const checkPw1 = document.getElementById("check-pw1");
  const checkPw2 = document.getElementById("check-pw2");
  const checkRegion = document.getElementById("check-region");
  const checkGender = document.getElementById("check-gender");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (infoEmail && infoName && infoPw1 && infoPw2 && infoRegion && infoGender) {
    checkEmail.innerText = "";
    checkName.innerText = "";
    checkPw1.innerText = "";
    checkPw2.innerText = "";
    checkRegion.innerText = "";
    checkGender.innerText = "";
    alert("가입을 축하합니다");
  } else {
    if (!emailPattern.test(infoEmail)) {
      checkEmail.innerText = "이메일이 올바르지 않습니다.";
    } else {
      checkEmail.innerText = "";
    }
    if (!infoName) {
      checkName.innerText = "이름이 올바르지 않습니다.";
    } else {
      checkName.innerText = "";
    }
    if (!infoPw1) {
      checkPw1.innerText = "비밀번호를 입력해 주세요.";
    } else {
      checkPw1.innerText = "";
    }
    if (!infoPw2) {
      checkPw2.innerText = "비밀번호를 입력해 주세요.";
    } else if (!(infoPw1 === infoPw2)) {
      checkPw2.innerText = "비밀번호가 일치하지 않습니다.";
    } else {
      checkPw2.innerText = "";
    }
    if (infoRegion === "none") {
      checkRegion.innerText = "지역을 선택해 주세요.";
    } else {
      checkRegion.innerText = "";
    }
    if (!infoGender) {
      checkGender.innerText = "성별을 선택해 주세요.";
    } else {
      checkGender.innerText = "";
    }
  }
};
