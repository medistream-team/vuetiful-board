<template>
  <div>
    <button class="editBtn" @click="layoutHandler">🖊</button>
    <easy-chart-board
      :colNum="12"
      :rowHeight="30"
      :layout-editable="layoutEditable"
      :datasets="[
        {
          id: this.$uuid.v4(), 
          chartInfo: {
            series: [
              {
                name: '간판',
                data: [27, 38, 19, 26, 19, 31, 27, 20, 28, 36, 37, 38],
              },
              {
                name: '지인 소개',
                data: [17, 11, 24, 26, 18, 14, 19, 12, 14, 17, 15, 16],
              },
              {
                name: '소문',
                data: [5, 5, 9, 12, 4, 6, 5, 3, 4, 4, 6, 8],
              },
              {
                name: '홈페이지',
                data: [2, 5, 4, 4, 2, 3, 6, 2, 2, 7, 2, 1],
              },
              {
                name: '네이버 블로그',
                data: [4, 1, 3, 1, 3, 3, 2, 2, 4, 4, 5, 4],
              },
              {
                name: '카톡 채널',
                data: [0, 0, 0, 1, 1, 0, 2, 1, 1, 0, 0, 0],
              },
              {
                name: '기타',
                data: [45, 1, 4, 7, 8, 7, 5, 3, 6, 4, 1, 1],
              },
            ],
            options: {
              chart: {
                type: 'bar',
                stacked: true,
                stackType: '100%'
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              title: {
                text: '최근 유입 경로 추이',
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
            x:0, y:0, w:6, h: 12, i:'0', static: false
          },
        },
        {
          id: this.$uuid.v4(),
          chartInfo: {
            series: [186, 93, 30, 20, 21, 4, 20],
            options: {
              chart: {
                type: 'pie',
                width: '100%'
              },
              title: {
                text: '최근 유입 경로 (2021년)',
                align: 'center',
                style: {
                  fontSize: '18px',
                  fontWeight: 'bold',
                },
              },
              labels: [
                '간판',
                '지인 소개',
                '소문',
                '홈페이지',
                '네이버 블로그',
                '카톡 채널',
                '기타',
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
        {
          id: this.$uuid.v4(),
          chartInfo: {
            series: [
              {
                name: '총 진료비 (2019)',
                type: 'bar',
                data: [46632870, 41584730, 52955270, 48567390, 58018330, 55539980, 58520700, 49065550, 50117730, 58495400, 48557530, 48517400],
              },
              {
                name: '총 진료비 (2020)',
                type: 'bar',
                data: [39924170, 41147250, 35482200, 40162390, 67997690, 64065550, 49789670, 46006220, 47063870, 50758110, 47677190, 49274240]
              },
              {
                name: '성장률 (2019)',
                type: 'line',
                data: [null, null, null, null, null, null, null, null, 160, 34, 13, 32]
              },
              {
                name: '성장률 (2020)',
                type: 'line',
                data: [-14, -1, -33, -17, 17, 15, -15, -6, -6, -13, -2, 2]
              },
            ],
            options: {
              chart: {
                type: 'line',
              },
              title: {
                text: '총 진료비',
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
                    return `${value}월`;
                  }
                }
              },
              yaxis: [
                {
                  seriesName: '총 진료비 (2019)',
                  axisTicks: {
                    show: true
                  },
                  axisBorder: {
                    show: true,
                  },
                  title: {
                    text: '총 진료비'
                  },
                  max: 80000000
                },
                {
                  seriesName: '총 진료비 (2020)',
                  show: false,
                  max: 80000000
                },
                {
                  opposite: true,
                  seriesName: '성장률 (2019)',
                  axisTicks: {
                    show: true
                  },
                  axisBorder: {
                    show: true,
                  },
                  title: {
                    text: '성장률'
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
                  seriesName: '성장률 (2020)',
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
            x: 0, y:10, w:6, h: 12, i: '2', static: false
          },
        },
        {
          id: this.$uuid.v4(),
          chartInfo: {
            series: [
              {
                name: '2019년',
                data: [104, 87, 110, 105, 137, 112, 114, 108, 85, 103, 87, 78]
              },
              {
                name: '2020년',
                data: [82, 60, 102, 114, 166, 142, 117, 104, 106, 136, 122, 105]
              },
              {
                name: '2021년',
                data: [128, 87, 58, 74, 73, 73, null, null, null, null, null, null]
              }
            ],
            options: {
              chart: {
                type: 'bar',
              },
              title: {
                text: '신규 환자 수',
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
                    return `${value}월`;
                  }
                },
              },
              dataLabels: {
                enabled: false
              },
              tooltip: {
                y: {
                  formatter: function(value) {
                    return `${value}명`
                  }
                }
              },
              legend: {
                position: 'bottom',
              }
            }
          },
          gridInfo: {
            x: 6, y: 10, w: 6, h: 12, i: '3', static: false
          },
        },
        {
          id: this.$uuid.v4(),
          chartInfo: {
            series: [
              {
                name: '2020년',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              },
              {
                name: '2021년',
                data: [0, 0, 20, 17, 8, 10, 0, 0, 0, 0, 0, 0]
              }
            ],
            options: {
              chart: {
                type: 'line',
              },
              title: {
                text: '예약 취소율',
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
                    return `${value}월`;
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
            x: 0, y: 20, w:6, h: 12, i: '4', static: false
          },
        },
        {
          id: this.$uuid.v4(),
          chartInfo: {
            series: [
              {
                name: '65세 이상 환자 수',
                type: 'column',
                data: [125, 207, 218, 191, 241, 258, 204, 217, 294, 252, 208, 126, 217, 259, 257, 213]
              },
              {
                name: '성장률',
                type: 'line',
                data: [null, 66, 74, 53, 93, 106, 63, 74, 135, 102, 66, 1, 74, 107, 106, 70]
              }
            ],
            options: {
              chart: {
                type: 'line',
              },
              title: {
                text: '시작일 대비 65세 이상 환자 수',
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
                    text: '환자 수'
                  }
                },
                {
                  opposite: true,
                  title: {
                    text: '성장률'
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
                    text: '시작일 환자 수',
                  }
                }],
              },
              tooltip: {
                y: [
                  {
                    formatter: function(value) {
                      return `${value}명`
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
            x: 6, y: 20, w: 6, h: 12, i: '5', static: false
          }
        }
      ]"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      layoutEditable: true,
    }
  },
  methods: {
    layoutHandler() {
      this.layoutEditable = !this.layoutEditable
    }
  }
}
</script>

<style lang="scss" scoped>  
.editBtn {
  margin-left: 80px;
  padding: 7px;
  border: 1px solid white;
  border-radius: 5px;
  background: white;
}
</style>
