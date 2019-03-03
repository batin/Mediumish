
const tag = $("#post-tags3")
let count = 0
$('#tags').on('focus', 'input', function(event){
  if(count == 0){
    $(this).val("#")
    count++
  }
  $(this).keyup(event => {
    if(event.which == 32 ){
      $(this).val(tag.val()+" #")
    }
  })
})
