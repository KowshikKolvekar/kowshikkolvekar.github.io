function openTab(evt, tabName) {
    // Hide all content sections
    document.querySelectorAll(".tab-content").forEach(section => {
        section.classList.remove("active");
    });

    // Remove 'active' class from all buttons
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    // Show the selected tab and add 'active' class to button
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}