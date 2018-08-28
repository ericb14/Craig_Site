// $(document).ready(function() {
//     $('.product_row').click(function() {
//         var text = $(this);
//         var text = $('.fade').data('caption');
//         $('#pop_up').dialog().html(text);
//     });
// });

// $(document).ready(function() {
//     $('.product_row').on('click', function() {
//         $(this).each(function() {
//             var text = $(this);
//             var text = $('.fade').attr('data-caption');
//             $('#pop_up').dialog().html(text);
//         });
//     });
// });



// $(document).ready(function() {
//     $('.product_row').on('click', function() {
//
//         $(function() {
//             var text = $(this);
//             var text = $('.fade').data('caption');
//             $('#pop_up').dialog().html(text);
//         });
//     });
// });

$(document).ready(function() {
    $('.product_row').on('click', function() {
        var elt = $(this);
        var text = elt.find('.fade').data('caption');
        elt.find('#pop_up').dialog().html(text);
    });
});