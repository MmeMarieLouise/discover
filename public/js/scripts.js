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

  /* .map method returns a new array,  markUp loops over each book and creates a new array item, the first param must be a function and its param is the array item `book` that will be looped over. Then, .join converts an array into a string (empty string passed through .join allows empty space to be printed).Then call 'printTitle' function to print string. Finally add .innerHTML so that it adds the mark up to the page once.
  Template literals `${string}` are used to allow embedded expressions.
   */


    const markUp = data.items.map(function(book){
      return ` 
        <div>
          ${printTitle(book.volumeInfo.title)}
          ${printAuthor(book.volumeInfo.authors)}
          ${displayCover(book.volumeInfo.imageLinks.smallThumbnail)}
          ${printSynopsis(book.volumeInfo.description)}
          ${printPublisher(book.volumeInfo.publisher)}
          ${linkPreview(book.volumeInfo.previewLink)}
        </div>
      `
    }).join('');

    results.innerHTML = markUp;
}

function printTitle(title) {
  if (title) {
   return "<h3>" + title + "</h3>"
  }
  else {
    return "<p>Title: Sorry, this content is not available. Please check out the preview link below.</p>"
  }
}

function printAuthor(authors) {
   if (authors) {
  return "<p>Author(s): " + authors + "</p>"
   }
  else {
  return "<p>Author(s): Sorry, this content is not available. Please check out the preview link below.</p>"
  }
}

function displayCover(imageLinks) {
   if (imageLinks) {
  return `<img id="each" class="thumbnail" src="${imageLinks} "></a>`;
   } else {
     return "<p>Cover Image: Sorry, this content is not available. Please check out the preview link below.</p>"
   }
}

function printSynopsis(description){
  if (description) {
   return "<p>Synopsis: " + description + "</p>"
  } else {
  return"<p>Synopsis: Sorry, this content is not available. Please check out the preview link below.</p>"
 }
}

function printPublisher(publisher){
  if (publisher) {
 return "<p>Publisher: " + publisher + "</p>"
  } else {
  return "<p>Publisher: Sorry, this content is not available. Please check out the preview link below.</p>"
   }
}

function linkPreview(previewLink){
  if (previewLink) {
  return "<a target=\"_blank\" rel=\"noopener noreferrer\" href =" + previewLink + "> Check out a preview <a/>"
  } else {
  return "<p>Preview Link: Sorry, this content is not available. Please try again later.</p>"
  }
}

document.getElementById('search').addEventListener('submit', bookSearch);