$(() => {

    $('.filters-list a').on('click', function() {
        var filter = $(this).attr('data-filter');
        $('.photo').hide();
        $(filter).show();

        return false;
    })

});