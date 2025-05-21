let btn = document.querySelector("button");
 
btn.addEventListener("click",rollback); 
function rollback(){
    let h2 = document.querySelector("h2");
    let randColor = randomColor();
    h2.innerText = randColor;
    let div = document.querySelector("div");
    div.style.backgroundColor = randColor;
    console.log("color updated");

}
function randomColor(){
    let red = Math.floor(Math.random() * 255) ;
    let green = Math.floor(Math.random() * 255) ;
    let blue = Math.floor(Math.random() * 255) ;

    // console.log();
    let color = `rgb(${red} , ${green} , ${blue})`;
    // console.log(color);
    return color;
}