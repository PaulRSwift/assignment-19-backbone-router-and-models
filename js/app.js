var appContainer = document.querySelector(".content-area")

console.log("hi");

var BookModel = Backbone.Model.extend({
   parse: function(rawJSONes){
   return rawJSONes.volumeInfo
   }
})

var BookCollection = Backbone.Collection.extend ({
      model: BookModel,
      url: "",
      initialize: function(bookType){
         this.url = "https://www.googleapis.com/books/v1/volumes?q=subject:"+bookType
   },
      parse: function(rawJSONes){
         // console.log(rawJSONes);
         console.log('parsing: ', rawJSONes);

         return rawJSONes.items
      },
})

console.log(BookCollection);
console.log(BookModel)
// console.log(bookSub);



var AppRouter = Backbone.Router.extend({
   routes: {
      "books/generalcategory/:subcategory" : "showCategoryPage",
      "books/:category" : "showCategoryPage",
      "": "showHomePage"
   },




   showCategoryPage: function(catArg){
      var bookColl = new BookCollection(catArg)
      var categoryView = new ViewTemplate(bookPageBuilder)

      console.log(bookColl);

      bookColl.fetch().then(function(){
         var bookTitleCover = bookColl.models[0].get('title')
         console.log(bookTitleCover);
         categoryView.render(bookColl)
      })

      // bookColl.fetch().then(function(){
      //    console.log(bookColl);
      //    console.log(bookColl.models)
      //    appContainer.innerHTML = 'bookbook category'
         // categoryView.render(bookColl)
      //})
   },


   showHomePage:function(){
      console.log("?????")
      var homeView = new ViewTemplate(homePageBuilder)
      homeView.render()
   },

   initialize: function(){
   //   console.log('backbone ROUTINsG')
     Backbone.history.start()
  }

 })


// var categoryListings = [
//    {catName: "Fiction" , subcatList: ['Drama','Literature','Mystery', 'Poetry','Romance'] },
//    {catName: "Nonfiction" ,   subcatList: ['Biography', 'Business', 'Education', 'Health', 'Philosophy', 'Self-Help'] },
//    {catName: "Miscellaneous" ,   subcatList: ['Cooking','Crafts','Espanol', 'Medicine'] },
// ]

var app = new AppRouter()
