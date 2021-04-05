let data = [];// 初始化 預備抓資料用
let str = '';
let listStr = '';
//dom
let title = document.querySelector('.title');//'綁定h2目標點選會顯示切換對應地區
let list = document.querySelector('.list');//要渲染的內容 
let button = document.querySelector('.nav-region');//綁定按鈕不能使用button(沒值)使用input ? 
let change = document.querySelector('.region');//綁定下拉選單

//點擊事件
button.addEventListener('click', check);
//change 事件
change.addEventListener('change', changeCheck);
//axios  data資料
axios.get('https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json').then(function (response) {
  data = response.data.result.records;
  console.log(data);
  let str = ""
  let strTitle = ""
  //初始化預設資料
  function init(){
  data.forEach(function (item, index) {
    if (item.Zone == "苓雅區") {
      strTitle = `<h2>${item.Zone}</h2>`
      str += `<li class="list-item">
      <div class="list-photo">
      <img class="list_img" src="${item.Picture1}" alt="">
      <p class="list_title white">${item.Name}</p>
      <span class="white">${item.Zone}</span>
 </div>
 <div class="container">
 <ul class="infor">
 <li><img class="icon"  src="./img/icons_clock.png" alt="">${item.Opentime}</li>
<li><img class="icon"  src="./img/icons_pin.png" alt="">${item.Add}</li>
<li class="d-flex jcsb">
<p><img class="icon"  src="./img/icons_phone.png" alt=""> ${item.Tel}</p>
<p><img class="icon"  src="./img/icons_tag.png" alt="">${item.Ticketinfo}</p>
</div>
 </li>`
    }
  })
  //更新渲染
  list.innerHTML = str;
 //title.textContent = strTitle;
 title.innerHTML = strTitle;
  }
  //初始化設定
  init();
})

function changeCheck(e) {
  let str = ""
  let strTitle = ""
 
  data.forEach(function (item, index) {
    if (e.target.value == item.Zone) {
      strTitle = `${item.Zone}`
      str += `<li class="list-item">
      <div class="list-photo">
      <img class="list_img" src="${item.Picture1}" alt="">
      <p class="list_title white">${item.Name}</p>
      <span class="white">${item.Zone}</span>
 </div>
 <div class="container">
 <ul class="infor">
 <li><img class="icon"  src="./img/icons_clock.png" alt="">${item.Opentime}</li>
<li><img class="icon"  src="./img/icons_pin.png" alt="">${item.Add}</li>
<li class="d-flex jcsb">
<p><img class="icon"  src="./img/icons_phone.png" alt=""> ${item.Tel}</p>
<p><img class="icon"  src="./img/icons_tag.png" alt="">${item.Ticketinfo}</p>
</div>
 </li>`
    }
  })
  //更新渲染
  title.textContent = strTitle;
  list.innerHTML = str;
}
function check(e) {
  let str = ""
  let strTitle = ""
  if (e.target.value == undefined){
    return ;
  }
  data.forEach(function (item, index) {
    
    if (e.target.value == item.Zone) {
      strTitle = `${item.Zone}`
      str += `<li class="list-item">
      <div class="list-photo">
      <img class="list_img" src="${item.Picture1}" alt="">
      <p class="list_title white">${item.Name}</p>
      <span class="white">${item.Zone}</span>
 </div>
 <div class="container">
 <ul class="infor">
 <li><img class="icon"  src="./img/icons_clock.png" alt="">${item.Opentime}</li>
<li><img class="icon"  src="./img/icons_pin.png" alt="">${item.Add}</li>
<li class="d-flex jcsb">
<p><img class="icon"  src="./img/icons_phone.png" alt=""> ${item.Tel}</p>
<p><img class="icon"  src="./img/icons_tag.png" alt="">${item.Ticketinfo}</p>
</div>
 </li>`
    }
  })
  //更新渲染
  list.innerHTML = str;
  title.textContent = strTitle;
}