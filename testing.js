document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("huis");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Эрэгтэй", "Эмэгтэй"],
            datasets: [
                {
                    label: "Хүн ам",
                    data: [44, 7],
                    backgroundColor: ["#9cc9ee", "#8fd04f"]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: "Хүйс"
                },
                datalabels: {
                    color: "#333",
                    anchor: "end",
                    align: "top",
                    font: {
                        weight: "bold",
                        size: 16
                    },
                    formatter: (value) => value
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 16
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("nas");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["18-25", "26-35", "36-45", "46-с дээш"],
            datasets: [
                {
                    label: "Хүн ам",
                    data: [7, 19, 22, 3],
                    backgroundColor: ["#9cc9ee", "#8fd04f"]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: "Насны ангилал"
                },
                datalabels: {
                    color: "#333",
                    anchor: "end",
                    align: "top",
                    font: {
                        weight: "bold",
                        size: 16
                    },
                    formatter: (value) => value
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 16
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("surgalt");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Засварчны", "Төлөвлөгөөт", "ХАБЭА", "Ажиллах зөвшөөрөл", "Удирдах ажилтны", "Нийт"],
            datasets: [
                {
                    label: "Сургалт",
                    data: [7, 27, 1, 10, 1, 46],
                    backgroundColor: ["#9cc9ee", "#8fd04f"]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: "Сургалт"
                },
                datalabels: {
                    color: "#333",
                    anchor: "end",
                    align: "top",
                    font: {
                        weight: "bold",
                        size: 16
                    },
                    formatter: (value) => value
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 16
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});
// Animated counters
const counters = document.querySelectorAll('.counter');
const speed = 150;

const runCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const updateCount = () => {
        const count = +counter.innerText;
        const inc = Math.max(1, Math.floor(target / speed));
        if (count < target) {
            counter.innerText = count + inc;
            requestAnimationFrame(updateCount);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
};

// Animate on scroll
const scrollElements = document.querySelectorAll(".animate-on-scroll, .animate-card");
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            if (entry.target.classList.contains('stat-box')) {
                const num = entry.target.querySelector('.counter');
                if (num && !num.dataset.started) {
                    num.dataset.started = "true";
                    runCounter(num);
                }
            }
            obs.unobserve(entry.target);
        }
    });
}, {threshold: 0.15});

scrollElements.forEach(el => observer.observe(el));

// Carousel
let index = 0;
const carousel = document.querySelector(".carousel");
const totalSlides = carousel.children.length;

const goToSlide = (i) => {
    index = (i + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(-${index * 100}%)`;
};

document.getElementById("nextBtn").addEventListener("click", () => {
    goToSlide(index + 1);
});

document.getElementById("prevBtn").addEventListener("click", () => {
    goToSlide(index - 1);
});

setInterval(() => {
    goToSlide(index + 1);
}, 6000);

// Charts
window.addEventListener('load', () => {
    const uptimeCtx = document.getElementById('uptimeChart').getContext('2d');
    new Chart(uptimeCtx, {
        type: 'line',
        data: {
            labels: ['I улирал', 'II улирал', 'III улирал', 'IV улирал'],
            datasets: [{
                label: 'Uptime %',
                data: [95.2, 96.1, 96.4, 96.8],
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 3
            }]
        },
        options: {
            responsive: true,
            plugins: {legend: {display: false}},
            scales: {
                y: {beginAtZero: false, min: 94, max: 100}
            }
        }
    });

    const projectCtx = document.getElementById('projectChart').getContext('2d');
    new Chart(projectCtx, {
        type: 'bar',
        data: {
            labels: ['SCADA', 'Програм', 'Инфра', 'Мобайл'],
            datasets: [{
                label: 'Төслийн тоо',
                data: [6, 4, 5, 3],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {legend: {display: false}},
            scales: {
                y: {beginAtZero: true, ticks: {stepSize: 1}}
            }
        }
    });
});