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


    let surname_span = document.getElementById("surname_span");
    let surname_button = document.getElementById("surname_reveal_button");

    surname_button.onclick = function () {
        surname_button.style.marginLeft = "200px";
        surname_button.style.opacity = 0;
        surname_button.style.visibility = "hidden";
        surname_span.style.opacity = "1";
    }
});