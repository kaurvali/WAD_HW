$(function() {
    $.get("https://api.npoint.io/6672693f0dcabafd73cf", function(posts) {
        for (post of posts) {
            let div_main = $('<div class="post">');

            let div_header = $('<div class="header">');
            let account = $('<a href="#"><img class="account" src="res/images/account.png" alt="Account Photo"></a>')
            let date = $('<p>').text(post.date);
            div_header.append(account);
            div_header.append(date);

            let div_content = $('<div class="content">');
            // TODO - add image

            let div_desc = $('<div class="desc">');
            let text = $('<p>').text(post.text);
            div_desc.append(text);

            let div_footer = $('<div class="footer">');
            let like = $('<input type="image" name="Like Button" src="res/images/like.jpg" alt="Like Button">')
            div_footer.append(like);

            div_main.append(div_header);
            div_main.append(div_content);
            div_main.append(div_desc);
            div_main.append(div_footer);

            $(".post-area").append(div_main);
        }
    })
});