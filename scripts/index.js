window.addEventListener("DOMContentLoaded", () => {
  // modal
  const modal = document.querySelector(".modal");
  const openModal = document.querySelectorAll(".headerRight, .offerAction");
  const closeModal = document.querySelector(".modalClose");

  openModal.forEach((button) => {
    button.addEventListener("click", () => {
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // tabs
  const tabContent = document.querySelectorAll(".tabContent");
  const tabItems = document.querySelector(".tabHeaderItems");
  const tabItem = document.querySelectorAll(".tabHeaderItem");

  const hideTabContent = () => {
    tabContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabItem.forEach((item) => {
      item.classList.remove("tabHeaderItemActive");
    });
  };
  hideTabContent();

  const showTabContent = (index = 0) => {
    tabContent[index].classList.add("show", "fade");
    tabContent[index].classList.remove("hide");

    tabItem[index].classList.add("tabHeaderItemActive");
  };
  showTabContent();

  tabItems.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.classList.contains("tabHeaderItem")) {
      tabItem.forEach((item, index) => {
        if (target == item) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
});
