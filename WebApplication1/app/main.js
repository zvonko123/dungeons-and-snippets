(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main);

    function main() {
        var vm = this;
        var lista = {};
        vm.cttrVar = null;
        vm.kita = function () {
            vm.cttrVar=='plzs' ? console.log('hasha je servirana: '+(vm.cttrVar)) : window.alert('sayplz');
            
        }

        //vm.kita = lista.a;
        //put kasha here
        
    }

    
    

})();