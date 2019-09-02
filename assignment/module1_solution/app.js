(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {

  $scope.checkLunch = function () {
    var str = $scope.lunch_str;
    if(!str) {
      $scope.msg = 'Please enter data first.'
    }
    else {
      var words = str.split(',');
      console.log(words.length);
      for(var i=0; i<words.length; i++) {
        if(i < 3) {
          $scope.msg = 'Enjoy!';
        }
        else if(i >= 3 ) {
          $scope.msg = 'Too much!';
        }
      }
    }
  }
}

})();
