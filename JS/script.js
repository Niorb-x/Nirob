const element = document.querySelectorAll(".glass");
VanillaTilt.init(element, {
    max: 15,
    glare: true,
    transition: true,
    scale: 1.05,
});

new Splide(".splide", {
    type: "loop",
    autoWidth: true,
    gap: "50px",
    focus: "center",
    keyboard: "focused",
}).mount();

const ctx = document.getElementById("mySkills").getContext("2d");
window.addEventListener("resize", () => {
    const width = body.offsetWidth;
    if (width < 568) {
        Chart.defaults.font.size = 12;
    } else if (width < 768) {
        Chart.defaults.font.size = 14;
    } else if (width < 968) {
        Chart.defaults.font.size = 16;
    } else {
        Chart.defaults.font.size = 18;
    }
});

new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Jan-Feb", "Mar-Apr", "May-Jun", "Jul-Aug", "Sep-Oct", "Nov-Dec"],
        datasets: [
            {
                data: [0, 17, 39, 57, 55, 52],
                label: "Python",
                borderColor: "#3e95cd",
                fill: false,
                lineTension: 0.5,
            },
            {
                lineTension: 0.5,
                data: [0, 3, 9, 23, 51, 91],
                label: "HTML",
                borderColor: "#8e5ea2",
                fill: false,
            },
            {
                lineTension: 0.5,
                data: [0, 1, 3, 12, 33, 73],
                label: "CSS",
                borderColor: "#01eebb",
                fill: false,
            },
            {
                lineTension: 0.5,
                data: [1, 1, 1, 2, 23, 63],
                label: "JS",
                borderColor: "#ffff41",
                // borderColor: "#e8c3b9",
                fill: false,
            },
            {
                lineTension: 0.5,
                data: [0, 0, 0, 0, 5, 30],
                label: "MongoDB",
                borderColor: "#c45850",
                fill: false,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 16,
                    },
                },
            },
        },
        maintainAspectRatio: false,
    },
});
