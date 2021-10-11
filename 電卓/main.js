$(function () {
  $(".btn_suuji").on("click", function () {
    DisplayInput($(this).attr("value"));
  });
  
  $('#btn_reset').on('click', function (){
    $('#total_display').text('');
})

});

function DisplayInput(num) {
  $("#total_display").text($("#total_display").text() + num);
}
