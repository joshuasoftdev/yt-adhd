# YT ADHD Chrome Extension

The YT ADHD is a Chrome extension designed to help users focus on their YouTube content by hiding the suggested videos panel and centering the contents of the element below it. This extension is particularly useful for users who find the suggested videos panel distracting.

## How It Works

The extension works by injecting custom CSS into YouTube pages. This CSS hides the secondary panel (which contains suggested videos) and centers the contents of the element below it.

Here is the code snippet from `content.js` that accomplishes this:

```javascript
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
```
