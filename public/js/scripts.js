function bookSearch(){

    //user input stored in var
    const find = document.getElementById('textName').value;
    document.getElementById('results').innerHTML = "";

//ajax request
    $.ajax({
        //properties - query + user input, data type, success, request type
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + find,
        dataType: 'json',
        success: function(data){
            for(i = 0; i < data.items.length; i++) {
                // title
                if(data.items[i].volumeInfo.title){
                results.innerHTML += "<h3>" + data.items[i].volumeInfo.title + "</h3>"
                }
                    else { results.innerHTML += "<p>Title: Sorry, this content is not available. Please check out the preview link below.</p>"
                }
                // author
                if(data.items[i].volumeInfo.authors){
                results.innerHTML += "<p>Author(s): " + data.items[i].volumeInfo.authors + "</p>"}
                else{
                    results.innerHTML += "<p>Author(s): Sorry, this content is not available. Please check out the preview link below.</p>"
                }
                // image
                if( data.items[i].volumeInfo.imageLinks.smallThumbnail) {
                    $("#results").append("<a href=\" \"><img id=\"each\" class=\"thumbnail\" src=" + data.items[i].volumeInfo.imageLinks.smallThumbnail + "></a>")
                } else {
                    results.innerHTML += "<p>Cover Image: Sorry, this content is not available. Please check out the preview link below.</p>"
                }
                // description
                if(data.items[i].volumeInfo.description) {
                    results.innerHTML += "<p>Synopsis: " + data.items[i].volumeInfo.description + "</p>"
                } else {
                    results.innerHTML +=  "<p>Synopsis: Sorry, this content is not available. Please check out the preview link below.</p>"
                }
                // publisher
                if(data.items[i].volumeInfo.publisher) {
                    results.innerHTML += "<p>Publisher: " + data.items[i].volumeInfo.publisher + "</p>"
                } else {
                    results.innerHTML +=  "<p>Publisher: Sorry, this content is not available. Please check out the preview link below.</p>"
                }
                // preview
                if(data.items[i].volumeInfo.previewLink) {
                    results.innerHTML += "<a target=\"_blank\" rel=\"noopener noreferrer\" href =" + data.items[i].volumeInfo.previewLink + "> Check out a preview <a/>"
                } else {
                    results.innerHTML +=  "<p>Preview Link: Sorry, this content is not available. Please try again later.</p>"
                }
            }
        },
        type:'GET'
    })
}

document.getElementById('search').addEventListener('submit', bookSearch, false);
