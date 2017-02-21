///Forside menu
$(function () {

    $myMenu = $("#myMenu");
    $.ajax({
        type: 'GET',
        url: 'http://localhost:13105/api/Get/GetMenu',
        success: function (posts) {
            $.each(posts, function (i, post) {
                $myMenu.append("<li class='menupunkter'><a href=\"" + post.Navn + ".html" + "\".>" + post.Navn + " </a></li>");
            });
        }
    });

});