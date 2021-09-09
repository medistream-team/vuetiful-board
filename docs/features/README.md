# Features
## Drag & Drop / Resize

<br>

Vuetiful-board supports drag & drop and resize functions. <br>You can drag it in the desired direction and adjust the size freely.

```javascript
:layout-editable="layoutEditable"
```

<br>

<img src="./../.vuepress/public/dragresize.gif" width="100%"/>


<br>
<br>

## Color Theme

<br>

Vuetiful-board can specify the theme color. <br>You can freely decorate the chart with the color theme of the palette you want.

<br>

If you're curious about how to designate a pallet, please refer to this page. [properties](/property)

```javascript
:theme="theme"
```
```javascript
switchTheme(themeName) {
      this.theme = themeName;
    },
```

<br>

<img src="./../.vuepress/public/theme.gif" width="100%"/>


<br>
<br>

## Dark Mode

<br>

Vuetiful-board supports dark mode. <br>When dark mode is selected, both the chart, grid, and background colors become dark, and the font color is reversed to white.

```javascript
:dark-mode="darkMode"
```

<br>

<img src="./../.vuepress/public/darkmode.gif" width="100%"/>

<br>
<br>

## MonoChrome

<br>

Vuetiful-board can be painted with monochrome. <br>When monochrome is selected, the chart color changes to saturation and brightness of the corresponding color.

```javascript
setMonochromeColor(event) {
      this.theme = event.target.value;
    },
```

<br>

<img src="./../.vuepress/public/monochrome.gif" width="100%"/>
