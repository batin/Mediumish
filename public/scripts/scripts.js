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
/*
* profile page
* gets posts as a Json
*/
const postlar = $("#postlar")
let loadedPosts = 3 //posts that already loaded
let posts = $.ajax({
  url: "scroll_json.js",
  async: false,
  dataType: 'json'
}).responseJSON

let addedPosts = 3;
let border = 4;
/*
* profile page
* this function is triggered when users scroll
*/
$(window).scroll( function () {
  const scrollBottom = clientWindow.height() + clientWindow.scrollTop()
  const bottomPostlar  = $('#postlar').position().top + $("#postlar").height() -100
  if(scrollBottom > bottomPostlar){
    if(addedPosts <= posts.length){

        var loadingPosts = ""
        for(addedPosts ;addedPosts <  border ; addedPosts++){
         loadingPosts = loadingPosts + "<div class='post'>" +
                        "<h1 class='baslik' >" + posts[addedPosts].postTitle + "</h1>" +
                        "<p id='on-yazi' class='on-yazi-class'>" + posts[addedPosts].postText + "<p/>" +
                        "<a class='devamini-oku' href= " + posts[addedPosts].url + ">" +" Devamını Oku" +"</a>" +
                      "</div>"
        }
        postlar.append(loadingPosts)
        border = border + 1
      }
  }
})
}
/*
* profile page
* info message div will disappear after 2 sec
*/
const disappearFunc = (div)=>{
  div.load(
    setTimeout( _=> {
      div.css({ display: "none"})
    }, 2000)
  )
}
/*
* Home page
* animates hashtag divs
*/
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

const animateFunctionAbout =  _ =>{
    $("#team-photos").animate(
	{'left': '50%','margin-left': - $('.left1').width()/2 , opacity: 1},
  {
    duration: 1500,
    easing: "swing",

  }
  )


}

$("#welcome-container").css({ width: width + "px", height: height + "px" })
$("#index-content").css({ width: width + "px", height: height + "px" })
/*
* Home page
* animation of click to see more button(scrolls down)
*/
$("#action-button").click(e => {
  e.preventDefault()
  const position = $("#index-content").offset().top
  animateFunction()
  $("html").animate({scrollTop: position}, 500, function(){console.log("scrolled")})
})

$("#see-our").click(e => {
  e.preventDefault()
  const position = $("#our-team").offset().top
  animateFunctionAbout()
  $("html").animate({scrollTop: position}, 500, function(){console.log("scrolled")})
})

if(url===""){
clientWindow.on("scroll" , _ => {
  const myHeight = height / 2
   if (clientWindow.scrollTop() > myHeight){
     animateFunction()
   }
})
}

if(url==="about"){
clientWindow.on("scroll" , _ => {
  const myHeight = height / 2
   if (clientWindow.scrollTop() > myHeight){
     animateFunctionAbout()
   }
})
}

/*
* Profile page
* removes content div & opens posting page div
*/
addButton.click( _ => {
  const contentDiv = $("#profile-content")
  $("#go-back").css({display:'block'})
  $("#add-post").css({display:'none'})
  contentDiv.css({display:'none'})
  postPage.css({ display: "block", height: height + "px", width: 100 + '%'})
  const position = postPage.offset().top
    $(window).animate($(window).scrollTop(position), 1500)
})
/*
* Profile page
* removes posting page div & opens content div
*/
goBack.click( _ => {
  const contentDiv = $("#profile-content")
  $("#add-post").css({display:'block'})
  $("#go-back").css({display:'none'})
  contentDiv.css({display:'block'})
  postPage.css({ display: "none", height: height + "px", width: 100 + '%'})
  clientWindow.scrollTop(0)
})
/*
* profile page - Posting part
* when user clicks on the text area it focuses on textline
*/
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

if(url==="about"){
  $("#about-page").css({height: height + "px"})
  $("#our-team").css({height: height + "px"})
  let angle = 0;

  $(".members").hover( function(){
    let angle = 1
    $(this).animate (
      {opacity: 0},
      {
        step: function() {
          angle = angle + 1
          $(this).css({
          "-moz-transform":"rotateY("+angle+"deg)",
          "-webkit-transform":"rotateY("+angle+"deg)",
          "-ms-transform":"rotateY("+angle+"deg)",
          "-o-transform":"rotateY("+angle+"deg)"
        }) } ,
        complete: function(){
          $(this).css({display:"none"})
          $(this).siblings().css({display:"block"})
        },
        duration:1000
      }
)})
}

const tag = $("#post-tags3")
tag.focus( function() {
  $(this).css({display:"none"})
})
