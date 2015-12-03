(function () {
    'use strict';

    angular
        .module('app')
        .controller('Hidden', hidden);

    function hidden($scope) {
   //award the player
    $scope.food = null;

    $scope.kungfu = function () {
        $scope.food === 'plzs' ? console.log('hasha is served: ' + 'v=0p_1QSUsbsM') : window.alert('sayplz');
            
    }

    $scope.imHungry = function () {
        $scope.food === 'plzs' ? console.log('hasha is served: ' + '(levelup)') : window.alert('sayplz');
    }
}

})();