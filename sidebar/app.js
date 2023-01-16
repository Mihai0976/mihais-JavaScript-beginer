// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
    // if (sidebar.classList.contains("show-sidebar")) {
    //   sidebar.classList.remove("show-sidebar");
    // } else {
    //   sidebar.classList.add("show-sidebar");
    // }
    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});
