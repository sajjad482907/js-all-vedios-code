
const display=document.getElementById("display-var");

const calculate=(x)=>{
  display.value+=x;
}

const del=()=>{
    display.value=display.value.slice(0,-1);
  }

  const meter=()=>{
    form.display.value.length=form.display.value.length*100;
  }
  
