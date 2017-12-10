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
		console.info("NOPE :)")
	}
}

document.forms["decryptForm"].onsubmit = function(e){
	decryptContent()
	return false
}
