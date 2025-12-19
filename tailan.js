const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbClose = document.getElementById("lbClose");

document.querySelectorAll(".r-thumb").forEach(img => {
    img.addEventListener("click", () => {
        lbImg.src = img.src;
        lb.style.display = "grid";
        lb.setAttribute("aria-hidden", "false");
    });
});

// ===== ORG TREE NODE TOGGLE =====
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("hab");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Анхан шатны",
                "2-р шатны",
                "Явцын",
                "Удирдлагаас өгсөн даалгавар",
                "Хийгдсэн үзлэг шалгалт",
                "Үзлэг шалгалтад хамрагдсан нийт ажилтан",
                "Илэрсэн зөрчил, дутагдал /аюул/"
            ],
            datasets: [
                {
                    label: "Тоо хэмжээ",
                    data: [184, 51, 15, 6, 202, 51, 7],
                    backgroundColor: [
                        "#4f5d75",
                        "#9fa2b2",
                        "#f2c94c",
                        "#6c63ff",
                        "#2d3142",
                        "#8d99ae",
                        "#f2994a"
                    ],
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                datalabels: {
                    anchor: "end",
                    align: "top",
                    font: {
                        weight: "bold",
                        size: 12
                    },
                    formatter: (value) => value
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Тоо"
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 30,
                        minRotation: 30
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".hero-block").forEach(block => {
        const hero = block.querySelector(".r-hero");
        const detail = block.querySelector(".hero-detail");
        const hint = block.querySelector(".hero-hint");

        if (!hero || !detail) {
            console.warn("Missing hero or detail", block);
            return;
        }

        hero.addEventListener("click", () => {
            const isOpen = detail.classList.contains("open");

            // бусад хэсгийг хаана
            document.querySelectorAll(".hero-detail.open").forEach(d => {
                if (d !== detail) {
                    d.classList.remove("open");
                    d.closest(".hero-block")
                        ?.querySelector(".r-hero")
                        ?.classList.remove("compact");
                }
            });

            detail.classList.toggle("open", !isOpen);
            hero.classList.toggle("compact", !isOpen);

            if (hint) {
                hint.textContent = isOpen
                    ? "Дэлгэрэнгүй харах ↓"
                    : "Буцах ↑";
            }

            console.log("Toggled:", !isOpen); // 🔎 шалгах лог
        });
    });
});
const ctx = document.getElementById('workChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Компьютер формат',
            'Программын тохиргоо',
            'Принтер, тохиргоо',
            'Сүлжээ тохиргоо',
            'Гэмтлийн акт',
            'Цаг бүртгэл',
            'E-doc',
            'ERP тохиргоо'
        ],
        datasets: [
            {
                label: '2024 он',
                data: [89, 242, 216, 141, 158, 121, 11, 216],
                backgroundColor: '#9cc9ee'
            },
            {
                label: '2025 он',
                data: [163, 469, 270, 221, 169, 211, 70, 370],
                backgroundColor: '#8fd04f'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {position: 'bottom'},

            // 🔥 ЭНЭ ХЭСЭГ
            datalabels: {
                color: '#333',
                anchor: 'end',
                align: 'end',
                font: {
                    weight: 'bold',
                    size: 12
                },
                formatter: (value) => value
            }
        },
        scales: {
            y: {beginAtZero: true}
        }
    },
    plugins: [ChartDataLabels] // 🔥 заавал
});

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("callChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Сүлжээний ажил",
                "Шилэн кабел",
                "Дотоод дуудлага",
                "ХУТ-өөс ирсэн дуудлага",
                "Бусад (камер, компьютер)",
                "Үзлэг үйлчилгээ",
                "Нийт"
            ],
            datasets: [
                {
                    label: "2024 он",
                    data: [38, 99, 46, 24, 15, 0, 222],
                    backgroundColor: "#9cc9ee"
                },
                {
                    label: "2025 он",
                    data: [13, 106, 8, 11, 8, 152, 298],
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
                title: {
                    display: true,
                    text: "Дуудлага барагдуулалт"
                },
                datalabels: {
                    color: "#333",
                    anchor: "end",
                    align: "end",
                    font: {
                        weight: "bold",
                        size: 12
                    },
                    formatter: (value) => value
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 50
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("callTypeChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Сүлжээний ажил",
                "Шилэн кабель",
                "Дотоод дуудлага",
                "ХҮТ-ээс ирсэн дуудлага",
                "Бусад (камер, компьютер)",
                "Үзлэг үйлчилгээ"
            ],
            datasets: [{
                label: "2025 он",
                data: [38, 106, 46, 11, 8, 76],
                backgroundColor: "#4f78c4"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: "Дуудлага барагдуулалт (ажлын төрлөөр)"
                },
                legend: {display: false},
                datalabels: {
                    anchor: "end",
                    align: "end",
                    color: "#000",
                    font: {weight: "bold"}
                }
            },
            scales: {
                y: {beginAtZero: true}
            }
        },
        plugins: [ChartDataLabels]
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("galleryTrack");

    // анхны зургуудыг clone хийж нэмнэ
    const images = Array.from(track.children);
    images.forEach(img => {
        const clone = img.cloneNode(true);
        track.appendChild(clone);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("monthlyCallChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "1 сар", "2 сар", "3 сар", "4 сар", "5 сар", "6 сар",
                "7 сар", "8 сар", "9 сар", "10 сар", "11 сар", "12 сар"
            ],
            datasets: [{
                label: "Шилэн кабель – дуудлага барагдуулалт",
                data: [5, 5, 3, 19, 10, 6, 11, 15, 10, 10, 12, 0],
                backgroundColor: "#7cb342"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: "Шилэн кабель – гэмтэл саатал, дуудлага барагдуулалт"
                },
                legend: {display: false},
                datalabels: {
                    anchor: "center",
                    align: "center",
                    color: "#000",
                    font: {weight: "bold"}
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {stepSize: 2}
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("serviceChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Үүдний програм гацалт",
                "Камер засвар",
                "Акт",
                "Машиний дугаар таниулалт",
                "Дис дуудлага",
                "Үзлэг үйлчилгээ",
                "Бохир цэг",
                "Албан бичиг",
                "Камер шүүх",
                "Нийт"
            ],
            datasets: [
                {
                    label: "2024 он",
                    data: [59, 34, 151, 34, 21, 84, 11, 41, 82, 483],
                    backgroundColor: "#9cc9ee"
                },
                {
                    label: "2025 он",
                    data: [76, 68, 23, 508, 56, 92, 26, 22, 31, 394],
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
                title: {
                    display: true,
                    text: "Дуудлага барагдуулалт"
                },
                datalabels: {
                    color: "#333",
                    anchor: "end",
                    align: "end",
                    font: {
                        weight: "bold",
                        size: 12
                    },
                    formatter: (value) => value
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 50
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("holboocan");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Шинээр дугаар авах",
                "Заавар зөвлөгөө",
                "Засвар угсралт",
            ],
            datasets: [
                {
                    label: "2024 он",
                    data: [53, 3, 71],
                    backgroundColor: "#9cc9ee"
                },
                {
                    label: "2025 он",
                    data: [5, 5, 45],
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
                title: {
                    display: true,
                    text: "Дуудлага барагдуулалт"
                },
                datalabels: {
                    color: "#333",
                    anchor: "end",
                    align: "end",
                    font: {
                        weight: "bold",
                        size: 12
                    },
                    formatter: (value) => value
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 50
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("lanChart");
    if (!ctx) return;

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Цаг бүртгэлийн төхөөрөмж",
                "Компьютер",
                "Принтер",
                "Нэвтрэх төхөөрөмж"
            ],
            datasets: [{
                label: "2025 он",
                data: [53, 490, 86, 22],
                backgroundColor: [
                    "#4f78c4",
                    "#7cb342",
                    "#f28c38",
                    "#9c755f"
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {display: false},
                datalabels: {
                    color: "#000",
                    anchor: "end",
                    align: "end",
                    font: {weight: "bold", size: 12}
                }
            },
            scales: {
                y: {beginAtZero: true}
            }
        },
        plugins: [ChartDataLabels]
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("bigChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Сервер, VPN, Компани тохиргоо",
                "Компани эрх болон файл сэргээх",
                "Дотоод мессенжер тохиргоо", "Автоматжуулалтын тохиргоо",
                "Программ хангамж тохиргоо",
                "Вэб сайт, мэдээлэл байршуулалт",
                "Шинэ дансанд мэдээлэл байршуулалт",
                "Арга хэмжээний зураг авалт", "Арга хэмжээний дүрс бичлэг",
                "Дүрс бичлэг эвдрэл,постер, мэдээ эх бэлтгэл",
                "Үзлэг үйлчилгээ, Нөөцлөлт, Сэргээх"
            ],
            datasets: [
                {
                    label: "2024",
                    data: [238, 19, 33, 32, 27, 76, 210, 104, 110, 55, 45, 83, 48, 67, 0, 0, 0],
                    backgroundColor: "#9cc9ee",
                    barThickness: 16
                },
                {
                    label: "2025",
                    data: [151, 166, 48, 27, 24, 13, 79, 27, 46, 88, 188, 109, 105, 107, 80, 125, 91, 93, 27, 47],
                    backgroundColor: "#8fd04f",
                    barThickness: 16
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {top: 30, bottom: 40}   // 🔴 тоо тасрахгүй
            },
            plugins: {
                legend: {
                    labels: {color: "#f80e0e"}
                },
                datalabels: {
                    color: "rgba(189,0,0,0.84)",
                    anchor: "end",
                    align: "end",
                    offset: 2,
                    clip: false,                    // 🔴 маш чухал
                    formatter: (v) => v > 0 ? v : "",
                    font: {weight: "bold", size: 10}
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#ccc",
                        autoSkip: false,               // 🔴 бүгд гарна
                        maxRotation: 60,
                        minRotation: 60
                    },
                    grid: {display: false}
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#ccc",
                        precision: 0
                    },
                    grid: {color: "#ffffff"}
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("simpleChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Гэмтлийн акт",
                "Хяналт удирдлагын төвөөс ирсэн дуудлага ",
                "Программ тохиргоо",
                "Автоматик",
                "Засвар үйлчилгээ",
                "Сүлжээний тохиргоо",
                "Бусад"
            ],
            datasets: [
                {
                    label: "2024",
                    data: [32, 28, 41, 307, 26, 19, 33],
                    backgroundColor: "#9cc9ee"
                },
                {
                    label: "2025",
                    data: [24, 31, 48, 276, 22, 15, 29],
                    backgroundColor: "#8fd04f"
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {top: 20}
            },
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        color: "#000000",
                        boxWidth: 14
                    }
                },
                datalabels: {
                    color: "#000",
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    padding: 4,
                    anchor: "end",
                    align: "end",
                    font: {
                        weight: "bold",
                        size: 12
                    },
                    formatter: v => v
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#ccc"
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#ccc"
                    },
                    grid: {
                        color: "#000000"
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".video-box1");
    if (video) {
        video.playbackRate = 6;
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("statusChart");

    new Chart(ctx, {
        type: "pie",

        data: {
            labels: [
                "Ажиллахгүй байгаа",
                "Хэвийн ажиллагаатай",
                "Түр салгасан"
            ],
            datasets: [{
                data: [4, 64, 5],
                backgroundColor: [
                    "#8BC34A", // ногоон
                    "#F4C430", // шар
                    "#E53935"  // улаан
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: "2025",
                    color: "#000000",
                    font: {size: 28, weight: "bold"},
                    padding: {bottom: 20}
                },
                legend: {
                    position: "bottom",
                    labels: {
                        color: "#131313",
                        font: {size: 14}
                    }
                },
                datalabels: {
                    color: "#000",
                    font: {
                        size: 16,
                        weight: "bold"
                    },
                    formatter: (value) => value
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("tele");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Модем / мэдээлэл гацах",
                "Тохиргоо",
                "Хуваарийн дагуу\nүзлэг шалгалт",
                "Акт"
            ],
            datasets: [{
                label: "Дуудлага барагдуулалт",
                data: [22, 49, 179, 3],
                backgroundColor: [
                    "#E6FF00", // шар
                    "#9cc9ee", // цэнхэр
                    "#8fd04f", // ягаан
                    "#92D050"  // ногоон
                ],
                barThickness: 42
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {top: 30}
            },
            plugins: {
                title: {
                    display: true,
                    text: "2025 оны үзлэг үйлчилгээний график",
                    color: "#aaa",
                    font: {size: 20, weight: "bold"},
                    padding: {bottom: 20}
                },
                legend: {
                    display: false
                },
                datalabels: {
                    color: "#000000",
                    anchor: "end",
                    align: "end",
                    font: {
                        size: 16,
                        weight: "bold"
                    },
                    formatter: v => v
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#aaa",
                        font: {size: 12}
                    },
                    grid: {
                        color: "#333"
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#aaa",
                        stepSize: 20
                    },
                    grid: {
                        color: "#333"
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("vehicleChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Түлшний огцом багасалт",
                "Гэмтлийн акт",
                "Төхөөрөмжийн гацалт",
                "Дуудлага",
                "GPS-тохиргоо",
                "Засвар үйлчилгээ",
                "Хуваарьт үзлэг"
            ],
            datasets: [
                {
                    label: "2024",
                    data: [88, 55, 20, 26, 5, 0, 8],
                    backgroundColor: "#9cc9ee"
                },
                {
                    label: "2025",
                    data: [128, 52, 14, 23, 5, 2, 13],
                    backgroundColor: "#8fd04f"
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {top: 20}
            },
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        color: "#000000",
                        boxWidth: 14
                    }
                },
                datalabels: {
                    color: "#000",
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    padding: 4,
                    anchor: "end",
                    align: "end",
                    font: {
                        weight: "bold",
                        size: 12
                    },
                    formatter: v => v
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#ccc"
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#ccc"
                    },
                    grid: {
                        color: "#000000"
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("hBarChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Хуваарьт үзлэг",
                "Засвар үйлчилгээ",
                "Тохиргоо",
                "Акт"
            ],
            datasets: [
                {
                    label: "2024",
                    data: [242, 182, 49, 16],
                    backgroundColor: "#9cc9ee"
                },
                {
                    label: "2025",
                    data: [442, 183, 9, 9],
                    backgroundColor: "#8fd04f"
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {top: 20}
            },
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        color: "#000000",
                        boxWidth: 14
                    }
                },
                datalabels: {
                    color: "#000",
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    padding: 4,
                    anchor: "end",
                    align: "end",
                    font: {
                        weight: "bold",
                        size: 12
                    },
                    formatter: v => v
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#ccc"
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#ccc"
                    },
                    grid: {
                        color: "#000000"
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("us");

    Chart.register(ChartDataLabels);

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Гэмтлийн акт",
                "ХУТ-с ирсэн дуудлага",
                "Програм тохиргоо",
                "Автоматик",
                "Засвар үйлчилгээ",
                "Сүлжээний тохиргоо",
                "Бусад"
            ],
            datasets: [
                {
                    label: "2024",
                    data: [47, 53, 6, 284, 18, 7, 15],
                    backgroundColor: "#9cc9ee",
                    barThickness: 28
                },
                {
                    label: "2025",
                    data: [66, 26, 8, 177, 20, 9, 18],
                    backgroundColor: "#8fd04f",
                    barThickness: 28
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {top: 30}
            },
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        color: "#ccc",
                        boxWidth: 14
                    }
                },
                datalabels: {
                    color: "#000",
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    padding: 4,
                    anchor: "end",
                    align: "end",
                    formatter: v => v,
                    font: {
                        weight: "bold",
                        size: 12
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#ccc"
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#ccc"
                    },
                    grid: {
                        color: "#333"
                    }
                }
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("summaryChart");
    Chart.register(ChartDataLabels);

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Бага оврийн станц", "ИЛНС", "ТҮНС", "ЮВ",
                "БС", "ШЗНС", "ХЗНС", "ЛУБ",
                "АС", "Өргөх станц", "Бусад"
            ],
            datasets: [
                {
                    label: "2024 оны нийт 188",
                    data: [61, 26, 22, 1, 2, 8, 11, 13, 9, 25, 13],
                    backgroundColor: "#9cc9ee",
                    barThickness: 22
                },
                {
                    label: "2025 оны нийт 174",
                    data: [64, 14, 7, 2, 3, 13, 10, 16, 2, 16, 28],
                    backgroundColor: "#8fd04f",
                    barThickness: 22
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {top: 28}
            },
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        color: "#ccc",
                        boxWidth: 14
                    }
                },
                datalabels: {
                    color: "#000",
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    padding: 4,
                    anchor: "end",
                    align: "end",
                    formatter: v => v,
                    font: {
                        weight: "bold",
                        size: 11
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#ccc"
                    },
                    grid: {display: false}
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#ccc"
                    },
                    grid: {
                        color: "#333"
                    }
                }
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    Chart.register(ChartDataLabels);

    const labels = [
        "Бага оврын станц",
        "Төв цэвэрлэх байгууламж",
        "Өргөх станц",
        "Бусад"
    ];

    const colors = ["#9E9E9E", "#4A90E2", "#D81B60", "#2E7D32"];

    // ===== 2024 =====
    new Chart(document.getElementById("chart2024"), {
        type: "doughnut",
        data: {
            labels,
            datasets: [{
                data: [61, 89, 25, 13],
                backgroundColor: colors
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "2024 оны байдлаар",
                    font: {size: 16}
                },
                datalabels: {
                    color: "#000",
                    font: {weight: "bold"},
                    formatter: (v) => v
                },
                legend: {
                    position: "bottom"
                }
            }
        }
    });

    // ===== 2025 =====
    new Chart(document.getElementById("chart2025"), {
        type: "doughnut",
        data: {
            labels,
            datasets: [{
                data: [64, 66, 16, 28],
                backgroundColor: colors
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "2025 оны байдлаар",
                    font: {size: 16}
                },
                datalabels: {
                    color: "#000",
                    font: {weight: "bold"},
                    formatter: (v) => v
                },
                legend: {
                    position: "bottom"
                }
            }
        }
    });
});

new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
        labels: [
            "Алсын удирдлага",
            "Автоматик хянах хэрэгсэл",
            "Сервер программ",
            "Камер",
            "Холбоо сүлжээ",
            "Бусад"
        ],
        datasets: [{
            label: "Дуудлага барагдуулалт",
            data: [32, 25, 13, 6, 4, 15],
            backgroundColor: [
                "#9DB7A0", "#D58C7A", "#B9C37D", "#9FB5BF", "#E5C97A", "#55D6BE"
            ]
        }]
    },
    options: {
        plugins: {
            legend: {display: false},
            datalabels: {
                anchor: "end",
                align: "top",
                font: {weight: "bold"}
            }
        },
        scales: {
            y: {beginAtZero: true}
        }
    },
    plugins: [ChartDataLabels]
});
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    if (!menuToggle || !menu) return;

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
});
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
document.getElementById("next").addEventListener("click", () => {
    goToSlide(index + 1);
});

document.getElementById("prev").addEventListener("click", () => {
    goToSlide(index - 1);
});

setInterval(() => {
    goToSlide(index + 1);
}, 6000);

