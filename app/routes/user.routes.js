module.exports = function(app){
    var user = require('../controllers/user.controller')
    app.get('/user',user.render)
//    app.get('/user',user.list)
    app.post('/user',user.create)

    app.route('/user/:username')
        .get(user.read)
        .put(user.update)
        .delete(user.delete)
    
    app.param('username',user.userByUsername)


    app.route('/signup').get(user.renderSignup)
        .post(user.signup)
    
}
