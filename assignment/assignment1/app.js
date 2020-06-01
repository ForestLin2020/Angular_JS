(function(){
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', function($scope) {
        $scope.name = "ForestLin";
        $scope.totalvalue = 199;
        $scope.result = "Not input item yet.";
        $scope.items = "";

        $scope.myFunction = function () {
                // $scope.result = "change!";
                var numbersOfItems = calculateNumOfItems($scope.items); //get the number of items by function calculateNumOfItems
                if (numbersOfItems < 4){
                    $scope.result = "Enjoy your food!";
                }else{
                    $scope.result = "You eat Too much!";
                }
        };

        function calculateNumOfItems(string){
            var itemNumber = string.split(",").length;
            return itemNumber;
        }

        $scope.displayNumeric = function(){
            var totalNamevalue = calculateNumericForString($scope.name);
            $scope.totalvalue = totalNamevalue;
        };

        function calculateNumericForString(string){
            var totalStringValue = 0;
            for (var i = 0; i<string.length; i++){
                totalStringValue += string.charCodeAt(i);

            }
            return totalStringValue;
        }

    }); 
})();