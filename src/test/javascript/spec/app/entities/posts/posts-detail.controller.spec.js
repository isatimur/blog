'use strict';

describe('Controller Tests', function() {

    describe('Posts Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPosts, MockBlog, MockTag;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPosts = jasmine.createSpy('MockPosts');
            MockBlog = jasmine.createSpy('MockBlog');
            MockTag = jasmine.createSpy('MockTag');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'Posts': MockPosts,
                'Blog': MockBlog,
                'Tag': MockTag
            };
            createController = function() {
                $injector.get('$controller')("PostsDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'blogApp:postsUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
