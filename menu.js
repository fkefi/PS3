function generateMenu(role) {
    const sidebar = document.querySelector(".sidebar");
    sidebar.innerHTML = ''; // Καθαρίζει το μενού

    // Σταθερά κουμπιά για όλους
    const baseButtons = ["Profile", "Log out"];
    baseButtons.forEach(text => {
        const btn = document.createElement("button");
        btn.textContent = text;
        btn.onclick = () => {
            if (text === "Log out") {
                localStorage.removeItem("userRole");
                window.location.href = "login.html";
            }
        };
        sidebar.appendChild(btn);
    });

    // Κουμπιά ανά ρόλο
    const roleButtons = {
        "tamias": ["Χειροκίνητη Καταγραφή", "Επεξεργασία Συναλλαγών"], // Προσθέτουμε αυτά τα κουμπιά
        "logistis": ["Επεξεργασία", "Insights"],
        "voithos_logisti": ["Επεξεργασία"],
        "ceo": ["Insights", "Reports"],
        "cfo": ["Insights"]
    };

    const extraButtons = roleButtons[role.toLowerCase()];
    if (extraButtons) {
        extraButtons.forEach(text => {
            const btn = document.createElement("button");
            btn.textContent = text;
            sidebar.appendChild(btn);
        });
    }
}

const userRole = localStorage.getItem("userRole") || "";
generateMenu(userRole);
