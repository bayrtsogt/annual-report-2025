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
    const ctx = document.getElementById("progressChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "1.1 Тоног төхөөрөмжийн",
                "1.4 Компьютер техник",
                "1.5 Аж ахуйн эд хогшил",
                "3.1 Тоног төхөөрөмжийн",
                "4. БУСАД",
            ],
            datasets: [
                {
                    label: "100%",
                    data: [7, 11, 5, 8, 3],
                    backgroundColor: "#4caf50"
                },
                {
                    label: "75%",
                    data: [0, 0, 0, 1, 2],
                    backgroundColor: "#ffc107"
                },
                {
                    label: "50%",
                    data: [0, 0, 0, 0, 0],
                    backgroundColor: "#ff9800"
                },
                {
                    label: "0%",
                    data: [1, 0, 0, 3, 0],
                    backgroundColor: "#f44336"
                }
            ]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        autoSkip: false,
                        maxRotation: 0,
                        minRotation: 0,
                        font: {
                            size: window.innerWidth <= 768 ? 10 : 12
                        },
                        callback: function (value) {
                            const label = this.getLabelForValue(value);
                            return label.split(" "); // 🔥 үг бүрийг шинэ мөр болгоно
                        }
                    }
                }
            },
            plugins: {
                datalabels: {
                    display: (context) => {
                        // 🔥 утас (≤768px) дээр нуух
                        if (window.innerWidth <= 768) return false;

                        const value = context.dataset.data[context.dataIndex];
                        return value > 0; // 0 бол desktop дээр ч нуух
                    },
                    anchor: "end",   // баганын дээр
                    align: "top",
                    offset: 4,
                    color: "#000",
                    font: {
                        weight: "bold",
                        size: 12
                    },
                    formatter: (value) => value
                }
            },
            datasets: {
                bar: {
                    categoryPercentage: window.innerWidth <= 768 ? 0.6 : 0.8,
                    barPercentage: window.innerWidth <= 768 ? 0.6 : 0.9
                }
            }
        },
        // options: {
        //     responsive: true,
        //     maintainAspectRatio: false,
        //
        //     scales: {
        //         x: {
        //             ticks: {
        //                 maxRotation: 0,
        //                 minRotation: 0,
        //                 autoSkip: false,
        //                 font: {
        //                     size: window.innerWidth < 768 ? 10 : 12
        //                 }
        //             }
        //         },
        //         y: {
        //             beginAtZero: true,
        //             ticks: {
        //                 stepSize: 10
        //             }
        //         }
        //     },
        //
        //     plugins: {
        //         legend: {
        //             position: "bottom",
        //             labels: {
        //                 boxWidth: 14,
        //                 font: {
        //                     size: 12
        //                 }
        //             }
        //         }
        //     }
        // },
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
                    label: "2025 гүйцэтгэл (сая ₮)",
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
                    label: "2025 төлөвлөгөө (сая ₮)",
                    data: [
                        3221679900.00,
                        64755100.00,
                        3868000.00,
                        263198400.00,
                        201883600.00,
                        21487200.00,
                        "",
                        3400000.00,
                        1507818900.00
                    ],
                    backgroundColor: "#8fd04f"
                },
                {
                    label: "Хэмнэлт хэтрэлт (сая ₮)",
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
                    position: "bottom",
                },
                datalabels: {
                    display: (context) => {
                        return window.innerWidth > 768;
                    },
                    rotation: -90,
                    anchor: "end",
                    align: "end",
                    font: {
                        weight: "bold",
                        size: 11
                    },
                    formatter: (value) => {
                        if (!value || value === "") return "";

                        const million = value / 1_000_000;
                        const fixed = million.toFixed(2); // "2823.34"

                        const [intPart, decimalPart] = fixed.split(".");

                        // 🔥 мянгын тусгаарлагчийг . болгох
                        const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

                        return `${formattedInt}.${decimalPart}`;
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: (value) => {
                            return (value / 1_000_000).toLocaleString();
                        }
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
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("open");
        document.body.classList.toggle("menu-open");
        toggle.textContent = menu.classList.contains("open") ? "✕" : "☰";
    });

    menu.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
            menu.classList.remove("open");
            document.body.classList.remove("menu-open");
            toggle.textContent = "☰";
        });
    });
});
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".dropdown");

dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("open");
});

// гадна дархад хаагдана
document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
    }
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
document.querySelectorAll(".node").forEach(node => {
    node.addEventListener("click", (e) => {
        e.stopPropagation(); // эцэг node руу дамжуулахгүй

        const li = node.closest("li");
        if (!li) return;

        // тухайн node-ийн яг доорх хүүхэд ul
        const children = li.querySelectorAll(":scope > ul");
        if (!children.length) return;

        // open / close
        const isOpen = li.classList.contains("open");

        children.forEach(ul => {
            ul.style.display = isOpen ? "none" : "block";
        });

        li.classList.toggle("open", !isOpen);
        node.classList.toggle("expanded", !isOpen);
    });
});
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

