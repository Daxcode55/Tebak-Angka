const angkaRandom = Math.floor(Math.random() * 100);
let result = document.querySelector(".result");
let info = document.querySelector(".infoTxt");
let messCount = document.querySelector(".messegCount");
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
}

function config(valueInput) {
  if (valueInput >= 99) {
    info.style.display = "block";
    result.style.display = "none";
    info.style.color = "red";
    info.innerHTML = "Angka yang Anda masukan terlalu besar";
    return;
  }

  if (valueInput === angkaRandom) {
    result.style.display = "block";
    info.style.display = "none";
    result.style.color = "green";
    result.innerHTML = "Benar";
    messCount.innerHTML = "Wowwww Hebat jawaban kamu benar";
  } else {
    result.style.display = "block";
    info.style.display = "none";
    result.style.color = "red";
    result.innerHTML = "Salah";
  }

  count--;
  messCount.innerHTML = `kesempatan menjawab = ${count}`;

  if (count === 0) {
    messCount.style.display = "none";
    info.style.display = "block";
    info.style.color = "red";
    info.innerHTML = "Kesempatan menjawab telah habis";
    // setTimeout(() => {
    //   window.location.reload();
    // }, 3000);
    return;
  }
}
