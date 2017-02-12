/**
 * Created by VenkatSandeep on 7/4/2015.
 */
var app = angular.module("contactApp",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl:"views/home.html",
            controller:"contactListController"
        })
        .when('/add',{
            templateUrl:"views/addContact.html",
            controller:'addContactController'
        })
        .when('/edit/:id',{
            templateUrl:"views/addContact.html",
            controller:'editContactController'
        })
        .otherwise({
            redirectTo:"/home"
        })
});