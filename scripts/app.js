angular.module("myApp", ['ngRoute']);
angular.module("myApp").controller("characterCtrl", function($scope, $http, $routeParams) {

    /*$scope.targetChampion = $routeParams.character;*/
    var param = 'AurelionSol';
    var riotkey = 'RGAPI-7F872B10-A4EE-4636-B3E4-CDA608D17B7F';
    var ggkey = 'ce03fb71f799fdd85c67d3c1fde90d8c';
    var characterList;

    $scope.region = 'br';

    $http.get('https://global.api.pvp.net/api/lol/static-data/br/v1.2/champion?api_key='+riotkey).success(function (data){
        characterList = data;
        /*$scope.$apply();*/
        /*console.log(characterList.data[param]);*/
        $scope.targetChampion = characterList.data[param];
    });

    $http.get('https://global.api.pvp.net/api/lol/static-data/br/v1.2/realm?api_key='+riotkey).success(function (data){
        $scope.reamls = data;
    });


});

angular.module('myApp').config(["$routeProvider", function($routeProvider) {
    return $routeProvider.when("/:character", {templateUrl: "/index.html", controller: 'characterCtrl'})
}]);
