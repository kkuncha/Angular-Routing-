/**
 * Created by VenkatSandeep on 7/10/2015.
 */
app.controller("addContactController",function($scope,userService){

    $scope.txtName="sandeep";
    $scope.txtAge="";
    $scope.txtNumber="";
    $scope.txtGender="male";
    $scope.submitted=false;
    $scope.addContact=function(){
        $scope.submitted=true;
        var users=userService.getAllUsers();
        var id=users.length+1;
        userService.addContactDetails($scope.txtName,$scope.txtAge,$scope.txtNumber,$scope.txtGender,id);
    }
});