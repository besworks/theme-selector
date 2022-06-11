# Theme Selector

This module uses [`matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) and [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) to implement a theme selector into your web application. There are two ways to use it :

## [Basic](basic.html)

Auto selection between light and dark mode based on the user's system-wide preference.

## [Advanced](advanced.html)

Automatic dark/light selection is used on first load but the user can choose from a selection of themes. If a user does select a prefered theme, any system-wide preference changes will be ignored.

## Notes

The selected theme is stored in [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). If the user clears their stored data for your origin, their preference will be erased and the theme will revert to `auto` mode.

With either type of usage, `auto` mode will update the theme on-the-fly if the user changes their system-wide preference or it changes based on the light sensor in their device.

The CSS rules used in the examples are just a bare-bones demonstrations, you can add whatever complex styles you want to each theme. However, both the `html.light` and `html.dark` class names are are hard-coded in and required for `auto` mode to function.

## Known Issues

1. `localStorage` is not available in a [sandboxed](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox) `<iframe>` so the user's selected theme preference cannot be saved if this module is used inside this type of enviroment. However, you can still use `auto`  mode in this scenario.

2. To prevent a [flash of unstyled content](https://en.wikipedia.org/wiki/Flash_of_unstyled_content) on page loads you should serve this module with a caching policy that allows it to be read from disk or memory cache without revalidating. An example [.htaccess](.htaccess) file is included in this repo. Alternatively, you may wish to implement this as an [inline](inline.html) script.

3. Unfortunately (especially for myself) Chromium based browsers for GNU/Linux [do not  detect](https://bugs.chromium.org/p/chromium/issues/detail?id=998903) the system-wide dark mode setting of GTK themes. To work around this on your own personal system you can set the [#enable-force-dark](https://medium.com/@vipulgote4/how-to-force-dark-mode-on-every-website-in-google-chrome-f52f550a3fd) flag. However, this prevents the use of the `light` theme as the colors are overriden by a heuristic transformation. For testing purposes it may be simpler to just [simulate dark mode](https://stackoverflow.com/a/59223868/6036546).