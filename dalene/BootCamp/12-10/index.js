document.getElementById("button").onclick = function () {
  loadAsset("Mrs.prez.png", "blob", displayImage);
  //this starts counting the same time as the button clicks
  // setTimeout(function () {
  //   document.body.style.backgroundColor = "green";
  // }, 5000);
};

function loadAsset(url, type, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = type;

  xhr.onload = function () {
    callback(xhr.response);
  };
  xhr.send();
}
function displayImage(blob) {
  let objectURL = URL.createObjectURL(blob);
  let image = document.createElement("img");
  image.src = objectURL;
  document.body.appendChild(image);
  //starts counting after the image gets loaded
  setTimeout(function () {
    document.body.style.backgroundColor = "green";
  }, 5000);
}
