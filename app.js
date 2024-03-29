(function() {
  var app = angular.module('gemStore', ['ngAnimate']);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newValue){
      this.current = newValue || 0;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product){
      product.reviews.createdOn = Date.now();

      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productDescription', function(){
      return {
        restrict: 'E',
        template: "<h4>Description</h4><blockquote>{{ product.description }}</blockquote>"
      }
  });

  app.directive('productSpecs', function(){
    return{
      restrict: 'E',
      template: "<h4>Specs</h4><blockquote>Shine: {{product.shine}}</blockquote>"
    }
  })

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

  var gems = [
    {
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "images/angular1.png",
        "images/angular2.png",
        "images/angular3.png"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490200837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
    {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "images/angular4.png",
        "images/angular5.png",
        "images/diamond.png",
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    },
    {
      name: 'Zircon',
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        "images/gem.jpg",
        "images/green_gem.png",
        "images/blue_diamond.png"
      ],
      reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }
  ];
})();
