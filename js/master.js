$(document).ready(function() {
    $('.items').on('click', function() {
        var elt = $(this);
        var text = elt.closest('.items').data('caption');
        var heading = elt.closest('.items').data('cap_heading');
        var dot_image = elt.closest('.items').data('pics');
        var modal_pic = document.getElementById('product_photo');
        modal_pic.src = (dot_image);

        $(".modal-body").html(text);
        $('.modal-body').append().data('pics');
        $(".modal-title").html(heading);
    });
});