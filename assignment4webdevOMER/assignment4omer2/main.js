const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ['._pic1.jpg', '._pic2.jpg', '._pic3.jpg', '._pic4.jpg', '._pic5.jpg'];

/* Declaring the alternative text for each image file */
const altTexts = ['Closeup of a human eye', 'City skyline', 'Beach at sunset', 'Mountain landscape', 'Green fields'];

/* Looping through images */
for (let i = 0; i < imageFiles.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageFiles[i]);
    newImage.setAttribute('alt', altTexts[i]);
    newImage.addEventListener('click', function() {
        displayedImage.src = 'images/' + imageFiles[i];
        displayedImage.alt = altTexts[i];
    });
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
