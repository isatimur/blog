(function() {
    'use strict';

    angular
        .module('blogApp')
        .controller('PostsDetailController', PostsDetailController);

    PostsDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'DataUtils', 'entity', 'Posts', 'Blog', 'Tag'];

    function PostsDetailController($scope, $rootScope, $stateParams, DataUtils, entity, Posts, Blog, Tag) {
        var vm = this;

        vm.posts = entity;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('blogApp:postsUpdate', function(event, result) {
            vm.posts = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
