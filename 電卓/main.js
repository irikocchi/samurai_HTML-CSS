$(function(){
    $('#btn_1').on('click',function(){
        DisplayInput(1);
        //$("p");
    })


})

function DisplayInput(num){
    $('#total_display').text($('#total_display').text() + num);
}