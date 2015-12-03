(function () {
    'use strict';

    angular
        .module('app')
        .controller('Hidden', hidden);

    function hidden($scope) {
        //award the player
        //var vm = this;
       $scope.food = null



        $scope.kungfu = function () {
            vm.food === 'plzs' ? console.log('hasha is served: ' + 'v=0p_1QSUsbsM') : window.alert('sayplz');

        }

        $scope.imHungry = function () {
            vm.food === 'plzs' ? console.log('Gratz: ' + '(ding)') : window.alert('sayplz');
        }
    }

})();