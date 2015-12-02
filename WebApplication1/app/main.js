(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main);

    function main() {
        var vm = this;
        var lista = {};

        lista.a = function () {
            console.log('kita radi');
        }

        vm.kita = lista.a;


        vm.cttrVar ="nothing?";
        //vm.jsonVar = vm.cttrVar
        //vm.cttrVar = zHashString(jsonVar)
    }

    function zHashString(string) {
        return string.join(',',string)
    }

})();