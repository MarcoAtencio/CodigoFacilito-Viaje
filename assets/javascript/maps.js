import styles from "./maps/styles";

function initMap() {
  const coords = {
    lat: -11.85604,
    lng: -77.09609,
  };

  var map = new google.maps.Map(document.querySelector("#mapa"), {
    center: coords,
    zoom: 13,
    styles,
  });

  var marker = new google.maps.Marker({
    positon: coords,
    map,
    title: "Puente Piedra",
  });
}

initMap();
