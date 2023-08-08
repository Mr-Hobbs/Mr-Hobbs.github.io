const pulsingHeading = document.getElementById("pulsing-heading");

function startPulsing() {
    pulsingHeading.classList.add("pulsing");
}

function stopPulsing() {
    pulsingHeading.classList.remove("pulsing");
}

function stopPulsingAfterDelay() {
    setTimeout(() => {
        stopPulsing();
    }, 3000); // 3000 milliseconds (3 seconds)
}

// Start pulsing when the page loads
startPulsing();

// Stop pulsing after 3 seconds
stopPulsingAfterDelay();
