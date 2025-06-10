function loadGoogleMap() {
    const mapDiv = document.getElementById("google-map");
    const overlay = document.getElementById("map-overlay");
  
    const iframe = document.createElement("iframe");
    iframe.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.537396714276!2d8.712742313043927!3d48.90515279729369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479771863ef2d747%3A0x970192d28a64ad45!2sZum%20H%C3%B6henfreibad%2011%2C%2075177%20Pforzheim!5e0!3m2!1sde!2sde!4v1744715625657!5m2!1sde!2sde";
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
  
    mapDiv.appendChild(iframe);
    mapDiv.classList.remove("d-none");
    overlay.style.display = "none";
  }