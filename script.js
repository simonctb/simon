// Koppla formulärfält till preview
const fields = [
    { input: "name", preview: "prevName", default: "Ditt Namn" },
    { input: "title", preview: "prevTitle", default: "Din Titel" },
    { input: "description", preview: "prevDescription", default: "Här kommer din presentation att synas." },
    { input: "experience", preview: "prevExperience", default: "Ingen erfarenhet inlagd ännu." },
    { input: "education", preview: "prevEducation", default: "Ingen utbildning inlagd ännu." }
];

fields.forEach(field => {
    document.getElementById(field.input).addEventListener("input", () => {
        const value = document.getElementById(field.input).value.trim();
        document.getElementById(field.preview).textContent = value || field.default;
    });
});
