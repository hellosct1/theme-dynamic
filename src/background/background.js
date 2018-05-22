function themeWindow(window) {   
    browser.theme.update(window.id, 
    {
      "images": {
	"headerURL": "resource/empty.png",
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
       "accentcolor": "#3F5066",
       "textcolor": "#FFFFFF", 
      }
      
    });
}
  
browser.windows.onCreated.addListener(themeWindow);
browser.windows.getAll().then(wins => wins.forEach(themeWindow));

