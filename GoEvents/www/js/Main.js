
$(function () {


    $myDiv = $("#myDiv");
    $.ajax({
        type: 'GET',
        url: 'http://localhost:13105/api/Get/GetMenu',
        success: function (posts) {
            $.each(posts, function (i, post) {
                $myDiv.append("<li><a href=\""+ post.Navn + ".html"+"\".>" + post.Navn + " </a></li>");
            });
        }
    });

});