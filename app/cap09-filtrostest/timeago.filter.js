/**
 * Created by mayco on 20/05/2017.
 */

var app = angular.module('filtersApp', []);

app.filter('timesAgo',[function () {

    var ONE_MINUTE = 1000 * 60; // 60 mil milesegundos 1 min
    var ONE_HOUR = ONE_MINUTE * 60;
    var ONE_DAY = ONE_HOUR * 24;
    var ONE_MONTH = ONE_DAY * 30;

    // Varios argunmentos no filtro return function (ts, arg1, arg2, arg3) {}
    return function (ts, optShowSecondsMessage) {

        var currentTime = new Date().getTime();
        var diff = currentTime - ts;

        if (diff < ONE_MINUTE) {
            return 'seconds ago';
        } else if (diff < ONE_HOUR) {
            return 'minutes ago';
        } else  if (diff < ONE_DAY) {
            return 'hours ago';
        } else if (diff < ONE_MONTH) {
            return 'days ago';
        } else {
            return 'months ago';
        }
    };

}]);