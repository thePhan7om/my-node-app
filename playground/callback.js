var getUser = (id, callback) => {
    var user = {
        id:id,
        name:'Pete'
    };
    
    setTimeout(() => {
        callback(user);
    },3000);
};

getUser(2,(user) => {
    console.log(user);
});