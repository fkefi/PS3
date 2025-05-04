// Define role-specific buttons
const roleButtons = {
    "tamias": ["Χειροκίνητη Καταγραφή", "Επεξεργασία Συναλλαγών"],
    "logistis": ["Επεξεργασία", "Insights"],
    "voithos_logisti": ["Επεξεργασία"],
    "ceo": ["Insights", "Reports"],
    "cfo": ["Insights"]
};

// Function to generate menu based on user role
function generateMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    const userRole = localStorage.getItem('userRole');
    if (!userRole) return;

    // Clear existing menu
    sidebar.innerHTML = '';

    // Add constant buttons: Log Out and Profile
    const profileButton = document.createElement('button');
    profileButton.textContent = "Profile";
    profileButton.onclick = function() {
        window.location.href = "profile.html"; // Αντίστοιχη σελίδα προφίλ
    };
    sidebar.appendChild(profileButton);

    const logoutButton = document.createElement('button');
    logoutButton.textContent = "Log Out";
    logoutButton.onclick = function() {
        // Καθαρισμός του localStorage και επιστροφή στη σελίδα σύνδεσης
        localStorage.removeItem('userRole');
        window.location.href = "login.html"; // Σελίδα σύνδεσης
    };
    sidebar.appendChild(logoutButton);

    // Add role-specific buttons
    const buttons = roleButtons[userRole] || [];
    buttons.forEach(buttonText => {
        const button = document.createElement('button');
        button.textContent = buttonText;
        button.onclick = function() {
            // Add navigation logic here based on button text
            switch(buttonText) {
                case "Χειροκίνητη Καταγραφή":
                    window.location.href = "xeirokinitiEisagwgiApokomma.html";
                    break;
                case "Επεξεργασία Συναλλαγών":
                    window.location.href = "epitropi.html";
                    break;
                case "Επεξεργασία":
                    window.location.href = "epitropi.html";
                    break;
                case "Insights":
                    window.location.href = "insights.html";
                    break;
                case "Reports":
                    window.location.href = "reports.html";
                    break;
            }
        };
        sidebar.appendChild(button);
    });
}

// Generate menu when the page loads
document.addEventListener('DOMContentLoaded', generateMenu);
