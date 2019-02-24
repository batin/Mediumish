const clientWindow = $(window)
const width = clientWindow.width()
const height = clientWindow.height() - 50
const postPage = $("#post-page")
const addButton = $("#add-post")
const goBack = $("#go-back")
const succesMessage = $("#succes-message")
const failMessage = $("#fail-message")
const pathname = $(document)[0].URL
const errorPage = $("#errorPage")
let url = pathname.split("/");
url = url[3]
if (url==="profile"){

const postlar = $("#postlar")
let loadedPosts = 3
let posts = $.ajax({
  url: "scroll_json.js",
  async: false,
  dataType: 'json'
}).responseJSON

let addedPosts = 3;
let border = 4;

$(window).scroll( function () {
  const scrollBottom = clientWindow.height() + clientWindow.scrollTop()
  const bottomPostlar  = $('#postlar').position().top + $("#postlar").height() -100
  if(scrollBottom > bottomPostlar){
    if(addedPosts <= posts.length){

        var loadingPosts = ""
        for(addedPosts ;addedPosts <  border ; addedPosts++){
         loadingPosts = loadingPosts + "<div class='post'>" +
                        "<h1 class='baslik' >" + posts[addedPosts].postTitle + "</h1>" +
                        "<p id='on-yazi'>" + posts[addedPosts].postText + "<p/>" +
                        "<a class='devamini-oku' href='#'>"+ "Devamını Oku" +"</a>" +
                      "</div>"
        }
        postlar.append(loadingPosts)

        border = border + 1
      }
  }

})

}

const disappearFunc = (div)=>{
  div.load(
    setTimeout( _=> {
      div.css({ display: "none"})
    }, 2000)
  )
}

const animateFunction =  _ =>{
    $(".left1").animate(
	{'left': '50%','margin-left': - $('.left1').width()/2 , opacity: 1},
  {
    duration: 500,
    easing: "swing",

  }
  )

  $(".left2").animate(
	{'left': '50%', 'margin-left': -$('.left2').width()/2 , opacity: 1 },
  {
    duration: 1500,
    easing: "swing"
  }
  )

  $(".right1").animate(
	{'left': '50%', 'margin-left': -$('.right1').width()/2 , opacity: 1  },
  {
    duration: 1000,
    easing: "swing"
  }
  )
}


$("#welcome-container").css({ width: width + "px", height: height + "px" })
$("#index-content").css({ width: width + "px", height: height + "px" })

$("#action-button").click(e => {
  e.preventDefault()
  const position = $("#index-content").offset().top
  animateFunction()
  $(window).animate($(window).scrollTop(position), 200)
})

if(url===""){
clientWindow.on("scroll" , _ => {
  const myHeight = height / 2
   if (clientWindow.scrollTop() > myHeight){
     animateFunction()
   }
})
}

addButton.click( _ => {
  const contentDiv = $("#profile-content")
  $("#go-back").css({display:'block'})
  $("#add-post").css({display:'none'})
  contentDiv.css({display:'none'})
  postPage.css({ display: "block", height: height + "px", width: 100 + '%'})
  const position = postPage.offset().top
    $(window).animate($(window).scrollTop(position), 1500)
})

goBack.click( _ => {
  const contentDiv = $("#profile-content")
  $("#add-post").css({display:'block'})
  $("#go-back").css({display:'none'})
  contentDiv.css({display:'block'})
  postPage.css({ display: "none", height: height + "px", width: 100 + '%'})
  clientWindow.scrollTop(0)
})

$('#post-text').on('click', _ => {
  $('#post-text-input').focus()
})
if (url==="profile"){
  disappearFunc(succesMessage)
  disappearFunc(failMessage)
}

if(url==="login"){
  disappearFunc(errorPage)
}





/* function myFunction() {
  if (window.top != window.self) {
    document.getElementById("demo").innerHTML = "This window is NOT the topmost window!"
  } else {
    document.getElementById("demo").innerHTML = "This window is the topmost window!"
  }
} */


// function counter(){
// 	var counterNumber = 0
// 	function innerFunction(){
// 		counterNumber = counterNumber + 1
// 		return counterNumber
// 	}
// 	return innerFunction
// }
//
// const verify = $("#verify")
//
// let counterNumber = counter()
// verify.click( _ => {
// 	if(counterNumber() % 2 === 1){	verify.val(true)	}
// 	else{	verify.val(false)	}
// })
