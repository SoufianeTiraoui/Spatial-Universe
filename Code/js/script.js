function openModal(imagePath) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = imagePath;
  }

  function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }