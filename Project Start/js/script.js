window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.apacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
    }, 1500);
  }, 2000);

  //-------------- TABS

  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContent = document.querySelectorAll(".tabcontent"),
    tabParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabContent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }
  function showTabContent(i = 0) {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }
  hideTabContent();
  showTabContent();

  tabParent.addEventListener("click", (event) => {
    const target = event.target;
    console.log(1);
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  //-----MODAL

  const modalBtn = document.querySelectorAll(".btnmodal"),
    modal = document.querySelector(".modal"),
    modalClose = document.querySelector("[date-close]");

  modalBtn.forEach((btn) => {
    btn.addEventListener("click", showModal);
  });

  function showModal() {
    modal.classList.add("show");
    modal.classList.remove("none");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimer);
  }
  function hideModal() {
    modal.classList.add("none");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }
  modalClose.addEventListener("click", hideModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });
  const modalTimer = setTimeout(showModal, 10000);
  function showMyModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      showModal();
      window.removeEventListener("scroll", showMyModalByScroll);
    }
  }
  window.addEventListener("scroll", showMyModalByScroll);
});
