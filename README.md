# Theme Selector

This module uses [`matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) and [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) to implement a theme selector into your web application. There are two ways to use it :

## [Basic](basic.html)

Auto selection between light and dark mode based on the user's system-wide preference.

## [Advanced](advanced.html)

Automatic dark/light selection is used on first load but the user can choose from a selection of themes. If a user does select a prefered theme, any system-wide preference changes will be ignored.

## Notes

The selected theme is stored in [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). If the user clears their stored data for your origin, their preference will be erased and the theme will revert to `auto` mode.

With either type of usage, `auto` mode will update the theme on-the-fly if the user changes their system-wide preference or it changes based on the light sensor in their device.

## Known Issues

1. `localStorage` is not available in a [sandboxed](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox) `<iframe>` so the user's selected theme preference cannot be saved if this module is used inside this type of enviroment. However, you can still use `auto`  mode in this scenario.

2. To prevent a [flash of unstyled content](https://en.wikipedia.org/wiki/Flash_of_unstyled_content#:~:text=A%20flash%20of%20unstyled%20content,before%20all%20information%20is%20retrieved.) on page loads after the user has selected a theme, you should serve this module with a caching policy that allows it to be read from disk or memory cache without revalidating. An example `.htaccess` file is included in this repo.

3. Unfortunately (especially for myself) [xfwm4](https://docs.xfce.org/xfce/xfwm4/start) does not implement a system-wide dark mode setting that can be detected by this module.