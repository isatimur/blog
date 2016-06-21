(function() {
    'use strict';

    angular
        .module('blogApp')
        .controller('BlogDetailController', BlogDetailController);

    BlogDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Blog', 'Posts', 'User'];

    function BlogDetailController($scope, $rootScope, $stateParams, entity, Blog, Posts, User) {
        var vm = this;

        vm.blog = entity;

        var unsubscribe = $rootScope.$on('blogApp:blogUpdate', function(event, result) {
            vm.blog = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
