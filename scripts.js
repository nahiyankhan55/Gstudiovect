const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("bg-green-900", "bg-opacity-90", "shadow-md");
      } else {
        header.classList.remove("shadow-md");
      }
    });