// PAGE NAVIGATION
function navigate(page) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(page).classList.add("active");
    window.scrollTo(0, 0);
}

// CLICK HEADER → HOME
document.getElementById("siteHeader").onclick = () => navigate("home");


// LIVE PREVIEW HANDLER
function bindLive(inputId, previewId) {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    input.addEventListener("input", () => {
        preview.innerHTML = input.value.replace(/\n/g, "<br>");
    });
}

// CV LIVE FIELDS
bindLive("cv_name", "cv_prev_name");
bindLive("cv_title", "cv_prev_title");
bindLive("cv_profile", "cv_prev_profile");
bindLive("cv_exp", "cv_prev_exp");
bindLive("cv_edu", "cv_prev_edu");
bindLive("cv_skills", "cv_prev_skills");
bindLive("cv_languages", "cv_prev_languages");

// PB LIVE FIELDS
bindLive("pb_name", "pb_prev_name");
bindLive("pb_age", "pb_prev_age");
bindLive("pb_interests", "pb_prev_interests");
bindLive("pb_story", "pb_prev_story");
bindLive("pb_why", "pb_prev_why");


// IMAGE LIVE PREVIEW
function liveImage(inputId, previewId) {
    document.getElementById(inputId).addEventListener("change", function() {
        const file = this.files[0];
        const preview = document.getElementById(previewId);

        if (file) {
            const url = URL.createObjectURL(file);
            preview.src = url;
            preview.style.display = "block";
        }
    });
}

liveImage("cv_img", "cv_img_preview");
liveImage("pb_img", "pb_img_preview");


// DOWNLOAD PDF (PNG-baserad)
function downloadPDF(elementId) {
    const element = document.getElementById(elementId);
    html2canvas(element, { scale: 2 }).then(canvas => {
        const link = document.createElement("a");
        link.download = "dokument.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}
