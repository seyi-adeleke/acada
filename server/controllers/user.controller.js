exports.updateUser = function(req,res){
    var userUpdates = req.body;
    console.log(req.body);

    req.user.firstName = userUpdates.firstName;
    req.user.email = userUpdates.email;
    req.user.password = userUpdates.password;

    req.user.save(function(err){
        if(err){
            res.status(400);
            return res.send({
                reason:err.toString()
            });
        };
        res.send(req.user);
    })

}