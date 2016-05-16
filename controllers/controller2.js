.app.controller('controller2', function($scope, timeSheetService) {

    init();

    function init() {

    }


    $scope.getTasksForUser = function(user) {
        var response = timeSheetService.getTasksForUser(user);
        response.then(function(data) {
            $scope.tasksUser = data;
        });
    }

})
