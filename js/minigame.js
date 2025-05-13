let counter = 1;
const maxAttempts = 10;
const random_number = Math.floor(Math.random() * 100) + 1;

function compare_number() {
    const button_input = document.getElementById("field-button");
    const my_num_input = document.getElementById("field-number");
    const result = document.getElementById("number-result");

    button_input.value = `Guess! (${counter})`;
    my_num_input.classList.remove("input-error");

    const my_num = parseInt(my_num_input.value);

    if (isNaN(my_num) || my_num_input.value === "") {
        my_num_input.classList.add("input-error");
        result.innerHTML = `<em class="error">Please enter a valid number.</em>`;
        return;
    }

    if (my_num < 1 || my_num > 100) {
        my_num_input.classList.add("input-error");
        result.innerHTML = `<em class="error">Your number must be between 1 and 100.</em>`;
        return;
    }

    if (my_num > random_number) {
        result.innerHTML = `<em class="error">The number to be guessed is <strong>less</strong> than ${my_num}.</em>`;
        my_num_input.classList.add("input-error");
    } else if (my_num < random_number) {
        result.innerHTML = `<em class="error">The number to be guessed is <strong>greater</strong> than ${my_num}.</em>`;
        my_num_input.classList.add("input-error");
    } else {
        result.innerHTML = `<strong class="you-win">You got it right, it was ${my_num}!</strong>`;
        my_num_input.classList.remove("input-error");
        button_input.disabled = true;
        my_num_input.disabled = true;  // Deshabilita el campo de entrada también
    }

    counter++;
    if (counter > maxAttempts) {
        // Cuando se llegue al límite de intentos, deshabilitar el botón y el input
        button_input.disabled = true;
        my_num_input.disabled = true;
        result.innerHTML = `<em class="error"><strong>Game over!</strong> You've reached the maximum number of attempts.</em>`;
    }

    my_num_input.value = "";
    my_num_input.focus();
}

// Soporte para tecla Enter
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("field-number");
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita que el formulario se intente enviar
            compare_number();
        }
    });
});
