(function () {
//'use strict';

angular.module('myFirstApp', [])
.controller('MyFirstController', MyFirstController);

function MyFirstController ($scope, $filter, $injector) {
    $scope.name = "";
    $scope.eat_value = "menu";
    $scope.haveBrunch = function () {
      $scope.eat_value = "humberger";
    };

    console.log($injector.annotate(MyFirstController));

    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };

    $scope.displayNumeric = function () {
      var calculateValue = calculateNumericValue($scope.name);
      $scope.totalValue = calculateValue;
    }
    function calculateNumericValue(string) {
      var stringValue = 0;
      for(var i = 0; i < string.length; i++){
        stringValue += string.charCodeAt(i);
      }
      return stringValue;
    }
    var elem = document.getElementById('name');
    console.log(elem);
    var elem2 = elem.getAttribute("gree");
    console.log(elem2);

}

})();
