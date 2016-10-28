var homePageBuilder =function(){

   var categoryListings = [
      {catName: "Fiction" , subcatList: ['Drama','Literature','Mystery', 'Poetry','Romance'] },
      {catName: "Nonfiction" ,   subcatList: ['Biography', 'Business', 'Education', 'Health', 'Philosophy', 'Self-Help'] },
      {catName: "Miscellaneous" ,   subcatList: ['Cooking','Crafts','Espanol', 'Medicine'] },
   ]

   var htmlSr = ''
   categoryListings.forEach(function(obj, i){
      htmlSr += '<div class=col-sm-3>'
      htmlSr +=   '<a href="#books/'+ obj.catName +'"">'
      htmlSr +=      '<h2>'+ obj.catName +'</h2>'
      htmlSr +=    "</a>"
      htmlSr +=      '<ul>'
      for ( var i = 0; i < obj.subcatList.length; i += 1 ){
         htmlSr +=      '<a href="#books/'+obj.subcatList[i]+'"">'
         htmlSr +=   '<li>' + obj.subcatList[i] + '</li>'
         htmlSr += '</a>'
      }
         htmlSr += '</ul>'
         htmlSr +='</div>'

   })

   //console.log(categoryListings)
   return htmlSr

}
