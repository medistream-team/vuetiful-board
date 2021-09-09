# 01 - Dark Mode
<strong>🎨 Apply various theme colors to each chart</strong>

<br>

--------

<br>

<Theme1Example></Theme1Example>

------

```javascript
<div class="dark-mode-toggle-button">
  <label class="dark-mode-toggle-button-label" >
    Dark Mode
    <input class="dark-mode-toggle-button-input" type="checkbox" v-model="darkMode" />
  </label>
</div>
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