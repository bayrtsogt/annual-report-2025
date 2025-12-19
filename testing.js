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
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("expenseChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Боловсон хүч",
                "Материал",
                "Ашиглалт",
                "Засвар үйлчилгээ",
                "Албан хэрэгцээ",
                "ХАБЭА",
                "Лабораторийн зардал",
                "Бусад",
                "Элэгдэл"
            ],
            datasets: [
                {
                    label: "2025 гүйцэтгэл",
                    data: [
                        2823343987.69,
                        39595426.28,
                        1102500,
                        242695532.02,
                        183487383.30,
                        25810136.26,
                        "",
                        826666.66,
                        1377380952.56
                    ],
                    backgroundColor: "#9cc9ee"
                },
                {
                    label: "2025 төлөвлөгөө",
                    data: [
                        3221679900,
                        64755100,
                        3868000,
                        263198400,
                        201883600,
                        21487200,
                        "",
                        3400000,
                        1507818900
                    ],
                    backgroundColor: "#8fd04f"
                },
                {
                    label: "Хэмнэлт хэтрэлт",
                    data: [
                        309045488,
                        13434441,
                        3868000,
                        176000,
                        39227298,
                        9664720,
                        2833558,
                        "",
                        573333,
                        80506899
                    ],
                    backgroundColor: "#8fd04f"
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom"
                },
                datalabels: {
                    anchor: "end",
                    align: "top",
                    color: "#333",
                    font: {
                        weight: "bold",
                        size: 11
                    },
                    formatter: (value) => {
                        return value.toLocaleString() + " ₮";
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: (value) => value.toLocaleString() + " ₮"
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("pieExpense");

    const dataValues = [
        2823343987.69,
        39595426.28,
        1102500,
        242695532.02,
        183487383.30,
        25810136.26,
        826666.66,
        1377380952.56
    ];

    const total = dataValues.reduce((a, b) => a + b, 0);

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: [
                "Боловсон хүчний зардал",
                "Материаллаг зардал",
                "Ашиглалтын зардал",
                "Засвар үйлчилгээний зардал",
                "Албан хэрэгцээний зардал",
                "Хөдөлмөр хамгааллын зардал",
                "Бусад зардал",
                "Элэгдлийн зардал"
            ],
            datasets: [{
                data: dataValues,
                backgroundColor: [
                    "#f28c38", // orange
                    "#f1c232", // yellow
                    "#6aa84f", // green
                    "#b45f06", // brown
                    "#7f6000",
                    "#38761d",
                    "#ffd966",
                    "#93c47d"
                ],
                borderWidth: 2,
                borderColor: "#fff"
            }]
        },
        datalabels: {
            color: "#333",
            anchor: "end",
            align: "end",
            offset: 10,
            formatter: (value, ctx) => {
                const data = ctx.chart.data.datasets[0].data;
                const total = data.reduce((a, b) => a + b, 0);
                const percent = (value / total) * 100;
                return percent.toFixed(0) + "%";
            }
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "right"
                },
                title: {
                    display: true,
                    text: "Зардлын гүйцэтгэл ХБГ"
                },
                datalabels: {
                    color: "#fff",
                    font: {
                        weight: "bold",
                        size: 13
                    },
                    formatter: (value) => {
                        const percent = (value / total * 100).toFixed(0);
                        return percent + "%";
                    }
                },
                tooltip: {
                    callbacks: {
                        label: (ctx) => {
                            const val = ctx.parsed;
                            const percent = (val / total * 100).toFixed(1);
                            return `${ctx.label}: ${val.toLocaleString()} ₮ (${percent}%)`;
                        }
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