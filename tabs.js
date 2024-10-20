const accountBtn = document.getElementById("account-btn");
const passwordBtn = document.getElementById("password-btn");
const passSection = document.getElementById("password-section");
const acctSection = document.getElementById("account-section");



accountBtn.addEventListener("click", function () {
  acctSection.classList.remove("hidden");
  passSection.classList.add("hidden");
  accountBtn.classList.add("active");
  passwordBtn.classList.remove("active");
});

passwordBtn.addEventListener("click", function () {
  passSection.classList.remove("hidden");
  acctSection.classList.add("hidden");
  document.getElementById("password-btn").classList.add("active");
  accountBtn.classList.remove("active");
});
