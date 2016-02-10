What is an angular controller?
  view: HTML/CSS
  the bridge between the view and the angular app (JS).

What is a controllers purpose?
  connect the HTML with other components

How to create a controller?
    angular.module('module name').controller('ctrlName', function(){})

How does a controller communicate with the DOM?
  $scope is the wiring between a controller and HTML

What is double binding?
  when the $scope changes the HTML changes

How does a controller know what part of the html is in its scope?
  ng-controller='name of ctrl'
