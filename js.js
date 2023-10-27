document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.querySelector(".image-container");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    let currentIndex = 0;

    // Array of image sources
    const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

    function showImage(index) {
        imageContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
            showImage(currentIndex);
        }
    });

    nextButton.addEventListener("click", function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            showImage(currentIndex);
        }
    });

    showImage(currentIndex);
});
