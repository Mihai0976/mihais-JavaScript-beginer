//set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            btn.style.color = "green";
            count++;
        } else {
            count = 0;
        }

        //change color of counter and btn depending on counter's value
        if (count > 0) {
            value.style.color = "green";
            if (count < 0) {
                btn.style.color = "red";
            }

        } else if (count < 0) {
            value.style.color = "red";
            btn.style.color = "red";
            if (count > 0) {
                btn.style.color = "green";
            }
        } else if (count === 0) {
            value.style.color = "blue";
            btn.style.color = "blue";
        }
        value.textContent = count;
    });
});