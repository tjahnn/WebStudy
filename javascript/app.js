const USER_LIMIT = "userlimit";
const USER_CHOICE = "userchoice";

const STYLE_HIDDEN = "hidden";

const userlimit = document.querySelector("#user-limit");
const userchoice = document.querySelector("#user-choice");
const playbtn = document.querySelector("#play-btn");
const userscore = document.querySelector("#user-score");
const userresult = document.querySelector("#user-result");
const usercong = document.querySelector("#user-cong");

playbtn.addEventListener("click", () => {
  if ("" === userlimit.value || "" === userchoice.value) return;
  else {
    localStorage.setItem(USER_LIMIT, userlimit.value);
    localStorage.setItem(USER_CHOICE, userchoice.value);
  }

  const machinechoice = Math.floor(
    Math.random() * (Number(userlimit.value) + 1)
  );
  userscore.textContent = `You chose: ${userchoice.value}, the machine chose: ${machinechoice}.`;
  if (Number(userchoice.value) == machinechoice) {
    userresult.textContent = "You won!";
    usercong.classList.remove(STYLE_HIDDEN);
  } else {
    userresult.textContent = "You lost!";
    usercong.classList.add(STYLE_HIDDEN);
  }
  userscore.classList.remove(STYLE_HIDDEN);
  userresult.classList.remove(STYLE_HIDDEN);
});

const savedUserLimit = localStorage.getItem(USER_LIMIT);
const savedUserChoice = localStorage.getItem(USER_CHOICE);
if (null === savedUserChoice || null === savedUserLimit) {
  localStorage.removeItem(USER_LIMIT);
  localStorage.removeItem(USER_CHOICE);
  userlimit.value = "";
  userchoice.value = "";
} else {
  userlimit.value = savedUserLimit;
  userchoice.value = savedUserChoice;
}

function superCongratulation() {
  setInterval(() => {
    let text = usercong.textContent;
    let newText = [...text];
    let lastLetter = newText.pop();
    newText.unshift(lastLetter);
    usercong.textContent = newText.join("");
  }, 100);
}
