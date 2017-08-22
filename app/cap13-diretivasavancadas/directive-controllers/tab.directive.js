/**
 * Created by mayco on 01/07/2017.
 */
(function () {

    'use strict';

    app.directive('tab', Tab);

    Tab.$inject = [];

    function Tab() {

        return {
            restict: 'E',
            transclude: true,
            template: '<div ng-show="selected" ng-transclude></div>',
            require: '^tabs',
            scope: true,
            link: function ($scope, $element, $attr, tabCtrl) {
                    tabCtrl.registerTab($attr.title, $scope);
            }

        };
    }

})();