/**
 * 請使用 axios 串接以上資料，計算各個小組的總人數有多少，並將資料透過 console.log 輸出如下:
 * * */
let data  = [];

axios.get('https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json')
//response 回傳
.then(function (response) {
  
  data = response.data;
  let total = {};
  data.forEach(function(item,index){
    if(total[item.jsGroup]==undefined){
      total[item.jsGroup] = 1;
    }else{
       total[item.jsGroup] +=1;
    }
  })
  
  console.log(total);
})
