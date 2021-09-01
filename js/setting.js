const colors = document.getElementsByClassName('colors');
// const bg = document.getElementsByClassName('star');
// const changeBg = document.getElementsByClassName('change_bg');
let i;
for(i=0;i<colors.length;i++){
    colors[i].addEventListener('click',changecolor);
}
function changecolor(){

    let color = this.getAttribute('data-color');
    let colordark = this.getAttribute('data-colordark')
    let primaryBg = this.getAttribute('data-bgcolor')
    let sideBg1 = this.getAttribute('data-sideBg1');
    let sideBg2 = this.getAttribute('data-sideBg2');
    let sideBg3 = this.getAttribute('data-sideBg3');
    let sideBg4 = this.getAttribute('data-sideBg4');
    let sideBg5 = this.getAttribute('data-sideBg5');
    let preview = this.getAttribute('data-preview')
    let mbActive = this.getAttribute('data-mbActive')
    // let chart1 = this.getAttribute('data-chart1')
    document.documentElement.style.setProperty('--primary',color);
    document.documentElement.style.setProperty('--primarydark',colordark);
    document.documentElement.style.setProperty('--primaryBg',primaryBg);
    document.documentElement.style.setProperty('--sideBg1',sideBg1);
    document.documentElement.style.setProperty('--sideBg2',sideBg2);
    document.documentElement.style.setProperty('--sideBg3',sideBg3);
    document.documentElement.style.setProperty('--sideBg4',sideBg4);
    document.documentElement.style.setProperty('--sideBg5',sideBg5);
    document.documentElement.style.setProperty('--preview',preview);
    document.documentElement.style.setProperty('--mb-active',mbActive);
    // document.documentElement.style.setProperty('--chart1',chart1);
    // document.documentElement.style.setProperty('--chart2',colordark);
    // document.documentElement.style.setProperty('--chart3',colordark);
    // document.documentElement.style.setProperty('--chart4',colordark);
    // document.documentElement.style.setProperty('--chart5',colordark);
    // document.documentElement.style.setProperty('--chart6',colordark);
    // document.documentElement.style.setProperty('--chart7',colordark);
    // document.documentElement.style.setProperty('--chart8',colordark);
    // document.documentElement.style.setProperty('--chart9',colordark);
    // document.documentElement.style.setProperty('--chart10',colordark);


}

document.querySelector(".change_bg").addEventListener("click",()=>{
    changeBgfun();
    changeBgFun2();
});
function changeBgfun(){
    let addTwinkled=document.querySelector('#addTwinkleid');
    if( addTwinkled && addTwinkled.style.display == 'block') {
        addTwinkled.style.display = 'none';}
    else{
    addTwinkled.style.display = 'block';
    }
}
function changeBgFun2(){
    console.log('butterfly')
    let butterfly = document.querySelector('#butterfly');
    console.log(butterfly);
    if( butterfly && butterfly.style.display == 'none') {
        butterfly.style.display = 'block';}
    else{
    butterfly.style.display = 'none';
    }
}

