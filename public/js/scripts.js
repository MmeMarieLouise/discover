function bookSearch(){
    const find = document.getElementById('textName').value;
    document.getElementById('results').innerHTML = "";

    $.ajax({
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + find,
        dataType: 'json',
        success: function(data){
            for(i = 0; i < data.items.length; i++) {
                // title
                results.innerHTML += "<h3>" + data.items[i].volumeInfo.title + "<h3>"
                // description
                results.innerHTML += "<p>" + data.items[i].volumeInfo.description + "<p>"
                // author
                results.innerHTML += "<p>" + data.items[i].volumeInfo.authors + "<p>"
                // publisher
                results.innerHTML += "<p>" + data.items[i].volumeInfo.publisher + "<p>"

            }
        },
        type:'GET'
    })
}

document.getElementById('search').addEventListener('submit', bookSearch, false);
