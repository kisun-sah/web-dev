
console.log("hello word");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
    alert("Thank you for clicking!");

    document.querySelector(".box").innerHTML = "<b> Yayy you were clicked </b> ENjoy your click ";
});
