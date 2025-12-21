document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("snow-container");
    const COUNT = 100; // ❄ тоо

    for (let i = 0; i < COUNT; i++) {
        const flake = document.createElement("span");
        flake.className = "snowflake";
        flake.innerHTML = "&#10052;"; // ❄ U+2744

        const size = Math.random() * 7 + 20; // 🔥 томруулах
        const left = Math.random() * 100;
        const fallDur = Math.random() * 8 + 6;
        const swayDur = Math.random() * 4 + 3;
        const delay = Math.random() * -20;

        flake.style.left = left + "vw";
        flake.style.fontSize = size + "px";
        flake.style.animationDuration = `${fallDur}s, ${swayDur}s`;
        flake.style.animationDelay = `${delay}s, ${delay}s`;
        flake.style.opacity = Math.random() * 0.5 + 0.5;

        container.appendChild(flake);
    }
});
