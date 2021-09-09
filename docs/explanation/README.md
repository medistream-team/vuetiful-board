# Explanation


## Chart

<br>

📊 You can easily create variable charts.

<br>

### series

<br>

This contains the direct data essential for the chart. You can specify the type or name of each chart data.


<br>

```javascript
//Example
series: [
          {
            name: 'Women',
            data: [25, 30, 64, 57, 50]
          },
          {
            name: 'Men',
            data: [30, 27, 56, 39, 70]
          }
        ],

        ...
```

<br>

### options

<br>

This determines the shape of the chart and includes style elements such as the title or font size of the chart.

<br>

Vuetiful-board basically follows the internal configuration of apexchart. <br>Therefore, please refer to this page if you want more detailed information. [apexchart](https://apexcharts.com/)

<br>

```javascript
//Example
options: {
          chart: {
            type: 'line',
          },
          title: {
            text: 'Growth Rate',
            align: 'center',
            style: {
              fontSize: '20px',
              fontWeight: 'bold',
            },
          },

          ...
```

<br>

## Grid

<br>

🖼 You can easily create a dragable and resized grid.

### x

<br>This means the initial horizontal position of the item (as to which column to be placed).
<br>The value must be a <strong>number.</strong>

### y

<br>This means the initial vertical position of the item (in which row to be placed).
<br>The value must be a <strong>number.</strong>

### w

<br>This refers to the initial width of the item.


### h

<br>This refers to the initial height of the item.

### i

<br>This each serves as a unique identifier for grid items. 
<br>The value must be a <strong>string</strong> and not overlap.


### static

<br>This determines whether to modify (draggable & resize) the item. <br>If you want the item to be fixed, it should be false, otherwise, it should be true.

<br>

-----

<br>

```javascript
//Example
x: 0, y: 0, w: 6, h: 12, i: '0', static: false
```