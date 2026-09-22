const photos = [
  "https://images.unsplash.com/photo-1552053831-71594a27632d",
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
  "https://images.unsplash.com/photo-1517849845537-4d257902454a",
  "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
];

const sliderImage = document.querySelector(".carousel-inner");

photos.forEach((photo, index) => {
  sliderImage.innerHTML += `
    <div class="carousel-item ${index === 0 ? "active" : ""}">
      <img 
        src="${photo}?auto=format&fit=crop&w=800&q=80"
        class="d-block mx-auto"
        style="width: 500px; height: 500px; object-fit: cover;"
        alt="Image ${index + 1}"
      >
    </div>
  `;
});