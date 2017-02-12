/**
 * Created by VenkatSandeep on 7/4/2015.
 */
app.factory("userService",function(){
   var users=[];
    return{
        addContactDetails:function(name, age, number, gender, id){
            var userObject={
                userName:name,
                userAge:age,
                userNumber:number,
                userGender:gender,
                userId:id
            };
            users.push(userObject);
            return userObject;
        },
        getAllUsers:function(){
            return users;
        },
        deleteUser:function(id){
            for(var i=0;i<users.length;i++){
                if(id==users[i].userId){
                    users.splice(i,1);
                }
            }
        },
        getUserById:function(id){
            for(var i=0;i<users.length;i++){
                if(id==users[i].userId){
                    return users[i];
                }
            }
        }
    }
});