$(function () {
  $(".btn_suuji").on("click", function () {
    DisplayInput($(this).attr("value"));
  });
  
  $('#btn_reset').on('click', function (){
    $('#total_display').text('');
})

});

function DisplayInput(num) {
    //document.getElementById("total_display")
  $("#total_display").text($("#total_display").text() + num);
}
//$("#total_display").text(num);の後ろに$("#total_display").text() を付ける