//helper just for me :)
encryptContent = function(secret){
	content = document.getElementsByClassName("inner")[0].innerHTML
	encryptedContent = CryptoJS.AES.encrypt(content, secret);
	console.log(encryptedContent.toString())
}

decryptContent = function(){
	secret = document.forms["decryptForm"].elements["key"].value.trim()
	innerContainer = document.getElementsByClassName("inner")[0]
	encryptedContent = innerContainer.getElementsByTagName("p")[0].innerHTML
	content = CryptoJS.AES.decrypt(encryptedContent, secret);
	try{
		innerContainer.innerHTML = content.toString(CryptoJS.enc.Utf8)
	} catch (e) {
		nope()
	}
}

nope = function(){
	form = document.forms["decryptForm"]
	form.setAttribute("class","poop")
	form.elements["key"].value = "NOPE 💩 NOPE 💩 NOPE 💩 NOPE 💩"
	setTimeout(function(){
		form.setAttribute("class","")
		form.elements["key"].value = ""
	},1000)
}

document.forms["decryptForm"].onsubmit = function(e){
	decryptContent()
	return false
}
