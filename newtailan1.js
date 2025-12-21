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
    new Chart(document.getElementById("summaryChart"), {
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
                    backgroundColor: bluePalette[1],
                    barThickness: 22
                },
                {
                    label: "2025 оны нийт 174",
                    data: [64, 14, 7, 2, 3, 13, 10, 16, 2, 16, 28],
                    backgroundColor: bluePalette[5],
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
                        size: 16
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#151515"
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

    new Chart(document.getElementById("us"), {
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
                    backgroundColor:  bluePalette[1],
                    barThickness: 28
                },
                {
                    label: "2025",
                    data: [66, 26, 8, 177, 20, 9, 18],
                    backgroundColor: bluePalette[5],
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
                        color: "#131313",
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
                        size: 16
                    }
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
                        color: "#ccc"
                    },
                    grid: {
                        color: "#333"
                    }
                }
            }
        }
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
                backgroundColor: bluePalette
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
                        color: "#ccc"
                    },
                    grid: {
                        color: "#333"
                    }
                }
            },
        },
        plugins: [ChartDataLabels]
    });

    new Chart(document.getElementById("holboocan"), {
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
                    backgroundColor: bluePalette[1]
                },
                {
                    label: "2025 он",
                    data: [5, 5, 45],
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
                    font: {
                        weight: "bold",
                        size: 16
                    },
                    formatter: (value) => value
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
                        color: "#3a3a3a"
                    },
                    grid: {
                        color: "#bdbdbd"
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });

    new Chart(document.getElementById("lanChart"), {
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
                backgroundColor: bluePalette
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
                        color: "#ccc"
                    },
                    grid: {
                        color: "#333"
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });

    new Chart(document.getElementById("bigChart"), {
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
                    data: [338, 49, 33, 32, 103, 210, 104, 45, 83, 48, 115, 0],
                    backgroundColor: bluePalette[1],
                    barThickness: 16
                },
                {
                    label: "2025",
                    data: [365, 75, 13, 79, 73, 88, 188, 107, 88, 187, 184, 82],
                    backgroundColor:  bluePalette[5],
                    barThickness: 16
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {top: 30, bottom: 40}
            },
            plugins: {
                legend: {
                    labels: {color: "#595959"}
                },
                datalabels: {
                    color: "rgba(43,43,43,0.84)",
                    anchor: "end",
                    align: "end",
                    offset: 2,
                    clip: false,
                    formatter: (v) => v > 0 ? v : "",
                    font: {weight: "bold", size: 12}
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#151515",
                        autoSkip: false,
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

    new Chart(document.getElementById("statusChart"), {
        type: "pie",

        data: {
            labels: [
                "Ажиллахгүй байгаа",
                "Хэвийн ажиллагаатай",
                "Түр салгасан"
            ],
            datasets: [{
                data: [4, 64, 5],
                backgroundColor: bluePalette,
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



    Chart.register(ChartDataLabels);

    const labels = [
        "Бага оврын станц",
        "Төв цэвэрлэх байгууламж",
        "Өргөх станц",
        "Бусад"
    ];

    // ===== 2024 =====
    new Chart(document.getElementById("chart2024"), {
        type: "doughnut",
        data: {
            labels,
            datasets: [{
                data: [61, 89, 25, 13],
                backgroundColor: bluePalette
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
                backgroundColor: bluePalette
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
