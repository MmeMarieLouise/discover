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
                results.innerHTML += "<h3>" + data.items[i].volumeInfo.title + "</h3>"
                // author
                results.innerHTML += "<p>Author: " + data.items[i].volumeInfo.authors + "</p>"
                // image
                $("#results").append("<a href=\" \"><img id=\"each\" class=\"thumbnail\" src=" + data.items[i].volumeInfo.imageLinks.smallThumbnail + "></a>")
                // description
                results.innerHTML += "<p>Synopsis: " + data.items[i].volumeInfo.description + "</p>"
                // publisher
                results.innerHTML += "<p>Publisher: " + data.items[i].volumeInfo.publisher + "</p>"
                // preview
                results.innerHTML += "<a href=\" \">" + data.items[i].volumeInfo.previewLink + "</a>"
            }
        },
        type:'GET'
    })
}

document.getElementById('search').addEventListener('submit', bookSearch, false);
