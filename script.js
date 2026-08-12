// =============================
// RESTAURANT SEARCH
// =============================

const searchInput = document.getElementById("searchInput");
const heroSearch = document.getElementById("heroSearch");

const restaurantCards =
    document.querySelectorAll(".restaurant-card");

const noResults =
    document.getElementById("noResults");


function searchRestaurants(value) {

    value = value.toLowerCase().trim();

    let found = false;

    restaurantCards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "block";
            found = true;

        } else {

            card.style.display = "none";

        }

    });

    if (found || value === "") {

        noResults.style.display = "none";

    } else {

        noResults.style.display = "block";

    }
}


// Navbar search
searchInput.addEventListener("input", function () {

    searchRestaurants(this.value);

});


// Hero search
heroSearch.addEventListener("input", function () {

    searchInput.value = this.value;

    searchRestaurants(this.value);

});


// =============================
// HEART BUTTON
// =============================

const hearts =
    document.querySelectorAll(".heart");

hearts.forEach(heart => {

    heart.addEventListener("click", function (event) {

        event.stopPropagation();

        if (this.innerText === "♡") {

            this.innerText = "♥";

        } else {

            this.innerText = "♡";

        }

    });

});


// =============================
// CATEGORY CLICK
// =============================

const categories =
    document.querySelectorAll(".category");

categories.forEach(category => {

    category.addEventListener("click", function () {

        const categoryName =
            this.querySelector("p").innerText;

        searchInput.value = categoryName;

        searchRestaurants(categoryName);

        document
            .querySelector(".restaurants")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


// =============================
// LOGIN BUTTON
// =============================

const loginButton =
    document.querySelector(".nav-links button:first-child");

loginButton.addEventListener("click", function () {

    alert("Login page coming soon!");

});


// =============================
// SIGN UP BUTTON
// =============================

const signupButton =
    document.querySelector(".nav-links button:last-child");

signupButton.addEventListener("click", function () {

    alert("Sign up page coming soon!");

});