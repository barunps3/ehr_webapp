"use strict";
document.addEventListener("click", (event) => {
    const target = event.target;
    console.log(target);
    const isDropdownButton = target.matches("[data-dropdown-button]");
    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
    }
    // Close all other dropdown
    // or when clicked somewhere other than current dropdown
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown != currentDropdown) {
            dropdown.classList.remove('active');
        }
    });
});
const patientId = document.querySelector(".id-menu");
const searchPlaceholder = document.getElementById("patient_id");
const idSelectorButton = document.querySelector(".id-selector-btn");
patientId.addEventListener("click", event => {
    const target = event.target;
    let idType = target.textContent;
    // console.log(idType)
    switch (idType) {
        case "Aadhar Card":
            searchPlaceholder.setAttribute("placeholder", "Enter Aadhar Card Number");
            idSelectorButton.textContent = "Aadhar Card";
            break;
        case "Passport":
            searchPlaceholder.setAttribute("placeholder", "Enter Passport Number");
            idSelectorButton.textContent = "Passport";
            break;
        case "Patient ID":
            searchPlaceholder.setAttribute("placeholder", "Enter Patient ID");
            idSelectorButton.textContent = "Patient ID";
            break;
        default:
            searchPlaceholder.setAttribute("placeholder", "Select ID type");
            idSelectorButton.textContent = "ID type";
    }
    const dropdown = idSelectorButton.closest("[data-dropdown]");
    dropdown.classList.remove('active');
});
