window.onload = () => {
    loadMap("HousingCostinEU.svg");
};

function loadMap(file) {
    fetch(file)
        .then(res => res.text())
        .then(svg => {
            document.getElementById("map-container").innerHTML = svg;
            addInteractions();
        });
}

function addInteractions() {
    const tooltip = document.getElementById("tooltip");

    for (const iso in housingData) {
        const el = document.getElementById(iso);
        if (!el) continue;

        el.addEventListener("mousemove", (e) => {
            const data = housingData[iso];
            tooltip.style.left = (e.pageX + 10) + "px";
            tooltip.style.top = (e.pageY + 10) + "px";
            tooltip.innerHTML = `<strong>${iso}</strong><br>${data.share}%`;
            tooltip.style.display = "block";
        });

        el.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });
    }
}




