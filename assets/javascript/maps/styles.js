const grey = "#f5f5f5";
const label = "#2c3e50";
const accentRed = "#ff5972";
const green = "#468c56";
const black = "#1f1f21";
const lightBlue = "#6dbcdb";
const roads = "#eadf8f";
const transit = "#d3ba74";

const styles = [
  { elementType: "geometry", stylers: [{ color: grey }] },
  { elementType: "labels.text.fill", stylers: [{ color: label }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: accentRed }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: label }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: lightBlue }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: green }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: roads }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: black }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: green }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: lightBlue }],
  },
];

export default styles;
