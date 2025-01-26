let forms = document.getElementsByClassName("formside");
let imgs = document.getElementsByClassName("imgside");
let logimg = document.getElementsByClassName("loginimg");
let btn = document.querySelector(".btncad");
let btnf = document.getElementById("btnx");
let tit = document.getElementsByClassName("title");
forms[0].style.transition = "all 1s ease";
imgs[0].style.transition = "all 1s ease";
logimg[0].style.transition = "all 1s ease";
const users = [];
let op = 2;

btn.addEventListener("click", (event) => cadlog(event));

function clicklog() {
  if (op == 2) {
    forms[0].style.right = "49%";
    imgs[0].style.left = "50.2%";
    forms[0].style.borderRadius = "10px 0px 0px 10px";
    logimg[0].style.borderRadius = "0px 10px 10px 0px";
    tit[0].innerHTML = "Login";
    btn.innerHTML = "Entre";
    op = 1;
  }
}

function clickcad() {
  if (op == 1) {
    forms[0].style.right = "";
    imgs[0].style.left = "";
    forms[0].style.borderRadius = "";
    logimg[0].style.borderRadius = "";
    tit[0].innerHTML = "Cadastro";
    btn.innerHTML = "Cadastre-se";
    op = 2;
  }
}

function cadlog(event) {
  let nome = document.getElementById("nome").value;
  let senha = document.getElementById("senha").value;
  if (op == 2) {
    users.push({ name: nome, password: senha });
    console.log(users);
  }
  if (op == 1) {
    const user = users.find(
      (user) => user.name === nome && user.password === senha
    );
    if (user) {
      alert("Login Concluido");
    } else {
      alert("Falha, esses dados não foram cadastrados");
    }
  }
  event.preventDefault();
}
