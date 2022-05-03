const parent = document.querySelector(".parent-container");

parent.addEventListener("click", (e) => {
  let value = e.target.innerText;
  if (value === "Ashish") {
    e.target.style.backgroundColor = "green";
  }
});
