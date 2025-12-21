document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // 🎨 Нэгдсэн хөх палитр
    // =========================
    const bluePalette = [
        "#0d47a1",
        "#1565c0",
        "#1976d2",
        "#1e88e5",
        "#42a5f5",
        "#4fc3f7",
        "#81d4fa",
        "#b3e5fc"
    ];

    // =========================
    // 👥 Хүйс – Doughnut
    // =========================
    new Chart(document.getElementById("huis"), {
        type: "doughnut",
        data: {
            labels: ["Эрэгтэй", "Эмэгтэй"],
            datasets: [{
                data: [44, 7],
                backgroundColor: ["#1976d2", "#4fc3f7"],
                borderColor: "#fff",
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: "bottom" },
                datalabels: {
                    color: "#fff",
                    font: { weight: "bold" },
                    formatter: (v, ctx) => {
                        const total = ctx.chart.data.datasets[0].data.reduce((a,b)=>a+b,0);
                        return Math.round(v / total * 100) + "%";
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });

    // =========================
    // 🎂 Нас – Bar
    // =========================
    new Chart(document.getElementById("nas"), {
        type: "bar",
        data: {
            labels: ["18-25", "26-35", "36-45", "46-с дээш"],
            datasets: [{
                label: "Хүн ам",
                data: [7, 19, 22, 3],
                backgroundColor: bluePalette[3]
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: { display: false },
                datalabels: {
                    color: "#0d47a1",
                    anchor: "end",
                    align: "top"
                }
            },
            scales: {
                y: { beginAtZero: true }
            }
        },
        plugins: [ChartDataLabels]
    });

    // =========================
    // 📚 Сургалт – Horizontal bar
    // =========================
    new Chart(document.getElementById("surgalt"), {
        type: "bar",
        data: {
            labels: ["Засварчны", "Төлөвлөгөөт", "ХАБЭА", "Ажиллах зөвшөөрөл", "Удирдах", "Нийт"],
            datasets: [{
                label: "Сургалт",
                data: [7, 27, 1, 10, 1, 46],
                backgroundColor: bluePalette[5]
            }]
        },
        options: {
            indexAxis: 'y',
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: { display: false },
                datalabels: {
                    color: "#0d47a1",
                    anchor: "end",
                    align: "right"
                }
            },
            scales: {
                x: { beginAtZero: true }
            }
        },
        plugins: [ChartDataLabels]
    });

    // =========================
    // 💰 Зардал – Grouped bar
    // =========================
    new Chart(document.getElementById("expenseChart"), {
        type: "bar",
        data: {
            labels: [
                "Боловсон хүч",
                "Материал",
                "Ашиглалт",
                "Засвар үйлчилгээ",
                "Албан хэрэгцээ",
                "ХАБЭА",
                "Лаборатори",
                "Бусад",
                "Элэгдэл"
            ],
            datasets: [
                {
                    label: "Төлөвлөгөө",
                    data: [
                        3221679900.00,
                        64755100.00,
                        3868000.00,
                        263198400.00,
                        201883600.00,
                        21487200.00,
                        0,
                        3400000.00,
                        1507818900.00
                    ],
                    backgroundColor: bluePalette[2],
                },
                {
                    label: "Гүйцэтгэл",
                    data: [
                        2823343987.69,
                        39595426.28,
                        1102500,
                        242695532.02,
                        183487383.30,
                        25810136.26,
                        0,
                        826666.66,
                        1377380952.56
                    ],
                    backgroundColor: bluePalette[5]
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: { position: "bottom" },
                datalabels: { display: false }
            },
        },
        plugins: [ChartDataLabels]
    });

    // =========================
    // 🥧 Зардлын бүтэц – Pie
    // =========================
    const pieValues = [
        2823343987.69,
        39595426.28,
        1102500,
        242695532.02,
        183487383.30,
        25810136.26,
        826666.66,
        1377380952.56
    ];
    const pieTotal = pieValues.reduce((a,b)=>a+b,0);

    new Chart(document.getElementById("pieExpense"), {
        type: "pie",
        data: {
            labels: [
                "Боловсон хүч",
                "Материал",
                "Ашиглалт",
                "Засвар",
                "Албан хэрэгцээ",
                "ХАБЭА",
                "Бусад",
                "Элэгдэл"
            ],
            datasets: [{
                data: pieValues,
                backgroundColor: bluePalette
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: "right" },
                title: { display: true, text: "Зардлын бүтэц" },
                datalabels: {
                    color: "#fff",
                    font: { weight: "bold" },
                    formatter: v => Math.round(v / pieTotal * 100) + "%"
                }
            }
        },
        plugins: [ChartDataLabels]
    });

    // =========================
    // 📊 Гүйцэтгэл – Stacked bar
    // =========================
    new Chart(document.getElementById("progressChart"), {
        type: "bar",
        data: {
            labels: [
                "1.1 Тоног",
                "1.4 Компьютер",
                "1.5 Эд хогшил",
                "3.1 Засвар",
                "4. Бусад"
            ],
            datasets: [
                { label: "100%", data: [7,11,5,8,3], backgroundColor: bluePalette[2] },
                { label: "75%",  data: [0,0,0,1,2], backgroundColor: bluePalette[4] },
                { label: "0%",   data: [1,0,0,3,0], backgroundColor: bluePalette[6] }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: "bottom" },
                title: { display: true, text: "Хөрөнгө оруулалтын гүйцэтгэл" },
                datalabels: {
                    color: "#0d47a1",
                    formatter: v => v > 0 ? v : ""
                }
            },
            scales: {
                x: { stacked: true },
                y: { stacked: true, beginAtZero: true }
            }
        },
        plugins: [ChartDataLabels]
    });

    const content = document.querySelector(".content");
    const sidebar = document.querySelector(".sidebar-menu");

    if (!content || !sidebar) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sidebar.classList.add("show");
            }else {
                sidebar.classList.remove("show");
            }
        });
    }, {
        threshold: 0.1
    });


    observer.observe(content);
    // =========================
// 📌 Sidebar Scroll Spy + Click
// =========================
    const menuItems = document.querySelectorAll(".sidebar-menu li");
    const sections = Array.from(menuItems)
        .map(item => document.getElementById(item.dataset.target))
        .filter(Boolean);

// 👉 Click хийхэд тухайн section рүү scroll
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetId = item.dataset.target;
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

// 👉 Scroll хийхэд active section тодорхойлох
    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                menuItems.forEach(item => {
                    item.classList.toggle("selected", item.dataset.target === id);
                });
            }
        });
    }, {
        root: null,
        threshold: 0   // section-ийн ~40% орж ирэхэд active
    });

// sections-уудыг ажиглах
    sections.forEach(sec => spyObserver.observe(sec));

});