function bookSearch () {
    //user input stored in var
    const find = document.getElementById('textName').value;
    document.getElementById('results').innerHTML = "";
    asyncReq(find);
}

function asyncReq (searchQuery) {
  $.ajax({
    //properties - query + user input, data type, success, request type
    url: 'https://www.googleapis.com/books/v1/volumes?q=' + searchQuery,
    dataType: 'json',
    success: function (data) {
      successResult(data);
    },
    type: 'GET'
  })
}

function successResult (data) {
  for (i = 0; i < data.items.length; i++) {

    const volume = data.items[i].volumeInfo;
    const title = volume.title;
    const author = volume.authors;
    const cover = volume.imageLinks.smallThumbnail;
    const synopsis = volume.description;
    const publisher = volume.publisher;
    const preview = volume.previewLink;
    printTitle(title);
    printAuthor(author);
    displayCover(cover);
    printSynopsis(synopsis);
    printPublisher(publisher);
    linkPreview(preview);
  }
}

function printTitle(title) {
  if (title) {
    results.innerHTML += "<h3>" + title + "</h3>"
  }
  else {
    results.innerHTML += "<p>Title: Sorry, this content is not available. Please check out the preview link below.</p>"
  }
}

function printAuthor(author) {
   if (author) {
  results.innerHTML += "<p>Author(s): " + author + "</p>"
   }
  else {
  results.innerHTML += "<p>Author(s): Sorry, this content is not available. Please check out the preview link below.</p>"
  }
}

function displayCover(cover) {
   if (cover) {
  $("#results").append("<a href=\" \"><img id=\"each\" class=\"thumbnail\" src=" + cover + "></a>")
   } else {
     results.innerHTML += "<p>Cover Image: Sorry, this content is not available. Please check out the preview link below.</p>"
   }
}

function printSynopsis(synopsis){
  if (synopsis) {
   results.innerHTML += "<p>Synopsis: " + synopsis + "</p>"
  } else {
  results.innerHTML += "<p>Synopsis: Sorry, this content is not available. Please check out the preview link below.</p>"
 }
}

function printPublisher(publisher){
  if (publisher) {
 results.innerHTML += "<p>Publisher: " + publisher + "</p>"
  } else {
  results.innerHTML += "<p>Publisher: Sorry, this content is not available. Please check out the preview link below.</p>"
   }
}

function linkPreview(preview){
  if (preview) {
  results.innerHTML += "<a target=\"_blank\" rel=\"noopener noreferrer\" href =" + preview + "> Check out a preview <a/>"
  } else {
  results.innerHTML += "<p>Preview Link: Sorry, this content is not available. Please try again later.</p>"
  }
}

document.getElementById('search').addEventListener('submit', bookSearch);