# Properties

## 🖼 Grids

### colNum

<br>

<li>type:  <code>Number</code></li>

<br>

<li>required: <code>true</code></li>

<br>

<li>default: <code>12</code></li>


<br>

Says how many columns the grid has.

<br>

The value should be a <strong>natural number.</strong>

<br>

### rowHeight

<br>


<li>type:  <code>Number</code></li>

<br>

<li>required: <code>true</code></li>

<br>

<li>default: <code>30</code></li>


<br>

Says what is a height of a single row in pixels.

<br>

The value should be a <strong>natural number.</strong>

<br>

### layoutEditable

<br>


<li>type:  <code>Boolean</code></li>

<br>


<li>required: <code>true</code></li>

<br>


<li>default: <code>true</code></li>


<br>

Says when to decide whether to edit the layout.

<br>

The default value is true, and layout editing is basically possible. <br>
And if the default is changed to false, layout editing becomes impossible.

<br>
<br>

## 📊 Charts

### datasets

<br>


<li>type:  <code>Array</code></li>

<br>


<li>required: <code>true</code></li>

<br>


<li>default: <code>true</code></li>


<br>

This is where you have to enter the direct data you will use. <br>
Dataset requires <strong>basic information on charts</strong> and <strong>elements related to grids.</strong>


<br>

Datasets basically takes this form. If you want more detail information of datasets elements, 
please refer to this page. [explanation](/explanation)

```javascript

datasets: {
  chartInfo: {},
  gridInfo: {}
}

```

<br>

If no content is entered into the dataset, a basic chart form with no information will appear.


<br>

### theme

<br>


<li>type:  <code>String</code></li>

<br>

<li>default: <code>palette[0].name</code></li>


<br>

Use it if you want to change the theme of the chart fluidly.<br>
Basically, there are five themes provided: classic, retro, green, vintage, and rainbow.<br>
<br>

As in the example below, a <strong>color palette</strong> may be set as desired.
<br>
If you want to use color palette for theme, you can refer this page [palette.json](https://github.com/medistream-team/vuetiful-board/blob/master/src/assets/palette.json)

```json

[
  {
    "name": "classic",
    "colors": [
      "#5975fe",
      "#54d2d2",
      "#ffcb00",
      "#ff6150",
      "#1360bf",
      "#62a1b3",
      "#ffa395",
      "#b37268",
      "#5cd184",
      "#ffff00"
    ]
  },
  {
    "name": "rainbow",
    "colors": [
      "#e74645",
      "#fb7756",
      "#facd60",
      "#38ada9",
      "#1e3799",
      "#6a4fa5",
      "#faa3ba",
      "#ffc145",
      "#264e70",
      "#679186"
    ]
  },
  {
    "name": "vintage",
    "colors": [
      "#004e89",
      "#6b51a4",
      "#fcba04",
      "#a50104",
      "#590004",
      "#3867d6",
      "#3cbbb1",
      "#fab1a0",
      "#fdcb6e",
      "#4b6584"
    ]
  },
  {
    "name": "retro",
    "colors": [
      "#38e0ec",
      "#5b9279",
      "#8fcb9b",
      "#324376",
      "#8f8073",
      "#dd614a",
      "#fa824c",
      "#6b6ed1",
      "#f7c548",
      "#63d2ff"
    ]
  },
  {
    "name": "green",
    "colors": [
      "#277f8e",
      "#77AD78",
      "#365c8d",
      "#4ac16d",
      "#46337e",
      "#9fda3a",
      "#3867d6",
      "#440154",
      "#1fa187",
      "#4b6584"
    ]
  }
]

```

<br>

### darkMode

<br>


<li>type:  <code>Boolean</code></li>

<br>

<li>default: <code>false</code></li>


<br>

Says if you want to set the dark mode (switch effect of background and font color).
