const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

 function goNext(){
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[0].q;
}

function begin(){
  main.style.WedkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WedkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
  setTimeout(() => {
    main.style.display = "none";
    qna.style.display = "block";
    }, 450)
    goNext();
  }, 450);
}

