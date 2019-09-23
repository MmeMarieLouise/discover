/*********************************************************************************************************************/
/* - ES6 syntax: function getTitleMarkup() is the same as const getTitleMarkup = () =>
- Immediately Invoked Function Expressions or IIFE : function() is the same as ()) => */
/*********************************************************************************************************************/

const bookSearch = () => {
    // the users input is stored in const `find`
    const find = document.getElementById('textName').value;
    // replace the value of div `results` and set it to empty string
    document.getElementById('results').innerHTML = "";
    // to get value out from promise object, call Promise API methods (.then, .catch) on asyncReq to consume the value of the fulfilled promise - .then()
    asyncReq(find).then((data) => successResult(data)).catch(error => console.log(error))
}

// AJAX request function, param stores search query results  - AJAX or Asynchronous JavaScript And XML is the use of the XMLHttpRequest object to communicate with servers without reloading the page. The AJAX request itself has 4 server responses /status properties `readyState`, `onreadystatechange`, `status`, `statusText`
const asyncReq = (searchQuery) => {
  // create promise instance using `Promise()` constructor. - promise is returned on `asyncReq` - Promise(((executor functions)
    return new Promise (((resolve,reject) => {
      // XMLHttpRequest object is created
            const xhr = new XMLHttpRequest();
            // callback runs each time there is a change of the ajax request - .onreadystatechange property (contains an event handler `readystatechange`) defines a function to be called when the readyState property changes
        xhr.onreadystatechange = (() => {
          // readyState holds status of XMLHttpRequest object, 4 = request finished and response is ready
                if (xhr.readyState == 4) {
                  // 200 = success status code
                    if (xhr.status == 200) {
                      // define what happens when promise is fulfilled - resolve = fulfilled (1 of 3 promise states) - responseText returns the text received by the server. resolve(fulfillmentValue)
                       resolve(xhr.responseText);
                    } else {
                      // define what happens when promise is rejected - reject = rejected ( promise state) - the string will be caught in `.catch()` method
                        reject('request rejected');
                    }
                }
            });
        // opening a request triggers a change of state and prepares browser to make request- xhr.open( httpMethod, url, async)
        xhr.open ('GET','https://www.googleapis.com/books/v1/volumes?q=' + searchQuery, true);
        // send request to server
        xhr.send();
        }
    ));
}

const successResult = (stringifiedData) => {
// JSON.parse() method parses (taking input from string and returning other data type)a string as JSON
    const data = JSON.parse(stringifiedData);
//.map method returns a new array, `markUp` loops over each `book` and creates a new array item, the first param must be a function and it's param is the array item `book` that will be looped over.
    const markUp = data.items.map((book) => {
// Template literals `${string}` are used to allow embedded expressions
      return ` 
        <div>
          ${getTitleMarkup(book.volumeInfo.title)}
          ${getAuthorMarkup(book.volumeInfo.authors)}
          ${displayCover(book.volumeInfo.imageLinks.smallThumbnail)}
          ${getDescription(book.volumeInfo.description)}
          ${getPublisher(book.volumeInfo.publisher)}
          ${linkPreview(book.volumeInfo.previewLink)}
        </div>
      `
      //.join converts an array into a string
    }).join('');
  //  .innerHTML so that the the mark up is added to the page only once
    results.innerHTML = markUp;
}

const getTitleMarkup = (title) => {
  if (title) {
   return "<h3>" + title + "</h3>"
  }
  else {
    return "<p>Title: Sorry, this content is not available. Please check out the preview link below.</p>"
  }
}

const getAuthorMarkup = (authors) => {
   if (authors) {
  return "<p>Author(s): " + authors + "</p>"
   }
  else {
  return "<p>Author(s): Sorry, this content is not available. Please check out the preview link below.</p>"
  }
}

const displayCover = (imageLinks) => {
   if (imageLinks) {
  return `<img id="each" class="thumbnail" src="${imageLinks} "></a>`;
   } else {
     return "<p>Cover Image: Sorry, this content is not available. Please check out the preview link below.</p>"
   }
}

const getDescription = (description) => {
  if (description) {
   return "<p>Synopsis: " + description + "</p>"
  } else {
  return"<p>Synopsis: Sorry, this content is not available. Please check out the preview link below.</p>"
 }
}

const getPublisher = (publisher) => {
  if (publisher) {
 return "<p>Publisher: " + publisher + "</p>"
  } else {
  return "<p>Publisher: Sorry, this content is not available. Please check out the preview link below.</p>"
   }
}

const linkPreview = (previewLink) => {
  if (previewLink) {
  return "<a target=\"_blank\" rel=\"noopener noreferrer\" href =" + previewLink + "> Check out a preview <a/>"
  } else {
  return "<p>Preview Link: Sorry, this content is not available. Please try again later.</p>"
  }
}

document.getElementById('search').addEventListener('submit', bookSearch);
