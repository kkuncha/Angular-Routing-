/**
 * Created by VenkatSandeep on 7/10/2015.
 */
app.controller("contactListController",function($scope, userService){

    $scope.contactList=userService.getAllUsers();
    console.log($scope.contactList);

    $scope.deleteContact=function(id){
        console.log(userService.getUserById(id));

        userService.deleteUser(id);
        $scope.contactList=userService.getAllUsers();
    }


});