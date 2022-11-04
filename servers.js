app.get("/user/:username", (req, res) => {
    Register.findOne({username: req.params.username}, function (err, data) {
      if (err){
        res.status(500).send(err)
    } else{ 
      if( data.blocked == 0 ){
        data.blocked = 1}
      if( data.blocked == 1 ){ 
        data.blocked = 0 } }
          res.status(200).json({success :true ,message: data}) 
      
    })
  })