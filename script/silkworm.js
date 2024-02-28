
function carosoleSlightImg() {
    const bannerContainers = document.querySelectorAll(".banner-container");

    bannerContainers.forEach(bannerContainer => {
        let currentIndex = 0;
        const containerStyles = bannerContainer.style;
        const nextBtn = bannerContainer.querySelector(".button-right");
        const prevBtn = bannerContainer.querySelector(".button-left");

        const backgroundImageUrls = [
            "url(/images/craft-6537242_1920.jpg)",
            "url(/images/istockphoto-471427947-1024x1024.jpg)",
            "url(/images/silkworm-2456852_1920.jpg)",
            "url(/images/white-silkworm-with-blurred-background.jpg)"
            // if you want , you can add more images here like that
        ];

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % backgroundImageUrls.length;
            containerStyles.backgroundImage = backgroundImageUrls[currentIndex];
        });

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + backgroundImageUrls.length) % backgroundImageUrls.length;
            containerStyles.backgroundImage = backgroundImageUrls[currentIndex];
        });
    });
}

carosoleSlightImg();
