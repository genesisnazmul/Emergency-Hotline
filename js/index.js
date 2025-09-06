// console.log('connected');
let heartCount = 0;

// function to update navbar heart count
function updateHeartCount() {
    document.querySelector(".navbar-heart-count").innerText = heartCount;
}

// function to handle heart clicks
function toggleHeart(button) {
    const isActive = button.classList.contains("text-red-500");

    if (isActive) {
        button.classList.remove("text-red-500");
        heartCount--;
    } else {
        button.classList.add("text-red-500");
        heartCount++;
    }

    updateHeartCount();
}

const heartButtons = document.querySelectorAll(".card-heart-btn");

for (const btn of heartButtons) {
    btn.addEventListener("click", function () {
        toggleHeart(btn);
    });
}

// initial coin count
let coinCount = parseInt(document.querySelector(".navbar-coin-count").innerText);

// update coin count in navbar
function updateCoinCount() {
    document.querySelector(".navbar-coin-count").innerText = coinCount;
}

// function to add a new call into Call History
function addToCallHistory(serviceName, serviceNumber) {
    const historyContainer = document.querySelector(".call-history");

    const entry = document.createElement("div");
    entry.classList.add("flex", "justify-between", "items-center", "border-b", "py-2");

    entry.innerHTML = `
        <p class="font-semibold">${serviceName}</p>
        <p class="text-gray-600">${serviceNumber}</p>
    `;

    historyContainer.appendChild(entry);
}

// function to handle call button click
function handleCall(button) {
    const card = button.closest(".card"); // card wrapper
    const serviceName = card.querySelector("h1").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;

    // check balance
    if (coinCount < 20) {
        alert("Not enough coins! You need at least 20 coins to make a call.");
        return;
    }

    // deduct coins
    coinCount -= 20;
    updateCoinCount();

    // alert
    alert(`Calling ${serviceName} at ${serviceNumber}`);

    // add to history
    addToCallHistory(serviceName, serviceNumber);
}

// select all call buttons
const callButtons = document.querySelectorAll(".card-call-btn");

// loop with for...of
for (const btn of callButtons) {
    btn.addEventListener("click", function () {
        handleCall(btn);
    });
}


