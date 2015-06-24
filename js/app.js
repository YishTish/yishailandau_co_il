var app = angular.module('YLApp', ['ngMaterial']);

app.controller('appCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
	$scope.toggleSidenav = function(menuId){
		$mdSidenav(menuId).toggle();
	}
	$scope.title = "Yishai Landau";
	$scope.menuItems = ['About', 'Resume', 'Services', 'Testimonials', 'Contact'];
	$scope.pages = ['about.html', 'resume.html', 'services.html', 'resume.html'];
}])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('lime')
});