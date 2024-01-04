//function jumbotron
function scrollToBottom() {
  const inputLuas = document.querySelector('.input-luas');
  inputLuas.scrollIntoView({ behavior: 'smooth' });
}

const button = document.getElementById('scrollButton');
button.addEventListener('click', scrollToBottom);



// function luas
function calculateLuasSegitiga() {
  const alas = document.getElementById("alas").value;
  const tinggi = document.getElementById("tinggi").value;

  const area = 0.5 * alas * tinggi;
  const rumus = `L = 1/2 x a x t </br>`;
  const outputLuas = `L = 1/2 x ${alas} x ${tinggi}<br/>`;

  document.getElementById("nilai-luas").innerHTML =
    `${rumus}` + `${outputLuas}`;
  document.getElementById("nilai-luas").innerHTML =
    `${rumus}` + `${outputLuas} = ${area}`;
}

//  reset
function resetLuasSegitiga() {
  document.getElementById("nilai-luas").innerHTML = "";
}

// Event listeners
document
  .getElementById("hitung-luas-segitiga")
  .addEventListener("click", calculateAreaSegitiga);
document
  .getElementById("reset-luas-segitiga")
  .addEventListener("click", resetAreaSegitiga);

function calculateKelilingSegitiga() {
  const sisi1 = Number(document.getElementById("sisi1").value);
  const sisi2 = Number(document.getElementById("sisi2").value);
  const sisi3 = Number(document.getElementById("sisi3").value);

  const areaKeliling = sisi1 + sisi2 + sisi3;
  const rumusKeliling = `K = Sisi A + Sisi B + Sisi C </br>`;
  const outputKeliling = `K = ${sisi1} + ${sisi2} + ${sisi3} </br>`;

  document.getElementById("nilai-keliling").innerHTML =
    `${rumusKeliling}` + `${outputKeliling} = ${areaKeliling}`;
}

//  reset
function resetKelilingSegitiga() {
  document.getElementById("nilai-keliling").innerHTML = "";
}

// Event listeners
document
  .getElementById("hitung-keliling-segitiga")
  .addEventListener("click", calculateKelilingSegitiga);
document
  .getElementById("reset-keliling-segitiga")
  .addEventListener("click", resetKelilingSegitiga);



