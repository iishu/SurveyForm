document.getElementById("submitBtn").addEventListener("click", function() {
    const form = document.getElementById("surveyForm");

    if (form.checkValidity()) {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "";

        const formElements = form.elements;
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];
            if (element.type !== "button" && element.type !== "checkbox") {
                const label = document.querySelector(`label[for="${element.id}"]`).textContent;
                resultDiv.innerHTML += `<p>${label}: ${element.value}</p>`;
            }
        }

        const popup = document.getElementById("popup");
        popup.style.display = "block";

        document.getElementById("closePopup").addEventListener("click", function() {
            popup.style.display = "none";
            form.reset();
        });
    }
});

document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("surveyForm").reset();
});

// Close popup on outside click
window.addEventListener("click", function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
