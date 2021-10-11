$(function(){
    $('.btn_suuji').on('click',function(){
        DisplayInput('1');
    })


})

function DisplayInput(num){
    $('#total_display').text($('#total_display').text() + num);
}