// 1. Change text content
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("textPara").innerText = "Text changed using DOM!";
});

// 2. Change text color
document.getElementById("changeColorBtn").addEventListener("click", function () {
  document.getElementById("textPara").style.color = "blue";
});

// 3. Read input value
document.getElementById("showNameBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value;
  document.getElementById("output").innerText = "Hello, " + name;
});

// 4. Change image source
document.getElementById("changeImageBtn").addEventListener("click", function () {
    document.getElementById("myImage").src = "new-image.jpg";
});

// 5. Create new elements
document.getElementById("addItemBtn").addEventListener("click", function () {
  const newItem = document.createElement("p");
  newItem.innerText = "New item added";
  document.getElementById("listContainer").appendChild(newItem);
});

// 6. Remove last element
document.getElementById("removeItemBtn").addEventListener("click", function () {
  const container = document.getElementById("listContainer");
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
});
