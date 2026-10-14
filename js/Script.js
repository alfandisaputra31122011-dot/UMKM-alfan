
// MENU NAVIGASI HP
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    const menuTerbuka = navMenu.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(menuTerbuka)
    );

    menuToggle.textContent = menuTerbuka ? "✕" : "☰";
});

// TUTUP MENU SETELAH LINK DIPILIH
navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// TAHUN OTOMATIS DI FOOTER
document.getElementById("year").textContent =
    new Date().getFullYear();
