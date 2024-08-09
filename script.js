document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("themeToggle");
    const search = document.getElementById("search");
    const topDiv = document.getElementById("topDiv");
    const themeIcon = document.getElementById("themeIcon");
    const screenshot = document.getElementById("screenshot");
    const bannerDismiss = document.getElementById("bannerDismiss");
    const banner = document.getElementById("banner");
    const nav = document.getElementById("nav");
    const bottomDiv = document.getElementById("bottomDiv");
    const swimlanescreenshot = document.getElementById('swimlanescreenshot');
    const swinlanecustomized = document.getElementById('swimlane-customized');
    const swimlaneanywhere = document.getElementById('swinlane-anywhere');
    const footer = document.getElementById('footer');

    themeButton.addEventListener("click", () => {
        if (topDiv.classList.contains("light-theme") && bottomDiv.classList.contains("light-theme") && nav.classList.contains("light-theme") && footer.classList.contains("light-theme")) {
            topDiv.classList.remove("light-theme");
            bottomDiv.classList.remove("light-theme");
            nav.classList.remove("light-theme");
            footer.classList.remove("light-theme");
            search.style.backgroundImage = "url('images/search-dark.svg')";
            themeIcon.src = "images/theme-light.svg";
            screenshot.src = "images/home-screenshot-mac-2x-v2.png";
            swimlanescreenshot.src = "images/swimlane-copilot.png";
            swinlanecustomized.src = "images/swimlane-customized.png";
            swimlaneanywhere.src = "images/swimlane-anywhere.png";
        } else {
            topDiv.classList.add("light-theme");
            bottomDiv.classList.add("light-theme");
            nav.classList.add("light-theme");
            footer.classList.add("light-theme");
            search.style.backgroundImage = "url('images/search.svg')";
            themeIcon.src = "images/theme-dark.svg";
            screenshot.src = "images/home-screenshot-mac-2x-v2-light.png";
            swimlanescreenshot.src = "images/swimlane-copilot-light.png";
            swinlanecustomized.src = "images/swimlane-customized-light.png";
            swimlaneanywhere.src = "images/swimlane-anywhere-light.png";
        }
    });

    bannerDismiss.addEventListener("click", () => {
        banner.style.zIndex = "-1";
    });

    window.onscroll = () => {
        if (window.scrollY > 0) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    }

});
