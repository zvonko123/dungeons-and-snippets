(function () {
    'use strict';

    angular
        .module('app')
        .controller('Hidden', hidden);

    function hidden() {
   //award the player
        var vm = this;
        vm.food = null


   
    vm.kungfu = function () {
        vm.food === 'plzs' ? console.log('hasha is served: ' + 'v=0p_1QSUsbsM') : window.alert('sayplz');
            
    }

    vm.imHungry = function () {
        vm.food === 'plzs' ? console.log('Gratz: ' + '(ding)') : window.alert('sayplz');
    }
}

})();