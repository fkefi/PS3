function generateMenu(role) {
    const sidebar = document.querySelector(".sidebar");
    if (!sidebar) return; // Exit if no sidebar found
    
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
            } else if (text === "Profile") {
                // Add profile page navigation if needed
            }
        };
        sidebar.appendChild(btn);
    });

    // Κουμπιά ανά ρόλο
    const roleButtons = {
        "tamio": [
            { text: "Χειροκίνητη Καταγραφή", href: "xeirokinitiEisagwgiApokomma.html" },
            { text: "Επεξεργασία Συναλλαγών", href: "epituxia.html" }
        ],
        "logistirio": [
            { text: "Επεξεργασία", href: "epituxia.html" }
        ],
        "info": [
            { text: "Επεξεργασία", href: "epituxia.html" },
            { text: "Insights", href: "insights.html" }
        ],
        "ceo": [
            { text: "Insights", href: "insights.html" },
            { text: "Reports", href: "reports.html" }
        ],
        "cfo": [
            { text: "Insights", href: "insights.html" }
        ]
    };

    const extraButtons = roleButtons[role.toLowerCase()];
    if (extraButtons) {
        extraButtons.forEach(item => {
            const btn = document.createElement("button");
            btn.textContent = item.text;
            btn.onclick = () => {
                window.location.href = item.href;
            };
            sidebar.appendChild(btn);
        });
    }
}

// Check if user is logged in
document.addEventListener('DOMContentLoaded', function() {
    const userRole = localStorage.getItem("userRole");
    if (!userRole && !window.location.href.includes('login.html')) {
        window.location.href = "login.html";
    } else {
        generateMenu(userRole);
    }
});
