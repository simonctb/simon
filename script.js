// SPA-navigation
function navigate(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(p => p.classList.remove("active"));

    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

// Klickbar header -> startsidan + år i footer
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("siteHeader");
    if (header) {
        header.addEventListener("click", () => navigate("home"));
    }

    const yearSpan = document.getElementById("yearSpan");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

/* Hjälpfunktion – radbrytningar */

function nl2br(str) {
    return str.replace(/\n/g, "<br>");
}

/* GENERERA CV */

function generateCV() {
    const name = document.getElementById("cv_name").value || "Ditt namn";
    const title = document.getElementById("cv_title").value || "";
    const profile = document.getElementById("cv_profile").value || "";
    const exp = document.getElementById("cv_exp").value || "";
    const edu = document.getElementById("cv_edu").value || "";
    const skills = document.getElementById("cv_skills").value || "";
    const languages = document.getElementById("cv_languages").value || "";

    const imgInput = document.getElementById("cv_img").files[0];
    let imgTag = "";

    if (imgInput) {
        const imgURL = URL.createObjectURL(imgInput);
        imgTag = `<img src="${imgURL}" class="preview-img" alt="Profilbild">`;
    }

    const html = `
        <div class="cv-left">
            ${imgTag}
            <div class="cv-name">${name}</div>
            ${title ? `<p class="cv-title">${title}</p>` : ""}
            
            ${profile ? `
                <div class="cv-section">
                    <h4 class="cv-section-title">Profil</h4>
                    <p>${nl2br(profile)}</p>
                </div>` : ""}

            ${skills ? `
                <div class="cv-section">
                    <h4 class="cv-section-title">Färdigheter</h4>
                    <p>${nl2br(skills)}</p>
                </div>` : ""}

            ${languages ? `
                <div class="cv-section">
                    <h4 class="cv-section-title">Språk</h4>
                    <p>${nl2br(languages)}</p>
                </div>` : ""}
        </div>

        <div class="cv-right">
            ${exp ? `
                <div class="cv-section">
                    <h4 class="cv-section-title">Arbetslivserfarenhet</h4>
                    <p>${nl2br(exp)}</p>
                </div>` : ""}

            ${edu ? `
                <div class="cv-section">
                    <h4 class="cv-section-title">Utbildning</h4>
                    <p>${nl2br(edu)}</p>
                </div>` : ""}
        </div>
    `;

    document.getElementById("cvOutput").innerHTML = html;
    navigate("cvPreview");
}

/* GENERERA PERSONLIGT BREV */

function generatePB() {
    const name = document.getElementById("pb_name").value || "Ditt namn";
    const age = document.getElementById("pb_age").value || "";
    const interests = document.getElementById("pb_interests").value || "";
    const story = document.getElementById("pb_story").value || "";
    const why = document.getElementById("pb_why").value || "";

    const imgInput = document.getElementById("pb_img").files[0];
    let imgTag = "";

    if (imgInput) {
        const imgURL = URL.createObjectURL(imgInput);
        imgTag = `<img src="${imgURL}" class="preview-img" alt="Profilbild">`;
    }

    const html = `
        <div class="letter-header">
            ${imgTag}
            <div>
                <div class="letter-name">${name}</div>
                ${age ? `<div>Ålder: ${age}</div>` : ""}
            </div>
        </div>

        <p>${nl2br(story)}</p>

        ${interests ? `
            <h4 class="cv-section-title">Intressen</h4>
            <p>${nl2br(interests)}</p>` : ""}

        ${why ? `
            <h4 class="cv-section-title">Varför jag söker tjänsten</h4>
            <p>${nl2br(why)}</p>` : ""}
    `;

    document.getElementById("pbOutput").innerHTML = html;
    navigate("pbPreview");
}

/* NEDLADDNING (bildbaserad "PDF") */

function downloadPDF(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    html2canvas(element, { scale: 2 }).then(canvas => {
        const link = document.createElement("a");
        link.download = "mitt-dokument.png"; // kan konverteras till PDF efteråt vid behov
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}
