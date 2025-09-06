// console.log('connected');

// --- HEART FUNCTIONALITY ---
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

// --- COIN FUNCTIONALITY ---
let coinCount = parseInt(document.querySelector(".navbar-coin-count").innerText);

function updateCoinCount() {
    document.querySelector(".navbar-coin-count").innerText = coinCount;
}

// --- COPY HOTLINE NUMBER FUNCTIONALITY ---
let copyCount = 0;

function copyHotlineNumber(button) {
    const card = button.closest(".card");
    const serviceNumber = card.querySelector(".service-number").innerText;

    navigator.clipboard.writeText(serviceNumber)
        .then(() => {
            copyCount++;
            alert(`Hotline number copied! Total copies: ${copyCount}`);
            const totalCopyBtn = document.getElementById("total-copy-count");
            if (totalCopyBtn) {
                totalCopyBtn.innerText = `${copyCount} copy`;
            }
        })
        .catch(err => {
            console.error("Failed to copy:", err);
        });
}

const copyButtons = document.querySelectorAll(".card-copy-btn");
for (const btn of copyButtons) {
    btn.addEventListener("click", function () {
        copyHotlineNumber(btn);
    });
}

// --- CALL HISTORY FUNCTIONALITY ---
function addToCallHistory(serviceName, serviceNumber) {
    const historyContainer = document.querySelector(".call-history");

    // Get current time
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    const entry = document.createElement("div");
    entry.classList.add("flex", "justify-between", "items-center", "border-b", "py-2");

    entry.innerHTML = `
        <p class="font-semibold">${serviceName}</p>
        <p class="text-gray-600">${serviceNumber}</p>
        <p class="text-sm text-gray-400">${timeString}</p>
    `;

    historyContainer.appendChild(entry);
}

function handleCall(button) {
    const card = button.closest(".card");
    const serviceName = card.querySelector("h1").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;

    if (coinCount < 20) {
        alert("Not enough coins! You need at least 20 coins to make a call.");
        return;
    }

    coinCount -= 20;
    updateCoinCount();

    alert(`Calling ${serviceName} at ${serviceNumber}`);

    addToCallHistory(serviceName, serviceNumber);
}

const callButtons = document.querySelectorAll(".card-call-btn");
for (const btn of callButtons) {
    btn.addEventListener("click", function () {
        handleCall(btn);
    });
}

// --- CLEAR HISTORY FUNCTIONALITY ---
const clearHistoryBtn = document.getElementById("clear-history");
if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", function () {
        const historyContainer = document.querySelector(".call-history");
        historyContainer.innerHTML = "";
    });
}
