App.namespace('App.views.foos.Index');
App.views.foos.Index = (function () {
    // dependencies & private properties
    var helloText = 'Hello',
        helloContainer = null,
        onSayClicked = function () {
            helloContainer.html(helloText + $(this).data('name'));
        };


    // public API
    return {
        init: function () {
            helloContainer = $(".hello");
            $(".say").click(onSayClicked);
        }
    };
}());