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

## Installation

To install the extension, follow these steps:

1. Download the extension files from the [GitHub repository]
2. Open the Chrome extensions page by typing `chrome://extensions` into the address bar
3. Enable developer mode by clicking the toggle switch in the top right corner
   ![Developer Mode Toggle](https://i.imgur.com/6Z3X6ZM.png)
4. Click the "Load unpacked" button in the top left corner
5. Select the folder containing the extension files
6. The extension should now be installed and ready to use
7. Navigate to YouTube and enjoy!
8. (Optional) If you want to disable the extension, simply click the toggle switch next to the extension in the extensions page

## Conclusion

I hope you enjoy using the YT ADHD Chrome extension! If you have any questions or suggestions, feel free to reach out to me at [
](mailto:joshuasoftdev@gmail.com).
