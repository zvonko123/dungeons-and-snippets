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
            vm.cttrVar === 'plzs' ? console.log('hasha je servirana: ' + (vm.cttrVar)) : window.alert('sayplz');
        }

        //vm.kita = lista.a;
        //put kasha here

        
        
    }

    
    

})();