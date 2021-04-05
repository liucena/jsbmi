

//綁定dom

let sendbtn = document.querySelector('.bmi-btn');//btn
let  infor =  document.querySelector('.content ul');//渲染畫面位置
let inputBtn = document.querySelector('.inputBtn');
let btnDelete = document.querySelector('.delete_button')

let data = JSON.parse(localStorage.getItem('DataList')) || [];  //一進入網頁就讀取localsotage有沒有DataList內容 如果沒有就給予[]




//綁定事件
sendbtn.addEventListener('click',sendData);//綁定 btn 顯示內容
infor.addEventListener('click', toggleDone);//綁定刪除內容
result(data);//載入網頁時自動更新網頁內容
btnDelete.addEventListener('click', checkDelete);

function sendData(e){
    e.preventDefault();
    let weight = document.querySelector('.kgText').value;
let height = document.querySelector('.lhText').value;
    let weightInt = parseInt(weight);  //weight和height格式為string 將其型態轉為數字
    let heightInt = parseInt(height);
    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    let status = '';
    let color = '';
    let btn   = '';
    if(bmi<18.5){
        status = '過輕';
        color ='danger';
        btn = 'btnDanger';
        textColor = 'textDanger';
       
    }else if(18.5 <=bmi && bmi<24){
        status = '理想';
        color = 'success';
        btn = 'btnSuccess';
        textColor = 'textSuccess';
    }else if(24<=bmi && bmi<27){
        status = '過重';
        color = 'warning';
        btn = 'btnWarning';
        textColor = 'textWarning';
    }else if(27<=bmi && bmi<30){
        status = '輕度肥胖';
        color = 'info';
        btn = 'btnInfo';
        textColor = 'textInfo';
    }
    else if(30<=bmi && bmi<35){
        status = '中度肥胖';
        color = 'muted';
        btn = 'btnMuted';
        textColor = 'textMuted';
    }
    else if(bmi>35){
        status = '重度肥胖';
        color = 'dark';
        btn = 'btnDark';
        textColor = 'textDark';
    }else{
        return;
    }
    //組資料
    let d = new Date();
    let date = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();
    let newData = {
        status:status,
        color:color,
        bmi:bmi,
        height:heightInt,
        weight:weightInt,
        btn : btn,
        date:date
    };
    data.push(newData);//將新的data 存入DataList
    //updateList(Data);    
    result(data); //更新data資料
    
    localStorage.setItem('DataList',JSON.stringify(data));   //更新Localstorage的內容 
   
    //weight = '';
    //height = ''; 改成下面
    document.querySelector('.kgText').value = '';
document.querySelector('.lhText').value = '';
    inputBtn.innerHTML = `<div class="inputBtn"><input type="button" class="bmi-btn ${btn}" value="BMI ${bmi}"><h3 class="resultTitle ${textColor} ">${status}</h3><a href="bmi.html"><span class=" material-icons loop ${textColor}">loop</span></a>
    
    `
 
}
// 組資料
function result(items){
    let str = '';
    let btnstr = '';
    let len = items.length; //宣告 len 為 data 裡面的總內容數

    for (let i = 0; len > i; i++) {   
        str +=`
    <li><div class="border ${items[i].color}"></div><h4>${items[i].status}</h4>
    <p><span>BMI </span>${items[i].bmi}</p>
    <p><span>weight </span>${items[i].weight}kg</p>
    <p><span>height </span>${items[i].height}cm</p>
    <p>${items[i].date}</p><a href="#" data-index= ${i}>刪除</a></li>`

    }
   
  infor.innerHTML = str;


}


//刪除
function toggleDone(e) {
    e.preventDefault(); //取消 a 連結的預設行為
    if(e.target.nodeName !== 'A'){return}; //如果沒有點擊到 a 連結的話，就 return回去，不執行以下內容
    let index = e.target.dataset.index; //宣告 index 為 html 的 index
    data.splice(index, 1); // 刪除被點擊到的物件裡的該筆資料的第一個項目（也就是任務本身）
    localStorage.setItem('DataList', JSON.stringify(data)); // 因為陣列內容有被刪除的關係，所以需要重新載入一次陣列內容到 localStorage
    result(data);
  }
// 清理所有資料
  function checkDelete()
   { localStorage.clear();
    infor.innerHTML = '';

    }




