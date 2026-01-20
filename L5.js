console.log("Hello, World!");
const click = document.querySelector("#click");
const stop = document.querySelector("#stop");
function print() {
    console.log(" click Button clicked!");
}
function removeListener() {
    click.removeEventListener("click", print);
    console.log("Event listener removed.");
}
click.addEventListener("click", print);
stop.addEventListener("click",()=> {
   console.log(" stop Button clicked!");
    click.removeEventListener("click", print);
});
function message(event){
    console.log(event.key)
    console.log("button clicked!")
}
click.addEventListener("keyup",message)

const form=document.querySelector("#new");
form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("form submitted")
})