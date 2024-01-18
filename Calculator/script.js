function clearDisplay(){
    document.getElementById('result').value = '';
}

function numsChar(e){
    if(isNaN(e.key) && e.key !== '.' && e.key !== '+' && e.key !== '-' && e.key !== '*' && e.key !== '/' && e.key !== '%') e.preventDefault();
  }

function removeElement(){
    let currentdisplay = document.getElementById("result").value;
    document.getElementById('result').value = currentdisplay.slice(0, -1);
}

function addElement(ele){
    document.getElementById("result").value+=ele;
}

function equals(){    
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

result.addEventListener("keydown", function(event) {
    if(event.keyCode === 13 || event.key === '=') equals();
})