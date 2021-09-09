<template>
  <div id="app">
    <div class="monochrome-color-picker">
      <label class="monochrome-color-picker-label" for="monochrome">Monochrome</label>
      <input class="monochrome-color-picker-input" type="color" id="monochrome" @change="setMonochromeColor" />
    </div>

    <div class="dark-mode-toggle-button">
      <label class="dark-mode-toggle-button-label">
        Dark Mode
        <input class="dark-mode-toggle-button-input" type="checkbox" v-model="darkMode" />
      </label>
    </div>

  <ul class="theme-swatches" v-for="(swatch, index) in palette" :key="index">
      <li class="theme-swatches-item" v-for="theme in swatch" :key="theme.name" @click="switchTheme(theme.name)">
        <label class="theme-swatches-label" :for="theme.name">
          <input class="theme-swatches-checkbox" type="checkbox" :id="theme.name" />
          <span class="theme-swatches-name">{{ theme.name }}</span>
        </label>
      </li>
    </ul>
 <button class="editBtn" @click="layoutEditable = !layoutEditable">🖊</button>
    <vuetiful-board
      :theme="theme"
      :dark-mode="darkMode"
      :col-num="colNum"
      :row-height="rowHeight"
      :layout-editable="layoutEditable"
      :datasets="[
        {
          chartInfo: {
            series: [
              {
                name: 'Advertisement',
                data: [37, 30, 23, 14, 13, 11, 47, 24, 45, 31, 27, 18],
              },
              {
                name: 'Recommend',
                data: [16, 15, 22, 16, 19, 13, 20, 22, 15, 27, 16, 20],
              },
              {
                name: 'Rumor',
                data: [8, 8, 19, 11, 5, 7, 8, 4, 5, 6, 4, 9],
              },
              {
                name: 'Homepage',
                data: [3, 4, 5, 5, 1, 6, 7, 3, 4, 5, 7, 2],
              },
              {
                name: 'Blog',
                data: [5, 2, 4, 2, 5, 6, 2, 3, 1, 1, 6, 3],
              },
              {
                name: 'Social Platform Channel',
                data: [1, 1, 1, 0, 0, 0, 3, 0, 0, 1, 1, 1],
              },
              {
                name: 'ETC',
                data: [43, 0, 3, 8, 7, 9, 6, 4, 5, 3, 0, 2],
              },
            ],
            options: {
              chart: {
                type: 'bar',
                stacked: true,
                stackType: '100%',
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              title: {
                text: 'The recent trend of inflow',
                align: 'center',
                style: {
                  fontSize: '18px',
                  fontWeight: 'bold',
                },
              },
              xaxis: {
                categories: [
                  '2020-07',
                  '2020-08',
                  '2020-09',
                  '2020-10',
                  '2020-11',
                  '2020-12',
                  '2021-01',
                  '2021-02',
                  '2021-03',
                  '2021-04',
                  '2021-05',
                  '2021-06',
                ],
              },
              fill: {
                opacity: 1,
              },
              legend: {
                position: 'bottom'
              },
            }
          },
          gridInfo: {
            x: 0, y: 0, w: 12, h: 12, i: '0', static: false
          },
        },
        {
          chartInfo: {
            series: [153, 73, 20, 23, 31, 8, 22],
            options: {
              chart: {
                type: 'pie',
              },
              title: {
                text: 'The recent trend of inflow (2021)',
                align: 'center',
                style: {
                  fontSize: '18px',
                  fontWeight: 'bold',
                },
              },
              labels: [
                'Advertisement',
                'Recommend',
                'Rumor',
                'Homepage',
                'Blog',
                'Social Flatform Channel',
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
             x: 8, y: 0, w: 4, h: 10, i: '1', static: false
          },
        },
        {
          chartInfo: {
            series: [
              {
                name: 'Total medical expenses (2019)',
                type: 'bar',
                data: [46632430, 42454730, 52245270, 42039450, 58010291, 53041980, 34520700, 47295028, 39572103, 59104839, 50284193, 47032950],
              },
              {
                name: 'Total medical expenses (2020)',
                type: 'bar',
                data: [39294770, 49817250, 50493023, 41903759, 60795049, 60385940, 59483928, 57694739, 49586758, 30495823, 49586584, 59484938]
              },
              {
                name: 'Growth rate (2019)',
                type: 'line',
                data: [null, null, null, null, null, null, null, null, 130, 24, 33, 12]
              },
              {
                name: 'Growth rate (2020)',
                type: 'line',
                data: [-13, -2, -23, -12, 21, 19, -10, -3, -2, -14, -1, 6]
              },
            ],
            options: {
              chart: {
                type: 'line',
              },
              title: {
                text: 'Total medical expenses',
                align: 'center',
                style: {
                  fontSize: '18px',
                  fontWeight: 'bold',
                },
              },
              xaxis: {
                categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                labels: {
                  formatter: function(value) {
                    return `${value}Month`;
                  }
                }
              },
              yaxis: [
                {
                  seriesName: 'Total medical expenses (2019)',
                  axisTicks: {
                    show: true
                  },
                  axisBorder: {
                    show: true,
                  },
                  title: {
                    text: 'Total medical expenses'
                  },
                  max: 80000000
                },
                {
                  seriesName: 'Total medical expenses (2020)',
                  show: false,
                  max: 80000000
                },
                {
                  opposite: true,
                  seriesName: 'Growth Rate (2019)',
                  axisTicks: {
                    show: true
                  },
                  axisBorder: {
                    show: true,
                  },
                  title: {
                    text: 'Growth Rate'
                  },
                  min: -50,
                  max: 200,
                  labels: {
                    formatter: function(value) {
                      return `${value}%`;
                    },
                  }
                },
                {
                  seriesName: 'Growth Rate (2020)',
                  show: false,
                  min: -50,
                  max: 200,
                  labels: {
                    formatter: function(value) {
                      return `${value}%`;
                    },
                  }
                },
              ],
              tooltip: {
                y: [
                  {
                    formatter: function(value) {
                      return `${value}원`
                    }
                  },
                  {
                    formatter: function(value) {
                      return `${value}원`
                    }
                  },
                  {
                    formatter: function(value) {
                      return `${value}%`
                    }
                  },
                  {
                    formatter: function(value) {
                      return `${value}%`
                    }
                  },
                ]
              },
              legend: {
                position: 'bottom',
              }
            }
          },
          gridInfo: {
            x: 0, y: 10, w: 8, h: 10, i: '2', static: false
          },
        },
        {
          chartInfo: {
            series: [
              {
                name: '2019 Year',
                data: [98, 72, 103, 85, 127, 102, 104, 78, 65, 133, 77, 72]
              },
              {
                name: '2020 Year',
                data: [74, 70, 109, 124, 143, 112, 118, 124, 126, 112, 108, 126]
              },
              {
                name: '2021 Year',
                data: [130, 57, 68, 79, 75, 74, null, null, null, null, null, null]
              }
            ],
            options: {
              chart: {
                type: 'bar',
              },
              title: {
                text: 'The number of new patients',
                align: 'center',
                style: {
                  fontSize: '18px',
                  fontWeight: 'bold',
                },
              },
              xaxis: {
                categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                labels: {
                  formatter: function(value) {
                    return `${value}Month`;
                  }
                },
              },
              dataLabels: {
                enabled: false
              },
              tooltip: {
                y: {
                  formatter: function(value) {
                    return `${value} Person`
                  }
                }
              },
              legend: {
                position: 'bottom',
              }
            }
          },
          gridInfo: {
            x: 6, y: 10, w: 6, h: 10, i: '3', static: false
          },
        },
        {
          chartInfo: {
            series: [
              {
                name: '2020 Year',
                data: [0, 1, 0, 1, 0, 0, 1, 2, 0, 0, 4, 3]
              },
              {
                name: '2021 Year',
                data: [0, 0, 18, 15, 5, 8, 4, 6, 0, 0, 1, 0]
              }
            ],
            options: {
              chart: {
                type: 'line',
              },
              title: {
                text: 'Cancellation rate',
                align: 'center',
                style: {
                  fontSize: '18px',
                  fontWeight: 'bold',
                },
              },
              xaxis: {
                categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                labels: {
                  formatter: function(value) {
                    return `${value}Month`;
                  }
                },
              },
              yaxis: {
                min: 0,
                max: 100,
                labels: {
                  formatter: function(value) {
                    return `${value}%`;
                  },
                }
              },
              dataLabels: {
                enabled: true,
                formatter: function(value) {
                  return `${value}%`;
                }
              },
              tooltip: {
                y: {
                  formatter: function(value) {
                    return `${value}%`
                  }
                }
              },
              legend: {
                position: 'bottom',
              }
            }
          },
          gridInfo: {
             x: 0, y: 20, w: 6, h: 10, i: '4', static: false
          },
        },
        {
          chartInfo: {
            series: [
              {
                name: 'The number of patients aged 65 or older',
                type: 'column',
                data: [113, 203, 118, 161, 141, 139, 198, 113, 134, 131, 128, 223, 216, 290, 177, 212]
              },
              {
                name: 'Growth Rate',
                type: 'line',
                data: [54, 46, 64, 43, 97, 108, 64, 79, 134, 109, 58, 5, 78, 79, 105, 58]
              }
            ],
            options: {
              chart: {
                type: 'line',
              },
              title: {
                text: 'The number of patients aged 65 or older',
                align: 'center',
                style: {
                  fontSize: '18px',
                  fontWeight: 'bold',
                },
              },
              xaxis: {
                categories: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2101', '2102', '2103', '2104', '2105', '2106'],
              },
              yaxis: [
                {
                  title: {
                    text: 'The number of patients'
                  }
                },
                {
                  opposite: true,
                  title: {
                    text: 'Growth Rate'
                  },
                  min: -50,
                  max: 200,
                  labels: {
                    formatter: function(value) {
                      return `${value}%`;
                    },
                  }
                },
              ],
              annotations: {
                yaxis: [{
                  y: 125,
                  borderColor: '#ff4560',
                  label: {
                    borderColor: '#ff4560',
                    style: {
                      color: '#fff',
                      background: '#ff4560',
                    },
                    text: 'The number of patients on starting date',
                  }
                }],
              },
              tooltip: {
                y: [
                  {
                    formatter: function(value) {
                      return `${value} Person`
                    }
                  },
                  {
                    formatter: function(value) {
                      return `${value}%`
                    }
                  },
                ]
              },
              legend: {
                position: 'bottom',
              }
            },
          },
          gridInfo: {
            x: 6, y: 20, w: 12, h: 12, i: '5', static: false
          }
        }
      ]"
    />
  </div>
</template>

<script>
import VuetifulBoard from '../../../src/components/VuetifulBoard.vue';
import palette from '../../../src/assets/palette.json';

export default {
  components: { VuetifulBoard },
  name: 'App',
  data() {
    return {
      theme: 'classic',
      darkMode: false,
      layoutEditable: true,
      colNum: 12,
      rowHeight: 30,
      palette: {
        type: Array,
        palette,
      },
    }
  },
  methods: {
    switchTheme(themeName) {
      this.theme = themeName;
    },
    setMonochromeColor(event) {
      this.theme = event.target.value;
    },
  },
}
</script>

<style lang="scss" scoped>
.dark-mode-toggle-button {
  margin-top: 10px;
  margin-bottom: 10px;
}

.theme-swatches {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0;
}

.theme-swatches-item {
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  text-align: center;
  transition: transform .2s cubic-bezier(.4, 0, .2, 1);

  &:hover {
    box-shadow: 0 2px 16px rgb(0 0 0 / 15%);
    transform: scale(1.05);
  }

  .theme-swatches-label {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding: 10px 15px;
    cursor: pointer;
  }

  .theme-swatches-checkbox {
    display: none;
  }

  .theme-swatches-name {
    display: block;
    color: #232323;
    font-size: 14px;
  } 
}

.editBtn {
  padding: 7px;
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>