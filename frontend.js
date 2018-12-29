$(document).ready(function(){
    /*for(let i = 0; i < 5; i++){
        $('.content-cards').append(
            "<div class=\"col-md-2.20 col-lg-2.20\">" +
                "<div class=\"card\">" +
                    "<img src=\"https://via.placeholder.com/200\" class=\"card-img-top\" alt=\"No content\">" +
                    "<div class=\"card-body\">" +
                        "<h5 class=\"card-title\">No content</h5>" +
                    "</div>" +
                "</div>" +
            "</div>"
        );
    }*/

    $('#upload').on('click', 'button', event =>{
        event.preventDefault();
        console.log("this is a test");
        //$('.content-cards').remove();
        $.getJSON('data.json', data => {
            //console.log(data[0]);
            for(let i = 0; i < 5; i++){
                $('.content-cards').append(
                    "<div class='col-md-2.20 col-lg-2.20'>" +
                        "<div class='card'>" +
                            "<img src='"+ data[i].path + "'class='card-img-top img-responsive' alt='No content' class='img-fluid'>" +
                            "<div class=\"card-body\">" +
                                "<h5 class='card-title'>" + data[i].title + "</h5>" +
                            "</div>" +
                        "</div>" +
                    "</div>"
                );
            }
        });
    })
});