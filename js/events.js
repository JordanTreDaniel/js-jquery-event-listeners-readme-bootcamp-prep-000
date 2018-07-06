//define functions here
function getIt() {
  $("p").on("click", () => alert("Hey!"));
}

function frameIt() {
  $('img').on('load', () => {
    this.addClass("tasty");
  })
}

function pressIt() {
  $("input").on("keydown", (e) => {
    e.preventDefault();
    if (e.key === )
  })
}
$(document).ready(function(){

// call functions here

});
