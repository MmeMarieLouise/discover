/*********************************************************************************************************************/
/* .map method returns a new array,  markUp loops over each book and creates a new array item, the first param must be a
function and its param is the array item `book` that will be looped over. Then, .join converts an array into a string
(empty string passed through .join allows empty space to be printed).Then call 'printTitle' function to print string.
- Finally add .innerHTML so that it adds the mark up to the page once.
- Template literals `${string}` are used to allow embedded expressions.
- ES6 syntax: function getTitleMarkup() is the same as const getTitleMarkup = () =>
- Immediately - Invoked Function Expressions or IIFE : function() is the same as ()) => */
/*********************************************************************************************************************/

const bookSearch = () => {
    //user input stored in var
    const find = document.getElementById('textName').value;
    document.getElementById('results').innerHTML = "";
    asyncReq(find).then((data) => successResult(data))
}


const asyncReq = (searchQuery) => {
    return new Promise (((resolve,reject) => {
            const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (){
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                       resolve(xhr.responseText);
                    } else {
                        reject(httpRequest().then(data => successFunction(data)).catch(error => console.log(error)));
                    }
                }
            };
        xhr.open ('GET','https://www.googleapis.com/books/v1/volumes?q=' + searchQuery, true);
        xhr.send();
        }
    ));
}


const successResult = (stringifiedData) => {
    const data = JSON.parse(stringifiedData);
    const markUp = data.items.map((book) => {
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
    }).join('');

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

/*********************************************************************************************************************/
/*
* - AJAX or Asynchronous JavaScript And XML is the use of XMLHttpRequest object to communicate with servers  */


/*********************************************************************************************************************/
