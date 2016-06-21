(function() {
    'use strict';

    angular
        .module('blogApp')
        .controller('PostsDialogController', PostsDialogController);

    PostsDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'Posts', 'Blog', 'Tag'];

    function PostsDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, Posts, Blog, Tag) {
        var vm = this;

        vm.posts = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        vm.blogs = Blog.query();
        vm.tags = Tag.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.posts.id !== null) {
                Posts.update(vm.posts, onSaveSuccess, onSaveError);
            } else {
                Posts.save(vm.posts, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('blogApp:postsUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


        vm.setContent = function ($file, posts) {
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        posts.content = base64Data;
                        posts.contentContentType = $file.type;
                    });
                });
            }
        };
        vm.datePickerOpenStatus.creattionDate = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
