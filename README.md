# Module: MMM-ATLA-Quotes
The `MMM-ATLA-Quotes` module is a 3rd party [Magic Mirror²](https://github.com/MichMich/MagicMirror) module that displays a random daily Avatar Quote.

## Configuring the Module
Add this module to the modules array in the `config/config.js` file in the `~/MagicMirror` directory. Config can be left blank for default settings.

```javascript
modules:[
  {
    module: "MMM-ATLA-Quotes",
    position: "",
    config: {
      // Updates the quote every 24 hours (optional)
      updateInterval: 86400000,
      // Fades the quote out and the new one in every 4 seconds (optional)
      fadeSpeed: 4000,
      // Allows the user to override the quotes array with quotes of their own (optional)
      quotes: [],
      // Allows the user to override the thumbnails array with thumbnails of their own (optional)
      thumbnails: []
    }
   }
]
```

## Screenshots
[Avatar Quotes Screenshot](ATLA-Quotes-Screenshot.png)




