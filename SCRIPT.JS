document.addEventListener("DOMContentLoaded", function() {
    const text = "HI, I am Satyam (a web developer)";
    let index = 0;
    const speed = 100; // typing speed in milliseconds
    const typedTextSpan = document.getElementById("typed-text");
    const cursorSpan = document.getElementById("cursor");

    function type() {
        if (index < text.length) {
            typedTextSpan.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            cursorSpan.style.display = 'none'; // Hide the cursor when typing is done
        }
    }

    type();
});

