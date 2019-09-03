(function () {
//'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('love', LoveFilter)
.filter('truth', TruthFilter);

MsgController.$injector = ['$scope', 'loveFilter', '$timeout'];
function MsgController ($scope, loveFilter, $timeout) {
    $scope.onceCounter = 0;
    $scope.counter = 0;

    $scope.upCounter3 = function () {
      $timeout(function () {
        $scope.counter++;
        console.log('Digest Complete!');        
      }, 2000);
    }

    $scope.upCounter2 = function () {
      setTimeout(function () {
        $scope.$apply( function () {
          $scope.counter++;
          console.log('Digest Complete!');
        });
        //$scope.$digest();
      }, 2000);
    }

    console.log($scope);
    $scope.showWatchers = function () {
      console.log('# of watchers :' + $scope.$$watchersCount);
    }

    $scope.countOnce = function () {
      $scope.onceCounter = 1;
    }

    $scope.upCounter = function () {
      $scope.onceCounter++;
    }

    $scope.$watch('onceCounter', function (newValue, oldValue) {
      console.log("old value : ", oldValue);
      console.log("new value : ", newValue);
    })

    $scope.$watch(function () {
      console.log("Digest fired!");
    })

    $scope.sayLoveMsg = function () {
      var msg = "I like U!";
      return loveFilter(msg);
    }

    $scope.sayLikeMsg = function () {
      var msg = "I like U!";
      return msg;
    }

    $scope.cookieCost = .45;

    $scope.sayMsg = function () {
      var msg = "I like U!";
      var output = $filter('uppercase')(msg);
      return output;
    }

}

function LoveFilter () {
  return function (input) {
    input = input || "";
    input = input.replace("like", "love");
    return input;
  };
}

function TruthFilter () {
  return function (input, target, replace) {
    input = input || "";
    input = input.replace(target, replace);
    return input;
  };
}

})();
