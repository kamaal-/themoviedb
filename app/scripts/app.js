'use strict';

/**
 * @ngdoc overview
 * @name themoviedbApp
 * @description
 * # themoviedbApp
 *
 * Main module of the application.
 */
angular
  .module('themoviedbApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/slider.html',
        controller: 'PopularCtrl',
        controllerAs: 'popular'
      })
      .when('/popular', {
        templateUrl: 'views/slider.html',
        controller: 'PopularCtrl',
        controllerAs: 'popular'
      })
      .when('/top_rated', {
        templateUrl: 'views/slider.html',
        controller: 'TopRatedCtrl',
        controllerAs: 'topRated'
      })
      .when('/upcoming', {
        templateUrl: 'views/slider.html',
        controller: 'UpcomingCtrl',
        controllerAs: 'upcoming'
      })
      .when('/now_playing', {
        templateUrl: 'views/slider.html',
        controller: 'NowPlayingCtrl',
        controllerAs: 'nowPlaying'
      })
      .otherwise({
        redirectTo: '/'
      });
  })


  .controller('AppCtrl', function ($scope, $window, $location) {
    var _this = this;
    $scope.api = {
      'base': 'http://api.themoviedb.org/3',
      'apiKey': 'dfae141d972338cd5996090ef817fdd6',
      'callback' : 'JSON_CALLBACK',
    };
    $scope.movies = {
      'sets' : [],
      'pageTitle' : 'Popular Movies',
      'selectedSlide': 0,
      'focusedMovie': 0,
    };
    $scope.console = $window.console;
    $scope.keys = [];
    $scope.selectedSlide = 0;
    $scope.nav = {
      'list' : [
        {'name': 'Popular', 'link': 'popular'},
        {'name': 'Top Rated', 'link': 'top_rated'},
        {'name': 'Upcoming', 'link': 'upcoming'},
        {'name' : 'Now Playing', 'link': 'now_playing'}
      ],
      'focused': 0
    };
    $scope.navMode = false;

    //prev slider
    this.prev = function() {
      $scope.movies.selectedSlide--;
    };

    //next slider
    this.next = function() {
      $scope.movies.selectedSlide++;
    };

    this.navNext = function() {
      if( ($scope.nav.list.length-1) > $scope.nav.focused){
        var url = '/';
        $scope.nav.focused++;
        url = $scope.nav.list[$scope.nav.focused].link;
        $location.url(url);
      }
    };

    this.navPrev = function () {
      if( 0 < $scope.nav.focused){
        var url = '/';
        $scope.nav.focused--;
        url = $scope.nav.list[$scope.nav.focused].link;
        $location.url(url);
      }
    };

    //left arrow (prev)
    $scope.keys.push({ code: 37, action: function() {
      if(!$scope.navMode) {
        if ( ($scope.movies.focusedMovie % 2) ){
          $scope.movies.focusedMovie--;
        }else if (false !== ($scope.movies.focusedMovie % 2) && ($scope.movies.selectedSlide > 0)){
          _this.prev();
          $scope.movies.focusedMovie = 1;
        }else {
          if( ($scope.movies.sets[$scope.movies.selectedSlide].length - 1) >= $scope.movies.focusedMovie && ($scope.movies.focusedMovie > 0 ) ){
            $scope.movies.focusedMovie--;
          }
        }
      }else{
        _this.navPrev();
      }
    }});

    ///right arrow (next)
    $scope.keys.push({ code: 39, action: function() {
      if(!$scope.navMode){
        if ( ($scope.movies.focusedMovie % 2) && ( ($scope.movies.sets.length-1) > $scope.movies.selectedSlide) ){
          _this.next();
          $scope.movies.focusedMovie = 0;
        } else {
          if(($scope.movies.sets[$scope.movies.selectedSlide].length - 1) > $scope.movies.focusedMovie){
            $scope.movies.focusedMovie++;
          }
        }
      }else{
        _this.navNext();
      }
    }});

    //up arrow
    $scope.keys.push({ code: 38, action: function() {
      if( $scope.movies.focusedMovie !== 0 && $scope.movies.focusedMovie !== 1){
        if(!$scope.navMode){
          $scope.movies.focusedMovie -= 2;
        }
      }else {
        $scope.navMode = true;
        _this.navNext();
        $scope.movies.focusedMovie = -1;
      }
    }});

    // down arrow 
    $scope.keys.push({ code: 40, action: function() {
      if($scope.navMode && ($scope.movies.focusedMovie === -1)){
        $scope.movies.focusedMovie = 0;
        $scope.navMode = false;
      }else{
        if( ($scope.movies.sets[$scope.movies.selectedSlide].length - 1) > $scope.movies.focusedMovie ){
          if ($scope.movies.focusedMovie === 4) {
            $scope.movies.focusedMovie = 1; 
          }else if($scope.movies.sets[$scope.movies.selectedSlide].length > 2){
            $scope.movies.focusedMovie += 2;
          }else {
            $scope.movies.focusedMovie++;
          }
        } else if (($scope.movies.sets.length-1) > $scope.movies.selectedSlide) {
          _this.next();
          $scope.movies.focusedMovie = 0;
        }
      }
    }});

    // pressing key
    $scope.$on('keydown', function( msg, obj ) {
      var code = obj.code;
      $scope.keys.forEach(function(o) {
          if ( o.code !== code ) { return; }
          o.action();
          $scope.$apply();
      });
    });
  });

//shame
//this will chunk array into spall pieces
Object.defineProperty(Array.prototype, 'chunk_array', {
    value: function(chunkSize) {
        var array=this;
        return [].concat.apply([],
            array.map(function(elem,i) {
                return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
            })
        );
    }
});
