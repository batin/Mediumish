console.log("we are on login page")
const mail = $("#inputEmail")
const password = $("#inputPassword")
const animateDiv = $("#login-div")
const message = $("#message-div")
const countKeyUp = function() {
  let number = 0
  const counter = function (){
    number = number + 1
    return number
  }
  return counter
}
const keyUpCounter = countKeyUp()

password.focus( function(){
  animateDiv.html('<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">'+
  '<path d="M147 75C147 114.765 114.765 147 75 147C35.2355 147 3 114.765 3 75C3 35.2355 35.2355 3 75 3C114.765 3 147 35.2355 147 75Z" fill="white" stroke="#007BFF" stroke-width="6"/>'+
  '<path d="M60.5 100C62.1667 98.3333 66.2 96 69 100" stroke="black"/>'+
  '<path d="M110 75C110 102.614 102.114 125 74.5 125C46.8858 125 41 102.614 41 75C41 47.3858 46.8858 25 74.5 25C102.114 25 110 47.3858 110 75Z" fill="#C4C4C4"/>'+
  '<path d="M72.5396 65.9806C70.2238 69.2591 65.8691 76.4894 66.9762 79.1828C68.0832 81.8762 72.5208 83.7601 74.6012 84.3654C76.9015 83.9397 81.6775 81.9618 82.3796 77.4555C83.0818 72.9491 79.8674 68.5131 78.1725 66.8583" stroke="black" stroke-width="2"/>'+
  '<circle cx="86" cy="55" r="11" fill="white"/>'+
  '<circle cx="86" cy="55" r="11" fill="white"/>'+
  '<circle cx="86" cy="55" r="11" fill="white"/>'+
  '<circle cx="86" cy="55" r="11" fill="white"/>'+
  '<circle cx="86" cy="55" r="11" stroke="black" stroke-width="2"/>'+
  '<circle cx="88.5" cy="61.5" r="2.5" fill="black"/>'+
  '<circle cx="66" cy="55" r="11" fill="white"/>'+
  '<circle cx="66" cy="55" r="11" fill="white"/>'+
  '<circle cx="66" cy="55" r="11" fill="white"/>'+
  '<circle cx="66" cy="55" r="11" fill="white"/>'+
  '<circle cx="66" cy="55" r="11" stroke="black" stroke-width="2"/>'+
  '<path d="M71 61.5C71 62.8807 69.8807 64 68.5 64C67.1193 64 66 62.8807 66 61.5C66 60.1193 67.1193 59 68.5 59C69.8807 59 71 60.1193 71 61.5Z" fill="black"/>'+
  '<path d="M79 18C75.1667 20 68.3 24.9 71.5 28.5C74.7 32.1 72.8333 36 71.5 37.5" stroke="black" stroke-width="2"/>'+
  '<path d="M65 98C65 112.5 90 117.5 90 98" stroke="black" stroke-width="2"/>'+
  '<path d="M28.5632 47.7371L48.3323 33.5549C48.8217 33.2039 49.4523 33.0835 50.0204 33.2836C57.4053 35.884 50.9392 42.1111 46.6058 45C53.2725 44.3333 67.4058 43.1 70.6058 43.5C73.8058 43.9 73.9392 48.3333 73.6058 50.5C82.0058 52.9 77.1058 57.1667 73.6058 59C78.0058 63.4 72.7725 66.5 69.6058 67.5C72.8058 67.5 71.6058 71.5 70.6058 73.5C65.1058 76.3333 34.6058 77 34.6058 77C20.734 73.4431 21.9121 60.3976 24.9214 52.2775C25.6113 50.4161 26.9502 48.8943 28.5632 47.7371Z" fill="#C4C4C4"/>'+
  '<path d="M69.6058 67.5C72.8058 67.5 71.6058 71.5 70.6058 73.5C65.1058 76.3333 34.6058 77 34.6058 77C20.734 73.4431 21.9121 60.3976 24.9214 52.2775C25.6113 50.4161 26.9502 48.8943 28.5632 47.7371L48.3323 33.5549C48.8217 33.2039 49.4523 33.0835 50.0204 33.2836C57.4053 35.884 50.9392 42.1111 46.6058 45C53.2725 44.3333 67.4058 43.1 70.6058 43.5C73.8058 43.9 73.9392 48.3333 73.6058 50.5M69.6058 67.5C66.4058 67.5 60.2725 67.8333 57.6058 68L69.6058 67.5ZM69.6058 67.5C72.7725 66.5 78.0058 63.4 73.6058 59M73.6058 59L56.6058 60M73.6058 59C77.1058 57.1667 82.0058 52.9 73.6058 50.5M73.6058 50.5L56.6058 52" stroke="black" stroke-width="2"/>'+
  '<path d="M123.681 47.7371L103.912 33.5549C103.422 33.2039 102.792 33.0835 102.223 33.2836C94.8386 35.884 101.305 42.1111 105.638 45C98.9714 44.3333 84.8381 43.1 81.6381 43.5C78.4381 43.9 78.3047 48.3333 78.6381 50.5C70.2381 52.9 75.1381 57.1667 78.6381 59C74.2381 63.4 79.4714 66.5 82.6381 67.5C79.4381 67.5 80.6381 71.5 81.6381 73.5C87.1381 76.3333 117.638 77 117.638 77C131.51 73.4431 130.332 60.3976 127.322 52.2775C126.633 50.4161 125.294 48.8943 123.681 47.7371Z" fill="#C4C4C4"/>'+
  '<path d="M82.6381 67.5C79.4381 67.5 80.6381 71.5 81.6381 73.5C87.1381 76.3333 117.638 77 117.638 77C131.51 73.4431 130.332 60.3976 127.322 52.2775C126.633 50.4161 125.294 48.8943 123.681 47.7371L103.912 33.5549C103.422 33.2039 102.792 33.0835 102.223 33.2836C94.8386 35.884 101.305 42.1111 105.638 45C98.9714 44.3333 84.8381 43.1 81.6381 43.5C78.4381 43.9 78.3047 48.3333 78.6381 50.5M82.6381 67.5C85.8381 67.5 91.9714 67.8333 94.6381 68L82.6381 67.5ZM82.6381 67.5C79.4714 66.5 74.2381 63.4 78.6381 59M78.6381 59L95.6381 60M78.6381 59C75.1381 57.1667 70.2381 52.9 78.6381 50.5M78.6381 50.5L95.6381 52" stroke="black" stroke-width="2"/>'+
  '</svg>'

)
message.addClass("eposta")
message.html('<p class="message-popup"> Bakmıyorum şifreni rahat girebilirsin</p>')
})

mail.keyup(function(){
  const keyUP = keyUpCounter()
  console.log(keyUP)
  if(keyUP <5){
    animateDiv.html('<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M147 75C147 114.765 114.765 147 75 147C35.2355 147 3 114.765 3 75C3 35.2355 35.2355 3 75 3C114.765 3 147 35.2355 147 75Z" fill="white" stroke="#007BFF" stroke-width="6"/>'+
    '<path d="M110 75C110 102.614 102.114 125 74.5 125C46.8858 125 41 102.614 41 75C41 47.3858 46.8858 25 74.5 25C102.114 25 110 47.3858 110 75Z" fill="#C4C4C4"/>'+
    '<path d="M72.5396 65.9806C70.2238 69.2591 65.8691 76.4894 66.9762 79.1828C68.0832 81.8762 72.5208 83.7601 74.6012 84.3654C76.9015 83.9397 81.6775 81.9618 82.3796 77.4555C83.0818 72.9491 79.8674 68.5131 78.1725 66.8583" stroke="black" stroke-width="2"/>'+
    '<circle cx="86" cy="55" r="11" fill="white"/>'+
    '<circle cx="86" cy="55" r="11" fill="white"/>'+
    '<circle cx="86" cy="55" r="11" fill="white"/>'+
    '<circle cx="86" cy="55" r="11" fill="white"/>'+
    '<circle cx="86" cy="55" r="11" stroke="black" stroke-width="2"/>'+
    '<circle cx="80.5" cy="59.5" r="2.5" fill="black"/>'+
    '<circle cx="66" cy="55" r="11" fill="white"/>'+
    '<circle cx="66" cy="55" r="11" fill="white"/>'+
    '<circle cx="66" cy="55" r="11" fill="white"/>'+
    '<circle cx="66" cy="55" r="11" fill="white"/>'+
    '<circle cx="66" cy="55" r="11" stroke="black" stroke-width="2"/>'+
    '<path d="M63 59.5C63 60.8807 61.8807 62 60.5 62C59.1193 62 58 60.8807 58 59.5C58 58.1193 59.1193 57 60.5 57C61.8807 57 63 58.1193 63 59.5Z" fill="black"/>'+
    '<path d="M79 18C75.1667 20 68.3 24.9 71.5 28.5C74.7 32.1 72.8333 36 71.5 37.5" stroke="black" stroke-width="2"/>'+
    '<path d="M65 98C69.8333 100.667 81.6 104.4 90 98" stroke="black" stroke-width="2"/>'+
    '</svg>'

    )
  }else if (keyUP < 10) {
    animateDiv.html('<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">'+
    '<path d="M147 75C147 114.765 114.765 147 75 147C35.2355 147 3 114.765 3 75C3 35.2355 35.2355 3 75 3C114.765 3 147 35.2355 147 75Z" fill="white" stroke="#007BFF" stroke-width="6"/>'+
    '<path d="M110 75C110 102.614 102.114 125 74.5 125C46.8858 125 41 102.614 41 75C41 47.3858 46.8858 25 74.5 25C102.114 25 110 47.3858 110 75Z" fill="#C4C4C4"/>'+
    '<path d="M72.5396 65.9806C70.2238 69.2591 65.8691 76.4894 66.9762 79.1828C68.0832 81.8762 72.5208 83.7601 74.6012 84.3654C76.9015 83.9397 81.6775 81.9618 82.3796 77.4555C83.0818 72.9491 79.8674 68.5131 78.1725 66.8583" stroke="black" stroke-width="2"/>'+
    '<circle cx="86" cy="55" r="11" fill="white"/>'+
    '<circle cx="86" cy="55" r="11" fill="white"/>'+
    '<circle cx="86" cy="55" r="11" fill="white"/>'+
    '<circle cx="86" cy="55" r="11" fill="white"/>'+
    '<circle cx="86" cy="55" r="11" stroke="black" stroke-width="2"/>'+
    '<circle cx="82.5" cy="60.5" r="2.5" fill="black"/>'+
    '<circle cx="66" cy="55" r="11" fill="white"/>'+
    '<circle cx="66" cy="55" r="11" fill="white"/>'+
    '<circle cx="66" cy="55" r="11" fill="white"/>'+
    '<circle cx="66" cy="55" r="11" fill="white"/>'+
    '<circle cx="66" cy="55" r="11" stroke="black" stroke-width="2"/>'+
    '<path d="M64 60.5C64 61.8807 62.8807 63 61.5 63C60.1193 63 59 61.8807 59 60.5C59 59.1193 60.1193 58 61.5 58C62.8807 58 64 59.1193 64 60.5Z" fill="black"/>'+
    '<path d="M79 18C75.1667 20 68.3 24.9 71.5 28.5C74.7 32.1 72.8333 36 71.5 37.5" stroke="black" stroke-width="2"/>'+
    '<path d="M65 98C69.8333 100.667 81.6 104.4 90 98" stroke="black" stroke-width="2"/>'+
    '</svg>'

    )
  }else if (keyUP < 15){
    animateDiv.html('<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">'+
    '<path d="M147 75C147 114.765 114.765 147 75 147C35.2355 147 3 114.765 3 75C3 35.2355 35.2355 3 75 3C114.765 3 147 35.2355 147 75Z" fill="white" stroke="#007BFF" stroke-width="6"/>'+
    '<path d="M110 75C110 102.614 102.114 125 74.5 125C46.8858 125 41 102.614 41 75C41 47.3858 46.8858 25 74.5 25C102.114 25 110 47.3858 110 75Z" fill="#C4C4C4"/>'+
    '<path d="M72.5396 65.9806C70.2238 69.2591 65.8691 76.4894 66.9762 79.1828C68.0832 81.8762 72.5208 83.7601 74.6012 84.3654C76.9015 83.9397 81.6775 81.9618 82.3796 77.4555C83.0818 72.9491 79.8674 68.5131 78.1725 66.8583" stroke="black" stroke-width="2"/>'+
    '<circle cx="86" cy="55" r="11" fill="white"/>'+
    '<circle cx="86" cy="55" r="11" fill="white"/>'+
    '<circle cx="86" cy="55" r="11" fill="white"/>'+
    '<circle cx="86" cy="55" r="11" fill="white"/>'+
    '<circle cx="86" cy="55" r="11" stroke="black" stroke-width="2"/>'+
    '<circle cx="84.5" cy="61.5" r="2.5" fill="black"/>'+
    '<circle cx="66" cy="55" r="11" fill="white"/>'+
    '<circle cx="66" cy="55" r="11" fill="white"/>'+
    '<circle cx="66" cy="55" r="11" fill="white"/>'+
    '<circle cx="66" cy="55" r="11" fill="white"/>'+
    '<circle cx="66" cy="55" r="11" stroke="black" stroke-width="2"/>'+
    '<path d="M67 61.5C67 62.8807 65.8807 64 64.5 64C63.1193 64 62 62.8807 62 61.5C62 60.1193 63.1193 59 64.5 59C65.8807 59 67 60.1193 67 61.5Z" fill="black"/>'+
    '<path d="M79 18C75.1667 20 68.3 24.9 71.5 28.5C74.7 32.1 72.8333 36 71.5 37.5" stroke="black" stroke-width="2"/>'+
    '<path d="M65 98C67.5 106 80.5 111.5 90 98" stroke="black" stroke-width="2"/>'+
    '</svg>'
)
}else if(keyUP <17){
  animateDiv.html('<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">'+
  '<path d="M147 75C147 114.765 114.765 147 75 147C35.2355 147 3 114.765 3 75C3 35.2355 35.2355 3 75 3C114.765 3 147 35.2355 147 75Z" fill="white" stroke="#007BFF" stroke-width="6"/>'+
  '<path d="M110 75C110 102.614 102.114 125 74.5 125C46.8858 125 41 102.614 41 75C41 47.3858 46.8858 25 74.5 25C102.114 25 110 47.3858 110 75Z" fill="#C4C4C4"/>'+
  '<path d="M72.5396 65.9806C70.2238 69.2591 65.8691 76.4894 66.9762 79.1828C68.0832 81.8762 72.5208 83.7601 74.6012 84.3654C76.9015 83.9397 81.6775 81.9618 82.3796 77.4555C83.0818 72.9491 79.8674 68.5131 78.1725 66.8583" stroke="black" stroke-width="2"/>'+
  '<circle cx="86" cy="55" r="11" fill="white"/>'+
  '<circle cx="86" cy="55" r="11" fill="white"/>'+
  '<circle cx="86" cy="55" r="11" fill="white"/>'+
  '<circle cx="86" cy="55" r="11" fill="white"/>'+
  '<circle cx="86" cy="55" r="11" stroke="black" stroke-width="2"/>'+
  '<circle cx="86.5" cy="61.5" r="2.5" fill="black"/>'+
  '<circle cx="66" cy="55" r="11" fill="white"/>'+
  '<circle cx="66" cy="55" r="11" fill="white"/>'+
  '<circle cx="66" cy="55" r="11" fill="white"/>'+
  '<circle cx="66" cy="55" r="11" fill="white"/>'+
  '<circle cx="66" cy="55" r="11" stroke="black" stroke-width="2"/>'+
  '<path d="M68 61.5C68 62.8807 66.8807 64 65.5 64C64.1193 64 63 62.8807 63 61.5C63 60.1193 64.1193 59 65.5 59C66.8807 59 68 60.1193 68 61.5Z" fill="black"/>'+
  '<path d="M79 18C75.1667 20 68.3 24.9 71.5 28.5C74.7 32.1 72.8333 36 71.5 37.5" stroke="black" stroke-width="2"/>'+
  '<path d="M65 98C66.5 112.5 86.5 112 90 98" stroke="black" stroke-width="2"/>'+
  '</svg>'
)
} else {
  animateDiv.html('<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">'+
  '<path d="M147 75C147 114.765 114.765 147 75 147C35.2355 147 3 114.765 3 75C3 35.2355 35.2355 3 75 3C114.765 3 147 35.2355 147 75Z" fill="white" stroke="#007BFF" stroke-width="6"/>'+
  '<path d="M60.5 100C62.1667 98.3333 66.2 96 69 100" stroke="black"/>'+
  '<path d="M110 75C110 102.614 102.114 125 74.5 125C46.8858 125 41 102.614 41 75C41 47.3858 46.8858 25 74.5 25C102.114 25 110 47.3858 110 75Z" fill="#C4C4C4"/>'+
  '<path d="M72.5396 65.9806C70.2238 69.2591 65.8691 76.4894 66.9762 79.1828C68.0832 81.8762 72.5208 83.7601 74.6012 84.3654C76.9015 83.9397 81.6775 81.9618 82.3796 77.4555C83.0818 72.9491 79.8674 68.5131 78.1725 66.8583" stroke="black" stroke-width="2"/>'+
  '<circle cx="86" cy="55" r="11" fill="white"/>'+
  '<circle cx="86" cy="55" r="11" fill="white"/>'+
  '<circle cx="86" cy="55" r="11" fill="white"/>'+
  '<circle cx="86" cy="55" r="11" fill="white"/>'+
  '<circle cx="86" cy="55" r="11" stroke="black" stroke-width="2"/>'+
  '<circle cx="88.5" cy="61.5" r="2.5" fill="black"/>'+
  '<circle cx="66" cy="55" r="11" fill="white"/>'+
  '<circle cx="66" cy="55" r="11" fill="white"/>'+
  '<circle cx="66" cy="55" r="11" fill="white"/>'+
  '<circle cx="66" cy="55" r="11" fill="white"/>'+
  '<circle cx="66" cy="55" r="11" stroke="black" stroke-width="2"/>'+
  '<path d="M71 61.5C71 62.8807 69.8807 64 68.5 64C67.1193 64 66 62.8807 66 61.5C66 60.1193 67.1193 59 68.5 59C69.8807 59 71 60.1193 71 61.5Z" fill="black"/>'+
  '<path d="M79 18C75.1667 20 68.3 24.9 71.5 28.5C74.7 32.1 72.8333 36 71.5 37.5" stroke="black" stroke-width="2"/>'+
  '<path d="M65 98C65 112.5 90 117.5 90 98" stroke="black" stroke-width="2"/>'+
  '</svg>'
)
message.addClass("eposta")
message.html('<p class="message-popup"> Wow güzel mail</p>')
}

})


animateDiv.html('<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">'+
'<path d="M147 75C147 114.765 114.765 147 75 147C35.2355 147 3 114.765 3 75C3 35.2355 35.2355 3 75 3C114.765 3 147 35.2355 147 75Z" fill="white" stroke="#007BFF" stroke-width="6"/>'+
'<path d="M110 75C110 102.614 102.114 125 74.5 125C46.8858 125 41 102.614 41 75C41 47.3858 46.8858 25 74.5 25C102.114 25 110 47.3858 110 75Z" fill="#C4C4C4"/>'+
'<path d="M76.5 57C79 60 85.8 64.2 93 57" stroke="black" stroke-width="2"/>'+
'<path d="M55.5 57C58 60 64.8 64.2 72 57" stroke="black" stroke-width="2"/>'+
'<path d="M72.5396 65.9806C70.2238 69.2591 65.8691 76.4894 66.9762 79.1828V79.1828C69.3426 84.9403 79.6017 84.7504 81.9551 78.9876C82.1489 78.5131 82.2943 78.0029 82.3796 77.4555C83.0818 72.9491 79.8674 68.5131 78.1725 66.8583" stroke="black" stroke-width="2"/>'+
'<circle cx="81.5" cy="98" r="5" fill="white"/>'+
'<path d="M92 86.5L92.1294 86.4076C93.3377 85.5445 94.9789 86.6056 94.6877 88.0617V88.0617C94.415 89.425 95.8577 90.4867 97.0782 89.821L99.5 88.5" stroke="black"/>'+
'<path d="M85.5 90.3333L85.569 90.284C86.2134 89.8237 87.0887 90.3897 86.9334 91.1663V91.1663C86.788 91.8934 87.5574 92.4596 88.2084 92.1045L89.5 91.4" stroke="black"/>'+
'<path d="M97.5 77V77C98.292 76.3212 99.4996 77.0025 99.3281 78.0314L99.2866 78.2804C99.1135 79.319 100.259 80.0667 101.14 79.49L102.5 78.6" stroke="black"/>'+
'<path d="M79 18C75.1667 20 68.3 24.9 71.5 28.5C74.7 32.1 72.8333 36 71.5 37.5" stroke="black" stroke-width="2"/>'+
'</svg>'

)
mail.focus(function(){
  animateDiv.html('<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">'+
  '<path d="M147 75C147 114.765 114.765 147 75 147C35.2355 147 3 114.765 3 75C3 35.2355 35.2355 3 75 3C114.765 3 147 35.2355 147 75Z" fill="white" stroke="#007BFF" stroke-width="6"/>'+
  '<path d="M110 75C110 102.614 102.114 125 74.5 125C46.8858 125 41 102.614 41 75C41 47.3858 46.8858 25 74.5 25C102.114 25 110 47.3858 110 75Z" fill="#C4C4C4"/>'+
  '<path d="M55.5 57C58 60 64.8 64.2 72 57" stroke="black" stroke-width="2"/>'+
  '<path d="M72.5396 65.9806C70.2238 69.2591 65.8691 76.4894 66.9762 79.1828V79.1828C69.3426 84.9403 79.6017 84.7504 81.9551 78.9876C82.1489 78.5131 82.2943 78.0029 82.3796 77.4555C83.0818 72.9491 79.8674 68.5131 78.1725 66.8583" stroke="black" stroke-width="2"/>'+
  '<circle cx="87" cy="55" r="11" fill="white"/>'+
  '<circle cx="87" cy="55" r="11" fill="white"/>'+
  '<circle cx="87" cy="55" r="11" fill="white"/>'+
  '<circle cx="87" cy="55" r="11" fill="white"/>'+
  '<circle cx="87" cy="55" r="11" stroke="black" stroke-width="2"/>'+
  '<circle cx="81.5" cy="59.5" r="2.5" fill="black"/>'+
  '<path d="M79 18C75.1667 20 68.3 24.9 71.5 28.5C74.7 32.1 72.8333 36 71.5 37.5" stroke="black" stroke-width="2"/>'+
  '<path d="M65 98C69.8333 100.667 81.6 104.4 90 98" stroke="black" stroke-width="2"/>'+
  '</svg>'

)
})
