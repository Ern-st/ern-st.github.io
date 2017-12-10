//helper just for me :)
encryptContent = function(){
	secret = document.forms["decryptForm"].elements["key"].value.trim()
	content = document.getElementsByClassName("inner")[0].innerHTML
	encryptedContent = CryptoJS.AES.encrypt(content, secret);
	console.log(encryptedContent.toString())
}

//decrypt the content of ".inner", jekyll automatically wraps the encrypted content in <p> tags, so we need to go deeper!
decryptContent = function(){
	secret = document.forms["decryptForm"].elements["key"].value.trim()
	innerContainer = document.getElementsByClassName("inner")[0]
	encryptedContent = innerContainer.getElementsByTagName("p")[0].innerHTML
	content = CryptoJS.AES.decrypt(encryptedContent, secret);
	try{
		innerContainer.innerHTML = content.toString(CryptoJS.enc.Utf8)
		innerContainer.setAttribute("data-encrypted","false")
	} catch (e) {
		//could not decrypt to valid utf-8!
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
