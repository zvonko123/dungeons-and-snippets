(function () {
    'use strict';

    angular
        .module('app')
        .controller('Kasha', hidden);

    function hidden() {
    var vm = this;

    $scope.kungfu = function () {
        $scope.food === 'plzs' ? console.log('hasha is served: ' + 'v=0p_1QSUsbsM') : window.alert('sayplz');
            
    }
}

})();