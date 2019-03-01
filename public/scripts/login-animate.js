console.log("we are on login page")
const mail = $("#inputEmail")
const password = $("#inputPassword")
const animateDiv = $("#login-div")
const countKeyUp = function() {
  let number = 0
  const counter = function (){
    number = number + 1
    return number
  }
  return counter
}
const keyUpCounter = countKeyUp()



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
  }else if (keyUP < 1) {
    animateDiv.html('<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">'+
    '<rect width="150" height="150" fill="white"/>'+
    '<path d="M149.5 75C149.5 116.145 116.145 149.5 75 149.5C33.8548 149.5 0.5 116.145 0.5 75C0.5 33.8548 33.8548 0.5 75 0.5C116.145 0.5 149.5 33.8548 149.5 75Z" fill="white" stroke="black"/>'+
    '<path d="M110 75C110 102.614 102.114 125 74.5 125C46.8858 125 41 102.614 41 75C41 47.3858 46.8858 25 74.5 25C102.114 25 110 47.3858 110 75Z" fill="#C4C4C4"/>'+
    '<path d="M72.5396 65.9806C70.2238 69.2591 65.8691 76.4894 66.9762 79.1828C68.0832 81.8762 72.5208 83.7601 74.6012 84.3654C76.9015 83.9397 81.6775 81.9618 82.3796 77.4555C83.0818 72.9491 79.8674 68.5131 78.1725 66.8583" stroke="black"/>'+
    '<circle cx="85" cy="57" r="5" fill="white"/>'+
    '<circle cx="85" cy="57" r="5" fill="white"/>'+
    '<circle cx="85" cy="57" r="5" fill="white"/>'+
    '<circle cx="85" cy="57" r="5" fill="white"/>'+
    '<circle cx="85.5" cy="59.5" r="2.5" fill="black"/>'+
    '<circle cx="67" cy="57" r="5" fill="white"/>'+
    '<circle cx="67" cy="57" r="5" fill="white"/>'+
    '<circle cx="67" cy="57" r="5" fill="white"/>'+
    '<circle cx="67" cy="57" r="5" fill="white"/>'+
    '<path d="M70 59.5C70 60.8807 68.8807 62 67.5 62C66.1193 62 65 60.8807 65 59.5C65 58.1193 66.1193 57 67.5 57C68.8807 57 70 58.1193 70 59.5Z" fill="black"/>'+
    '<path d="M79 18C75.1667 20 68.3 24.9 71.5 28.5C74.7 32.1 72.8333 36 71.5 37.5" stroke="black"/>'+
    '<path d="M65 98C69.8333 100.667 81.6 104.4 90 98" stroke="black"/>'+
    '</svg>'
    )
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
mail.click(function(){
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
