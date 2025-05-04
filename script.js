// Παίρνουμε το κουμπί Σύνδεσης
const loginButton = document.getElementById("loginButton");

// Ακροατής για το κουμπί Σύνδεσης
loginButton.addEventListener("click", function() {
    const departmentSelect = document.getElementById("department");
    const selectedRole = departmentSelect.value;

    // Αποθηκεύουμε τον ρόλο στο localStorage
    localStorage.setItem("userRole", selectedRole);

    // Ανακατεύθυνση ανάλογα με τον επιλεγμένο ρόλο
    switch (selectedRole) {
        case "tamias":
            window.location.href = "xeirokinitiEisagwgiApokomma.html";  // Ανακατεύθυνση στη σελίδα για Ταμεία
            break;
        case "voithos_logisti":
            window.location.href = "records.html";  // Ανακατεύθυνση στη σελίδα για Βοηθό Λογιστή
            break;
        case "logistis":
            window.location.href = "insights.html";  // Ανακατεύθυνση στη σελίδα για Λογιστή
            break;
        case "ceo":
            window.location.href = "reports.html";  // Ανακατεύθυνση στη σελίδα για CEO
            break;
        case "cfo":
            window.location.href = "insights.html";  // Ανακατεύθυνση στη σελίδα για CFO
            break;
        default:
            alert("Παρακαλώ επιλέξτε έναν ρόλο.");
    }
});
