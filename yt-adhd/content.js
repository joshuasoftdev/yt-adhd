// content.js
(function () {
  "use strict";

  // Add custom CSS to hide the secondary panel and center contents below it
  const style = document.createElement("style");
  style.textContent = `
        #secondary {
            display: none !important;
        }
        #columns {
            display: flex;
            justify-content: center;
        }
    `;
  document.head.appendChild(style);
})();
