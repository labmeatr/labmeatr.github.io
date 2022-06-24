window.addEventListener('load', (event) => {
    let button_work = document.getElementById("button_work");
    let button_experience = document.getElementById("button_experience");
    let button_skills = document.getElementById("button_skills");

    let div_work = document.getElementById("content_work");
    let div_experience = document.getElementById("content_experience");
    let div_skills = document.getElementById("content_skills");

    button_work.onclick = function() {
        if (div_work.style.display == "none") {
            div_work.style.display = "block";
        } else {
            div_work.style.display = "none";
        }
    }
    button_experience.onclick = function() {
        if (div_experience.style.display == "none") {
            div_experience.style.display = "block";
        } else {
            div_experience.style.display = "none";
        }
    }
    button_skills.onclick = function() {
        if (div_skills.style.display == "none") {
            div_skills.style.display = "block";
        } else {
            div_skills.style.display = "none";
        }
    }
});