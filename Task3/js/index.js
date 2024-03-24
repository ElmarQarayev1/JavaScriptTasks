function addStyle() {

    let color = document.getElementById("color").value;
    let fontsize = document.getElementById("fontsize").value;
    let container = document.getElementsByClassName("container");
    console.log(container);
    for (var i = 0; i < container.length; i++) {
      container[i].style.color = color;
      container[i].style.fontSize = fontsize + "px";
    }
  }
  let button = document.getElementById("www");
  button.addEventListener("click",addStyle);