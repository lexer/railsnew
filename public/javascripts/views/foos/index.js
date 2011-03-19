App.namespace('App.views.foos.Index');
App.views.foos.Index = (function () {
    // dependencies & private properties
    var hello_text = 'Hello',
        helloContainer = null,
        onSayClicked = function () {
            helloContainer.html(hello_text + $(this).data('name'));
        };


    // public API
    return {
        init: function () {
            helloContainer = $(".hello");
            $(".say").click(onSayClicked);
        }
    };
}());