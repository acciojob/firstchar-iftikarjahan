function firstChar(text) {
  let str=text.trim();
	if(str.length==0)return "";
	else{
		return text[0];
	}
}

// Do not change the code below

// const text = prompt("Enter text:");
alert(firstChar(text));
