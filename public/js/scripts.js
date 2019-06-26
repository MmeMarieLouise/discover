function bookSearch(){
    const find = document.getElementById('textName').value;
    document.getElementById('results').innerHTML = "";
    console.log(find);
}
//ajax request, set up new object - should write in Jquery
const xhr = new XMLHttpRequest();
//callback
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        document.getElementById('results').innerHTML = xhr.responseText;
    }
};
const find = document.getElementById('textName').value;
const bookData = 'https://www.googleapis.com/books/v1/volumes?q=';
document.getElementById('results').innerHTML = "";
xhr.open('GET',bookData + find);
xhr.send();

console.log('hello world');

document.getElementById('search').addEventListener('submit', bookSearch, false);
