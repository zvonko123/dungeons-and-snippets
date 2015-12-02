(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main);

    function main() {
        var vm = this;
        var lista = {};
        vm.cttrVar = null;
        vm.kungfu = function () {
            vm.cttrVar === 'plzs' ? console.log('hasha je servirana: ' + 'v=0p_1QSUsbsM') : window.alert('sayplz');
            
        }

        vm.imHungry = function () {
            vm.cttrVar === 'plzs' ? console.log('hasha je servirana: ' + 'look for the red button') : window.alert('sayplz');
        }

        //learn routing
        vm.wantMore = function () {
           //something for nothing
        }
        //vm.kita = lista.a;
        //put kasha here

        
        
    }

    
    

})();