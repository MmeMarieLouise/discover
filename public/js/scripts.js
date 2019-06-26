function bookSearch(){
    const find = document.getElementById('textName').value;
    document.getElementById('results').innerHTML = "";

    $.ajax({
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + find,
        dataType: 'json',
        success: function(data){
            for(i = 0; i < data.items.length; i++) {
                results.innerHTML += "<h3>" + data.items[i].volumeInfo.title + "<h3>"
                results.innerHTML += "<p>" + data.items[i].volumeInfo.description + "<p>"
            }
        },
        type:'GET'
    })
}

document.getElementById('search').addEventListener('submit', bookSearch, false);
