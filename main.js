
let c= document.getElementsByClassName('box');
let d=c.length;
let f = document.getElementsByClassName('forward');
let b = document.getElementsByClassName('backward');
let index=[];
function push_Zindex (){
    for(let i=0;i<d;i++)
        {
            index.push(20-i);
            c[i].style.zIndex=20-i;
        }
}
push_Zindex();
function forward()
{   
    let x = index[d-1];
    for(let i=d-1;i>0;i--)
        {
            index[i]=index[i-1];
        }
        index[0]=x; 
     for(let i=0;i<=d-1;i++)
        {
            c[i].style.zIndex=index[i];
        }
};
f[0].addEventListener('click', forward);
function backward()
{
    let x = index[0];
    for(let i=0;i<d-1;i++)
        {
            index[i]=index[i+1];
        }
        index[d-1]=x;
    for(let i=0;i<d;i++)
        {
            c[i].style.zIndex=index[i];
        }

}
b[0].addEventListener('click', backward);
