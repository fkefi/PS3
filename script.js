// Παίρνουμε το κουμπί Σύνδεσης
const loginButton = document.getElementById("loginButton");

// Ακροατής για το κουμπί Σύνδεσης
loginButton.addEventListener("click", function() {
    const departmentSelect = document.getElementById("department");
    const selectedRole = departmentSelect.value;

    // Ανακατεύθυνση ανάλογα με τον επιλεγμένο ρόλο
    switch (selectedRole) {
        case "tamio":
            window.location.href = "logistis.html";  // Ανακατεύθυνση στη σελίδα για Λογιστή
            break;
        case "logistirio":
            window.location.href = "voithos_logisti.html";  // Ανακατεύθυνση στη σελίδα για Βοηθό Λογιστή
            break;
        case "info":
            window.location.href = "tameias.html";  // Ανακατεύθυνση στη σελίδα για Ταμεία
            break;
        case "ceo":
            window.location.href = "ceo.html";  // Ανακατεύθυνση στη σελίδα για CEO
            break;
        case "cfo":
            window.location.href = "cfo.html";  // Ανακατεύθυνση στη σελίδα για CFO
            break;
        default:
            alert("Παρακαλώ επιλέξτε έναν ρόλο.");
    }
});
