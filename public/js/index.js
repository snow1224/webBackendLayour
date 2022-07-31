//控制sidebar點擊事件
const toggleMenuBtn = document.querySelector('#toggle-btn');
const body = document.querySelector('body');
toggleMenuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  body.classList.toggle('sidebar-toggled');
});
//控制sidebar點擊事件

// datepicker
$(function(){
  $('.datepicker').datepicker({
    format: 'yyyy/mm/dd',
  });
});
// datepicker

//篩選頁面，先篩選時間

function onDateFilt(){
  var date_item = document.querySelectorAll('div.datepicker input[type=text]');
  var i;
  var flag=true;
  for (i = 0; i < date_item.length; i++) {
      if(date_item[i].value===""){
          flag=false;
      }
  }
  console.log(flag);
  if(flag){
    var query_item = document.querySelectorAll('div.col-sm-12 select[class="form-select"]');
    for (i = 0; i < query_item.length; i++) {
      //console.log(query_item[i]);
      query_item[i].disabled="";
    }
  }
}


//

//繪製訓練圖表
// (() => {
//   const chartColors = {
//     red: 'rgb(255, 99, 132)',
//     orange: 'rgb(255, 159, 64)',
//     yellow: 'rgb(255, 205, 86)',
//     green: 'rgb(75, 192, 192)',
//     blue: 'rgb(54, 162, 235)',
//     purple: 'rgb(153, 102, 255)',
//     grey: 'rgb(201, 203, 207)'
//   };

//   var randomScalingFactor = function () {
//     return Math.round(Math.random() * 2000000);
//   };

//   const pieCtx = document.getElementById('pie-chart').getContext('2d');
//   const pieCtx2 = document.getElementById('pie-chart2').getContext('2d');
//   const train_config = {
//     type: 'doughnut',
//     data: {
//       datasets: [{
//         data: [
//           randomScalingFactor(),
//           randomScalingFactor()
//         ],
//         backgroundColor: [
//           chartColors.blue,
//           chartColors.red
//         ],
//         label: 'Dataset 1'
//       }],
//       labels: [
//         '預測正確',
//         '預測錯誤'
//       ]
//     },
//     options: {
//       responsive: true
//     }
//   };
//   const test_config = {
//     type: 'doughnut',
//     data: {
//       datasets: [{
//         data: [
//           randomScalingFactor(),
//           randomScalingFactor()
//         ],
//         backgroundColor: [
//           chartColors.blue,
//           chartColors.red
//         ],
//         label: 'Dataset 1'
//       }],
//       labels: [
//         '預測正確',
//         '預測錯誤'
//       ]
//     },
//     options: {
//       responsive: true
//     }
//   };
//   const pieChart = new Chart(pieCtx, train_config);
//   const pieChart2 = new Chart(pieCtx2, test_config);
// })();
//繪製訓練圖表