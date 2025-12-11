function navigate(page) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(page).classList.add("active");
}

/* CV GENERERING */
function generateCV() {
    const name = document.getElementById("cv_name").value;
    const title = document.getElementById("cv_title").value;
    const profile = document.getElementById("cv_profile").value;
    const exp = document.getElementById("cv_exp").value;
    const edu = document.getElementById("cv_edu").value;

    const imgInput = document.getElementById("cv_img").files[0];

    let imgTag = "";
    if (imgInput) {
        const imgURL = URL.createObjectURL(imgInput);
        imgTag = `<img src="${imgURL}" class="preview-img">`;
    }

    document.getElementById("cvOutput").innerHTML = `
        ${imgTag}
        <h2>${name}</h2>
        <h4>${title}</h4>
        <p>${profile}</p>
        <h3>Erfarenhet</h3>
        <p>${exp}</p>
        <h3>Utbildning</h3>
        <p>${edu}</p>
    `;

    navigate("cvPreview");
}

/* PB GENERERING */
function generatePB() {
    const name = document.getElementById("pb_name").value;
    const age = document.getElementById("pb_age").value;
    const interests = document.getElementById("pb_interests").value;
    const story = document.getElementById("pb_story").value;

    const imgInput = document.getElementById("pb_img").files[0];

    let imgTag = "";
    if (imgInput) {
        const imgURL = URL.createObjectURL(imgInput);
        imgTag = `<img src="${imgURL}" class="preview-img">`;
    }

    document.getElementById("pbOutput").innerHTML = `
        ${imgTag}
        <h2>${name}</h2>
        <p>Ålder: ${age}</p>
        <h3>Intressen</h3>
        <p>${interests}</p>
        <h3>Om mig</h3>
        <p>${story}</p>
    `;

    navigate("pbPreview");
}

/* PDF EXPORT (enkelt sätt) */
function downloadPDF(elementId) {
    const element = document.getElementById(elementId);

    html2canvas(element).then(canvas => {
        const link = document.createElement("a");
        link.download = "dokument.pdf";
        link.href = canvas.toDataURL();
        link.click();
    });
}


