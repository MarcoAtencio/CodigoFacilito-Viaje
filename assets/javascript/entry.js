import "../css/app.scss";

import "./slider/sliderDOM.js";

import "./maps.js";

import "./menu.js";

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("../../sw.js");
}
