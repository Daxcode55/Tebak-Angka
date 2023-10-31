// tebak angka
// const angka = prompt("masukan angka !");
// const convert = parseInt(angka);
// console.log(angka);
// console.log(typeof(convert));

const angkaRandom = Math.floor(Math.random() * 100);
console.log(angkaRandom);

document.getElementById("btn-start").addEventListener("click", () => {
  document.querySelector(".container-form").style.display = "block";
});

function tebakAngka() {
  let inputNum = document.getElementById("inputNum").value;
  let convert = parseInt(inputNum);
  config(convert);
}

function config(valueInput) {
    let result = document.querySelector(".result");

    if (valueInput === angkaRandom) {
        result.style.color = "green";
        result.innerHTML = "Benar";
    } else {
        result.style.color = "red";
        result.innerHTML = "Salah";
    }
}
