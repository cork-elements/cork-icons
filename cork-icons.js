import "@polymer/iron-iconset-svg/iron-iconset-svg"
import "@polymer/iron-icon/iron-icon"
import icons from "./cork-icons.html";

let wrapper = document.createElement('div');
wrapper.style.display = 'none';
wrapper.innerHTML = icons;
document.head.appendChild(wrapper);