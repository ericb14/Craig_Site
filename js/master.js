// $(document).ready(function(){
// $('.items').on('click', function() {
//       var elt = $(this);
//         var text = elt.closest('.items').data('caption');
//         $('#pop_up').dialog().html(text);
//     });
// });




// $(document).ready(function(){
// $('.items').on('click', function() {
//       var elt = $(this);
//         var text = elt.closest('.items').data('caption');
//         $('#pop_up').dialog().html(text);
//     });
// });

// --- ^ above script is working ^ ---


$(document).ready(function(){
  $('.items').on ('click', function(){
  var elt = $(this);
  var text = elt.closest('.items').data('caption');
    var heading = elt.closest('.items').data('cap_heading');

     $(".modal-body").html(text);
     $('.modal-body').append('<img src= "http://www.placepuppy.net/400/250">');
     $(".modal-title").html(heading);
});
});
