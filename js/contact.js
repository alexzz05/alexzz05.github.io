let name_field;
let birthday_field;
let message_field;
let checkbox_field;
let password_field;
let contact_form;

document.addEventListener("DOMContentLoaded", (event) => {
	name_field = document.getElementById("name-field");
	password_field = document.getElementById("password-field");
	birthday_field = document.getElementById("birth-field");
	message_field = document.getElementById("message-field");
	checkbox_field = document.getElementById("checkbox-field");
	contact_form = document.getElementById("contact-form");

	// Elimina el borde si el campo queda vacío
	function clearBorderOnEmpty(field) {
		field.addEventListener("input", () => {
			if (field.value.trim() === "") {
				field.style.border = "";
			}
		});
	}

	clearBorderOnEmpty(name_field);
	clearBorderOnEmpty(password_field);
	clearBorderOnEmpty(birthday_field);
	clearBorderOnEmpty(message_field);

	// Checkbox click
	checkbox_field.addEventListener("click", (event) => {
		if (event.target.checked) {
			console.log("Thanks for your soul btw!");
		} else {
			console.log("Nooo please");
		}
	});

	// Submit form
	contact_form.addEventListener("submit", (event) => {
		let send = true;

		// Name validation
		if (name_field.value.length <= 2 || name_field.value.length > 32) {
			send = false;
			name_field.style.border = "1px solid red";
		} else {
			name_field.style.border = "1px solid green";
		}

		// Password validation
		if (password_field.value.trim() === "") {
			send = false;
			password_field.style.border = "1px solid red";
		} else {
			password_field.style.border = "1px solid green";
		}

		// Birthdate validation
		if (birthday_field.value == "" || birthday_field.value.length != 10) {
			send = false;
			birthday_field.style.border = "1px solid red";
		} else {
			let date = birthday_field.value.split("-");
			let year = parseInt(date[0]);
			let month = parseInt(date[1]);
			let day = parseInt(date[2]);

			if (isNaN(year) || isNaN(month) || isNaN(day)) {
				send = false;
				birthday_field.style.border = "1px solid red";
			} else {
				if (year <= 0 || year > 2025 || month <= 0 || month > 12 || day <= 0 || day > 31) {
					send = false;
					birthday_field.style.border = "1px solid red";
				} else {
					birthday_field.style.border = "1px solid green";
				}
			}
		}

		// Message validation
		if (message_field.value.length < 5 || message_field.value.length > 255) {
			send = false;
			message_field.style.border = "1px solid red";
		} else {
			let tmp = message_field.value.replace(/'/g, "\\'");
			message_field.value = tmp;
			message_field.style.border = "1px solid green";
		}

		// Cancel submission if errors exist
		if (!send) {
			event.preventDefault();
		}
	});
});
