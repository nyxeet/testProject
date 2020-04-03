function sendForm(e){
	var keyBox = document.search.key;
	var val = keyBox.value;
	if(val.length<5){
		alert("Недопустимая длина");
		e.preventDefault();
	}
	else
		alert("Отправка разрешена");
}
var sendutton=document.search.send;
sendButton.addEventListener("click", sendForm);