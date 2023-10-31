const angkaRandom = Math.floor(Math.random() * 100);
let result = document.querySelector(".result");
let info = document.querySelector(".infoTxt");
let messCount = document.querySelector(".messegCount");
let resultHlp = document.getElementById("result-helper");
console.log(angkaRandom);

let count = 5;

document.getElementById("btn-start").addEventListener("click", () => {
  document.querySelector(".container-form").style.display = "block";
});

messCount.innerHTML = `kesempatan menjawab = ${count}`;
function tebakAngka() {
  let inputNum = document.getElementById("inputNum").value;
  let convert = parseInt(inputNum);
  config(convert);
  configHelper(convert);
}

function config(valueInput) {
  if (valueInput >= 99) {
    info.style.display = "block";
    result.style.display = "none";
    info.style.color = "red";
    info.innerHTML = "Angka yang Anda masukan terlalu besar";
    document.getElementById("inputNum").value = "";
    return;
  }

  if (valueInput === angkaRandom) {
    result.style.display = "block";
    info.style.display = "none";
    result.style.color = "green";
    result.innerHTML = "Benar";
    messCount.innerHTML = "Wowwww hebat jawaban kamu benar";
    return;
  } else {
    result.style.display = "block";
    info.style.display = "none";
    result.style.color = "red";
    result.innerHTML = "Salah";
    document.getElementById("inputNum").value = "";
  }

  count--;
  messCount.innerHTML = `kesempatan menjawab = ${count}`;

  if (count === 0) {
    messCount.style.display = "none";
    info.style.display = "block";
    info.style.color = "red";
    info.innerHTML = "Kesempatan menjawab telah habis";
    setTimeout(() => {
      window.location.reload();
    }, 3000);
    return;
  }
}

// function helper
document.getElementById("btn-bantuan").addEventListener("click", () => {
  document.querySelector(".wraper-helper").style.display = "block";
  let timer = document.getElementById("timer-helper");
  let second = 21;
  let durasi = setInterval(() => {
    second--;
    timer.innerHTML = second;
    timer.style.color = "green";
    timer.style.fontWeight = "bolder";

    console.log(second);
    if (result.innerHTML == "Benar") {
      document.querySelector(".wraper-helper").style.display = "none";
      document.getElementById("btn-bantuan").disabled = true;
      clearInterval(durasi);
    }
    if(second == 0) {
      document.querySelector(".wraper-helper").style.display = "none";
      document.getElementById("btn-bantuan").disabled = true;
      clearInterval(durasi);
    }
  }, 1000)
});

function configHelper(inputValue) {
  if (angkaRandom > inputValue) {
    resultHlp.style.display = "block";
    resultHlp.innerHTML = `lebih besar dari ${inputValue}`;
  } else if (inputValue >= 99) {
    resultHlp.style.display = "none";
  } else {
    resultHlp.style.display = "block";
    resultHlp.innerHTML = `lebih kecil dari ${inputValue}`;
  }
}
