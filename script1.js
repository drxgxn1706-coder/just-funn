// =================================
// DRIVE X MOTORS - JAVASCRIPT
// =================================


// ================================
// MOBILE MENU
// ================================

function toggleMenu() {

    document
        .getElementById("navMenu")
        .classList.toggle("active");

}


// ================================
// CAR FILTER
// ================================

function filterCars(type, button) {

    const cars =
        document.querySelectorAll(".car-card");

    const buttons =
        document.querySelectorAll(".filter-btn");


    buttons.forEach(btn => {

        btn.classList.remove("active");

    });


    button.classList.add("active");


    cars.forEach(car => {

        const carType =
            car.getAttribute("data-type");


        if (type === "all" || carType === type) {

            car.style.display = "block";

        } else {

            car.style.display = "none";

        }

    });

}


// ================================
// CAR DETAILS
// ================================

function showCar(carName) {

    document.getElementById(
        "modalCarName"
    ).textContent = carName;


    document.getElementById(
        "carModal"
    ).classList.add("active");

}


// ================================
// CLOSE MODAL
// ================================

function closeModal() {

    document.getElementById(
        "carModal"
    ).classList.remove("active");

}


// ================================
// TEST DRIVE
// ================================

function bookTestDrive() {

    const carName =
        document.getElementById(
            "modalCarName"
        ).textContent;


    const phone =
        "919876543210";


    const message =
        `Hello DRIVE X MOTORS!%0A%0AI would like to book a test drive for:%0A${carName}`;


    window.open(
        `https://wa.me/${phone}?text=${message}`,
        "_blank"
    );

}


// ================================
// OFFER
// ================================

function showOffer() {

    alert(
        "🔥 DRIVE X SPECIAL OFFER 🔥\n\n" +
        "• Attractive Finance Options\n" +
        "• Exchange Benefits\n" +
        "• Special Discounts\n\n" +
        "Contact DRIVE X MOTORS for today's offers!"
    );

}


// ================================
// EMI CALCULATOR
// ================================

function calculateEMI() {

    const price =
        Number(
            document.getElementById(
                "carPrice"
            ).value
        );


    const downPayment =
        Number(
            document.getElementById(
                "downPayment"
            ).value
        );


    const interest =
        Number(
            document.getElementById(
                "interest"
            ).value
        );


    const years =
        Number(
            document.getElementById(
                "years"
            ).value
        );


    const loanAmount =
        price - downPayment;


    const monthlyRate =
        interest / 12 / 100;


    const months =
        years * 12;


    let emi;


    if (
        loanAmount <= 0 ||
        months <= 0
    ) {

        emi = 0;

    } else if (monthlyRate === 0) {

        emi = loanAmount / months;

    } else {

        emi =
            loanAmount *
            monthlyRate *
            Math.pow(
                1 + monthlyRate,
                months
            ) /
            (
                Math.pow(
                    1 + monthlyRate,
                    months
                ) - 1
            );

    }


    document.getElementById(
        "emi"
    ).textContent =
        "₹" +
        Math.round(emi)
            .toLocaleString("en-IN");


    document.getElementById(
        "loanAmount"
    ).textContent =
        "₹" +
        Math.max(0, loanAmount)
            .toLocaleString("en-IN");

}


// ================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ================================

document
    .getElementById("carModal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeModal();

            }

        }
    );


// ================================
// INITIAL EMI CALCULATION
// ================================

calculateEMI();