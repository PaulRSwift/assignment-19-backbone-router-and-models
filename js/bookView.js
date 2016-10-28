
var bookPageBuilder = function(someCollectionOfBooks){


   var bigSt = ''
    bigSt += '<div class="row">'

   someCollectionOfBooks.models.forEach(function(obj){
      console.log(obj);
      var titleBooks = obj.get('title')
      var bookThumb = obj.get('imageLinks').thumbnail


       bigSt +=  ' <div class="col-sm-6 col-md-4 thumbsize">'
       bigSt +=      '<div class="">'
       bigSt +=         '<img src="'+ bookThumb +'" alt="...">'
       bigSt +=           '<div class="caption">'
       bigSt +=             '<h4>' + titleBooks + '</h4>'
       bigSt +=            '</div>'
       bigSt +=         '</div>'
       bigSt +=      '</div>'


   })

         bigSt +=   '</div>'

   return bigSt
}
