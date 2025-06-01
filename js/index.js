var quotes = [
    {
        text: "“Be yourself; everyone else is already taken.”" ,
        author:  "--Oscar Wilde"
    }
    ,
    {
        text: "“You only live once, but if you do it right, once is enough.”" ,
        author:  " ― Mae West"
    }
    ,
    {
        text: "“If you tell the truth, you don't have to remember anything.”" ,
        author:  " ― Mark Twain"
    }
    ,
    
    
]
var lastIndex = -1;
 
function randomQuotes (){
    // var x = Math.floor(Math.random()*quotes.length);
    do {
        x = Math.floor(Math.random() * quotes.length);
    } while (x == lastIndex);

    lastIndex = x;
    var quote = quotes[x];

    var box ='';
box += `
 <p id="quote-text" class="fs-1 text-danger">${quote.text}</p>
    <p id="quote-author" class="fs-3 text-danger">${quote.author}</p>
`
  document.getElementById("quotes-content").innerHTML = box;

}