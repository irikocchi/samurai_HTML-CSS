$(function (){
    // $('#btn_1').on('click', function(){
    //     DisplayInput(1);
    // })
    // $('#btn_2').on('click', function(){
    //     DisplayInput(2);
    // })
    $('.js_suuji').on('click', function(){
        // let num = $(this).attr('takahata');
        // DisplayInput(num);
        DisplayInput($(this).attr('takahata'));
    })

    // $('要素').on('イベント名', '処理');
    // $('.js_suuji').on('click', function(){});

    $('#btn_reset').on('click', function (){
        $('#total_display').text('');
    })

    let houhou = '';

    $('.js_keisanhouhou').on('click', function (){
        $('#rireki').text($('#total_display').text());
        $('#total_display').text('');
        houhou = $(this).attr('id');
    })

    $('#wa').on('click', function (){
        let rirekiValue = Number($('#rireki').text());
        let imaValue = Number($('#total_display').text());
        $('#total_display').text('');
        $('#rireki').text('');
        if(houhou  == 'btn_plus' || houhou  == 'btn_plus2'){
            alert(rirekiValue + imaValue)
        }else if(houhou  == 'btn_minus'){
            alert(rirekiValue - imaValue)
        }else if(houhou  == 'btn_kakeru'){
            alert(rirekiValue * imaValue)
        }else if(houhou  == 'btn_waru'){
            alert(rirekiValue / imaValue)
        }
    })
})

function DisplayInput(num){
    $('#total_display').text($('#total_display').text() + num);
}