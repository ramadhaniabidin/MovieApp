var app = angular.module('app', ['angular.filter']);

app.service('svc', function ($http) {
    this.svc_GetAllMovies = function () {
        var response = $http({
            method: 'GET',
            url: 'https://localhost:7116/api/Movie/GetAllMovies',
            data: {},
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        });
        return response;
    }
})

app.controller('ctrl', function ($scope, svc) {
    $scope.GetAllMovies = function () {
        try {
            var promise = svc.svc_GetAllMovies();
            promise.then(function (response) {
                /*var resp_data = JSON.parse(response.data.d);*/
                console.log(response.data);
            })
        }
        catch (e) {
            console.log(e.message);
        }
    }


    $scope.GetAllMovies();
})