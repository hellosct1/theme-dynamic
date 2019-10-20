function themeWindow(window) {
    browser.theme.update(window.id,
    {
      "images": {
	"theme_frame": "resource/empty.png",
	"additional_backgrounds": [
	  "resource/elephpant.png"
	]
      },
      "properties": {
	"additional_backgrounds_alignment": [
	  "right top"
	]
      },
      "colors": {
       "frame": "#3F5066",
       "tab_background_ext": "#FFFFFF",
      }

    });
}

browser.windows.onCreated.addListener(themeWindow);
browser.windows.getAll().then(wins => wins.forEach(themeWindow));
