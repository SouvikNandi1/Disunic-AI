var inp = document.getElementById("chatinput")
var btn = document.getElementById("chatbutton")

function success() {
    if (inp.value === "") {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }

}