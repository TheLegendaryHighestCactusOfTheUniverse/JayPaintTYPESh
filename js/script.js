// Open Modal
function openModal(title, description, price) {
    document.getElementById("image-modal").style.display = "flex";
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-price").innerText = price;
}

// Close Modal
function closeModal() {
    document.getElementById("image-modal").style.display = "none";
}

// Filter Gallery
function filterGallery() {
    const filter = document.getElementById("filter").value;
    const items = document.querySelectorAll(".gallery-item");

    items.forEach((item) => {
        if (filter === "all" || item.dataset.status === filter) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
