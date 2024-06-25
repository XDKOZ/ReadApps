// Sample data for boxes (replace with your actual data)
const boxesData = [
  { imageSrc: 'mangaapp-imgs/Mihon_round.png', title: 'Mihon', description: 'Discover and read manga, webtoons, comics, and more – easier than ever on your Android device.', link: 'https://mihon.app' },
  { imageSrc: 'animeapp-imgs/unnamed.webp', title: 'Anilab', description: 'Tired of endless googling for safe and free anime streaming apps? Your search ends right here! Save time for what matters and let us handle the rest, delivering the best streaming experience to you.', link: 'https://anilab.to/' },
  { imageSrc: 'animeapp-imgs/animelab-watch-anime-free-logo.webp', title: 'AnimeLab', description: 'Watch Hindi Dubb Animes For Free', link: 'https://animelab-watch-anime-free.en.softonic.com/android' },
  // Add more data as needed
];

// Function to generate HTML for a box
function generateBoxHTML(imageSrc, title) {
  return `
    <div class="box">
      <img src="${imageSrc}" alt="${title}">
      <h2>${title}</h2>
      <span class="info-icon">&#9432;</span>
    </div>
  `;
}

// Function to render boxes based on search term
function renderBoxes(searchTerm = '') {
  const boxesContainer = document.querySelector('.boxes');
  let filteredBoxes = boxesData.filter(box => box.title.toLowerCase().includes(searchTerm.toLowerCase()));

  // Clear existing boxes
  boxesContainer.innerHTML = '';

  // Render filtered boxes
  filteredBoxes.forEach(box => {
    const boxHTML = generateBoxHTML(box.imageSrc, box.title);
    boxesContainer.innerHTML += boxHTML;
  });

  // Attach click event to each box
  document.querySelectorAll('.box').forEach((box, index) => {
    box.addEventListener('click', () => openPopup(boxesData[index]));
  });
}

// Function to open popup
function openPopup(data) {
  document.getElementById("popupImage").src = data.imageSrc;
  document.getElementById("popupTitle").innerText = data.title;
  document.getElementById("popupDescription").innerText = data.description;
  document.getElementById("popupLink").href = data.link;
  document.getElementById("popup").style.display = "block";
}

// Function to close popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Initial render of boxes
renderBoxes();

// Search functionality
document.getElementById("searchInput").addEventListener("input", function() {
  let searchTerm = this.value.trim();
  renderBoxes(searchTerm);
});
