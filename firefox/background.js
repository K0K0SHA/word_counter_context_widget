browser.contextMenus.create({
  id: "word-char-count",
  title: "Word count + Character count",
  contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "word-char-count") {
    browser.tabs.executeScript(
      tab.id,
      {
        code: `(() => {
          const selection = window.getSelection().toString();
          const wordCount = selection.split(/\\s+/).length;
          const charCount = selection.length;
          alert(\`Word count: \${wordCount}, Character count: \${charCount}\`);
        })();`
      }
    );
  }
});
