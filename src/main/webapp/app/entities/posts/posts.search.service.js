(function() {
    'use strict';

    angular
        .module('blogApp')
        .factory('PostsSearch', PostsSearch);

    PostsSearch.$inject = ['$resource'];

    function PostsSearch($resource) {
        var resourceUrl =  'api/_search/posts/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
