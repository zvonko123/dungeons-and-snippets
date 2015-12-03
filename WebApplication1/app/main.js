(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main);

    function main() {
        var vm = this;
        var lista = {};
        vm.cttrVar = null;
        

        vm.imHungry = function () {
            vm.cttrVar === 'plzs' ? console.log('hasha is served: ' + 'look for the red button') : window.alert('sayplz');
        }

        //learn routing
        vm.wantMore = function () {
            //something for nothing

        }
        //vm.kita = lista.a;
        //put kasha here     
    }
 
})();