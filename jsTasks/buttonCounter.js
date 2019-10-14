var  button = document.createElement('button')
button.id = 'button'
document.body.appendChild(button)
var button1 = document.getElementById('button');
function count(el){
	var counter= 0;
	el.onclick =  function(){
        counter++;
        el.innerText = counter;
    }
}
count(button1)