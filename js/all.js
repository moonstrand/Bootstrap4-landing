$(document).ready(function () {
    $('a[data-dismiss="modal"][data-toggle="modal"]').on('click', function () {
        console.log('click');
        var target = $(this).data('target');
        console.log('target', target);
        $(target).on('shown.bs.modal', function () {
            $('body').addClass('modal-open');
        })
    })
})