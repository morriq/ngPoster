(function(angular) {
    var module = angular.module('ng.poster', []);

    module.directive('ngPoster', function() {
        return {
            priority:   99,
            link:       function(scope, elem, attr) {
                attr.$observe('ngPoster', function(value) {
                    attr.$set('poster', value);
                });
            }
        }
    });

    return module;
})(window.angular);
