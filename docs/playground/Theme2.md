# 02 - Color Theme

<strong>🎨 Apply dark mode to the entire chart.</strong>

<br>

--------

<br>

<Theme2Example></Theme2Example>

------

```javascript
<ul class="theme-swatches" v-for="(swatch, index) in palette" :key="index">
    <li class="theme-swatches-item" v-for="theme in swatch" :key="theme.name" @click="switchTheme(theme.name)">
      <label class="theme-swatches-label" :for="theme.name">
        <input class="theme-swatches-checkbox" type="checkbox" :id="theme.name" />
        <span class="theme-swatches-name">{{ theme.name }}</span>
      </label>
    </li>
  </ul>
```
```javascript
 <vuetiful-board
    :theme="theme"
    :dark-mode="darkMode"
    :col-num="colNum"
    :row-height="rowHeight"
    :layout-editable="layoutEditable"
    :datasets="[]"
  />
```

```javascript
switchTheme(themeName) {
  this.theme = themeName;
},
```