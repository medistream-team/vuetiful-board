<template>
  <div>
    <easy-chart-board
      :datasets="[
        {
          id: this.$uuid.v4(),
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
            id: this.$uuid.v4(),
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
        {
          id: this.$uuid.v4(),
          series: [186, 93, 30, 20, 21, 4, 20],
          options: {
            id: this.$uuid.v4(),
            chart: {
              type: 'pie',
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
        {
          id: this.$uuid.v4(),
          series: [
            {
              name: '총 진료비 (2019)',
              type: 'column',
              data: [46632870, 41584730, 52955270, 48567390, 58018330, 55539980, 58520700, 49065550, 50117730, 58495400, 48557530, 48517400],
            },
            {
              name: '총 진료비 (2020)',
              type: 'column',
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
            id: this.$uuid.v4(),
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
                min: 30000000
              },
              {
                seriesName: '총 진료비 (2020)',
                show: false
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
                }
              },
              {
                seriesName: '성장률 (2020)',
                show: false
              },
            ],
            legend: {
              position: 'bottom',
            }
          }
        },
      ]"
    />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped></style>