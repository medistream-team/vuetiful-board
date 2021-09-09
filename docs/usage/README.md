# Usage

------

<br>

<strong>ChartInfo</strong> is a set of information for drawing various charts.<br>
<strong>GridInfo</strong> is a set of information for the grid, and you can set the basic location and fixed status.

<br>

If you want more detail information about these, please refer to this page. [explanation](/explanation/)

<br>

```javascript
  <vuetiful-board
    :theme="classic"
    :dark-mode="true"
    :col-num="12"
    :row-height="30"
    :layout-editable="true"
    :datasets="[
      {
          chartInfo: {
            series: [200, 12, 40, 25, 34, 6, 23],
            options: {
              chart: {
                type: 'pie',
              },
              title: {
                text: 'The recent inflow route',
                align: 'center',
                style: {
                  fontSize: '18px',
                  fontWeight: 'bold',
                },
              },
              labels: [
                'SNS',
                'Recommend',
                'Homepage',
                'Blog',
                'Kakaotalk Channel',
                'Rumor',
                'ETC',
              ],
              fill: {
                opacity: 1,
              },
              legend: {
                position: 'bottom',
              }
            }
          },
          gridInfo: {
            x: 6, y: 0, w: 6, h: 12, i: '1', static: false
          },
        },
    ]"
  />
```

<h2 class="easy-text"> 🎉 You can easily use! </h2>

<style>
.easy-text {
  border-bottom: none;
}
</style>