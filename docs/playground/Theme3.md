# 03 - Monochrome

<strong>🎨 Apply monochrome color to the entire chart.</strong>

<br>

--------

<br>

<Theme3Example></Theme3Example>

----

```javascript
<div class="monochrome-color-picker">
  <label class="monochrome-color-picker-label" for="monochrome">Monochrome</label>
  <input class="monochrome-color-picker-input" type="color" id="monochrome" @change="setMonochromeColor" />
</div>
```
```javascript
setMonochromeColor(event) {
  this.theme = event.target.value;
},
```