(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main);
    //controller used for proceeding with level
    //T0D0 add rewards
    function main($scope) {
       
        var lista = {}; // lista levela s opisima T0d0
        var vm = this;
        //learn routing
        //this function is used for leveling up
        vm.wantMore = function () {
            //something for nothing
            console.log("y so serius?")

        }
         
    }
 
})();