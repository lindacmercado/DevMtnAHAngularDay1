angular.module("domIntApp").controller("domIntCtrl", function($scope){
  $scope.name = "Linda";
  $scope.search = {
    name: ""
  }
  $scope.showHide = true;
  $scope.style = {
    background: "yellow"
  };
  $scope.clicker = function() {
    $scope.style.background = "aqua";
  };
  var listOfPeople = [
    {
      name: "Jeff",
      age: 34
    },
    {
      name: "Greg",
      age: 24
    },
    {
      name: "Alice",
      age: 19
    },
    {
      name: "Brianna",
      age: 46
    },
  ];
  $scope.people = listOfPeople;
})
