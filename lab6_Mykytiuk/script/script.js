const checkButton = document.querySelector("#check_answer");
      const form = document.querySelector("form");
      let inputs = {
        email: {
          value: "",
          valid: false,
          regex: /^([a-z0-9]+)(\.[a-z0-9]+)*@pnu\.edu\.ua$/i,
        },
        name: {
          value: "",
          valid: false,
          regex: /^([A-ZА-ЯІ][a-zа-яі]+[\s])([A-ZА-ЯІ]+)$/,
        },
        login: {
          value: "",
          valid: false,
          regex: /^[a-z0-9_-]{3,16}$/i,
        },
        password: {
          value: "",
          valid: false,
          regex:
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[-_!@#$%^&*;])[A-Za-z\d-_!@#$%^&*;]{8,}$/,
        },
        postal_code: {
          value: "",
          valid: false,
          regex: /^[0-9]{5}$/,
        },
        validate: function () {
          for (let key in this) {
            if (this[key].value !== "" && key !== "validate") {
              this[key].valid = this[key].regex.test(this[key].value);
            }
          }
        },
      };

      checkButton.addEventListener("click", () => {
        const formData = new FormData(form);

        for (let [key, value] of formData) {
          inputs[key].value = value;
          inputs.validate();
          if (inputs[key].valid) {
            document.querySelector(`#${key}`).classList.add("valid");
            document.querySelector(`#${key}`).classList.remove("invalid");
            document.querySelector(`#${key}-message`).textContent = "✓";
          } else {
            document.querySelector(`#${key}`).classList.add("invalid");
            document.querySelector(`#${key}`).classList.remove("valid");
            document.querySelector(`#${key}-message`).textContent =
              "Неправильний формат";
          }
        }
      });