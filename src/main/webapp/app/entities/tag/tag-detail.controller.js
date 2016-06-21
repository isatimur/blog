(function() {
    'use strict';

    angular
        .module('blogApp')
        .controller('TagDetailController', TagDetailController);

    TagDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Tag', 'Posts'];

    function TagDetailController($scope, $rootScope, $stateParams, entity, Tag, Posts) {
        var vm = this;

        vm.tag = entity;

        var unsubscribe = $rootScope.$on('blogApp:tagUpdate', function(event, result) {
            vm.tag = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
