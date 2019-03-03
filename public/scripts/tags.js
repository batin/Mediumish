
const tag = $("#post-tags3")

$('#tags').on('focus', 'input', function(event){
    $(this).val("#")
    $(this).keyup(event => {
      if(event.which == 32 ){
        $(this).parent().append('<p class ="tagClass" href="#">'+tag.val()+'</p>')
        $(this).val("#")
      }
    })
})
