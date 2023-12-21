let mainRight = document.getElementById('mainRight')
    let mains= document.getElementById('mains')
    let hiddenMenu = document.getElementById('hiddenMenu')
    let headerRB = document.getElementById('headerRB')
    window.addEventListener('scroll',function(){
        let scrollTop = document.documentElement.scrollTop
        console.log(scrollTop);
        if(scrollTop<80){
            mainRight.style.marginTop = scrollTop-80+'px'
            mainS.style.color='rgb(255, 255, 255'
            headerRB.style.color='rgb(255, 255, 255'
        }else if(scrollTop=80){
            mainRight.style.marginTop = 0+'px'
            mainS.style.color='rgb(16, 35, 64)'
            headerRB.style.color='rgb(16, 35, 64)'
           
        }
    })
    

    //   左边的隐藏盒子

let sidebar = document.querySelector(".sidebar");
let hamburger = document.querySelector(".hamburger");
let hamburgerContainer = document.querySelector(".hamburgerContainer");
const svghamburger = `<svg class="hamburger" t="1684005706799" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2380" width="20" height="20"><path d="M55.466667 123.733333h917.333333v42.666667H55.466667zM55.466667 490.666667h917.333333v42.666666H55.466667zM55.466667 857.6h917.333333v42.666667H55.466667z" fill="#283F59" p-id="2381"></path></svg>`;
const svgclose = `<svg class="hamburger" t="1684005801533" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3704" width="60" height="60"><path d="M550.848 502.496l308.64-308.896a31.968 31.968 0 1 0-45.248-45.248l-308.608 308.896-308.64-308.928a31.968 31.968 0 1 0-45.248 45.248l308.64 308.896-308.64 308.896a31.968 31.968 0 1 0 45.248 45.248l308.64-308.896 308.608 308.896a31.968 31.968 0 1 0 45.248-45.248l-308.64-308.864z" p-id="3705" fill="#283F59"></path></svg>`;

hamburgerContainer.addEventListener("click", function () {
  console.log(sidebar.classList);
  if (sidebar.classList.length === 2) {
    hamburgerContainer.innerHTML = svghamburger;
  } else {
    hamburgerContainer.innerHTML = svgclose;
  }
  sidebar.classList.toggle("open");
});
    
    let headerR = document.getElementById('headerR')
    let headerRTwo = document.getElementById('headerRTwo')
    let mainRightBox = document.getElementById ('mainRightBox')
    headerR.onclick = () =>{
        headerR.style.display='none'
        headerRTwo.style.display = 'block'
        mainRightBox.style.display= 'block'
    }
    headerRTwo.onclick=function(){
        headerR.style.display='block'
        headerRTwo.style.display = 'none'
        mainRightBox.style.display= 'none'
    }