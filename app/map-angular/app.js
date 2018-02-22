var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.groupedMedia = {};    
    $scope.groupedMedia['2014_January'] = [{name:'file1', lastModified:'20-Jan-2014'},{name:'file2', lastModified:'21-Jan-2014'}];
    $scope.groupedMedia['2013_December'] = [{name:'file1', lastModified:'20-Jan-2013'},{name:'file2', lastModified:'20-Apr-2013'}];
    
    console.log($scope.groupedMedia); //This will provide an output like below.
    //{'2014_January': Array[5], '2013_December': Array[95]}
    
    $scope.groupKeys = function(data){
      return Object.keys(data);
    }
});
