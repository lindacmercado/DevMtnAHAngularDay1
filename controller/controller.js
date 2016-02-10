angular.module("ctrlApp").controller("ctrl", function($scope, $timeout) {
  $scope.name = "Linda Mercado";
  $timeout(function() {
    $scope.name = "Tyler Mercado";
  }, 1000)

});
