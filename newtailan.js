document.addEventListener("DOMContentLoaded", () => {

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

    new Chart(document.getElementById("hBarChart"), {
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
                    backgroundColor: bluePalette[1]
                },
                {
                    label: "2025",
                    data: [442, 183, 9, 9],
                    backgroundColor:  bluePalette[5]
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
                        size: 16
                    },
                    formatter: v => v
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#131313"
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

    new Chart(document.getElementById('workChart'), {
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
                    backgroundColor: bluePalette[1]
                },
                {
                    label: '2025 он',
                    data: [163, 469, 270, 221, 169, 211, 70, 370],
                    backgroundColor: bluePalette[5]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' },
                datalabels: {
                    color: bluePalette[0],
                    anchor: 'end',
                    align: 'end',
                }
            },
            scales: {
                x: {
                    ticks: { color: "rgb(19,19,19)" },
                    grid: { display: false }
                },
                y: {
                    beginAtZero: true,
                    ticks: { color: "#ccc" },
                    grid: { color: "#dfdfdf" }
                }
            }
        },
        plugins: [ChartDataLabels]
    });

    new Chart(document.getElementById("serviceChart"), {
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
                    backgroundColor: bluePalette[1]
                },
                {
                    label: "2025 он",
                    data: [76, 68, 23, 508, 56, 92, 26, 22, 31, 394],
                    backgroundColor: bluePalette[5]
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
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "rgb(136,136,136)"
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
                        color: "#e4e4e4"
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });

    new Chart(document.getElementById("callChart"), {
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
                backgroundColor: bluePalette
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
                    font: {weight: "bold", size: 16}
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "rgb(19,19,19)"
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#353535"
                    },
                    grid: {
                        color: "#bababa"
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });

    new Chart(document.getElementById("simpleChart"), {
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
                    backgroundColor: bluePalette[1]
                },
                {
                    label: "2025",
                    data: [24, 31, 48, 276, 22, 15, 29],
                    backgroundColor: bluePalette[5]
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
                    borderRadius: 4,
                    padding: 4,
                    anchor: "end",
                    align: "end",
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#151515"
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#505050"
                    },
                    grid: {
                        color: "#b6b6b6"
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });

    new Chart(document.getElementById("tele"), {
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
                backgroundColor: bluePalette,
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
                        color: "#151515",
                        font: {size: 16}
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

    new Chart(document.getElementById("vehicleChart"), {
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
                    backgroundColor: bluePalette[1]
                },
                {
                    label: "2025",
                    data: [128, 52, 14, 23, 5, 2, 13],
                    backgroundColor: bluePalette[5]
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
                    color: "#5e5e5e",
                    borderRadius: 4,
                    padding: 4,
                    anchor: "end",
                    align: "end",
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#131313"
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#6a6a6a"
                    },
                    grid: {
                        color: "#a8a8a8"
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });

});
