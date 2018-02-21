module.exports = function(app){
    var content = require('../controllers/content.controller')
    app.get('/content',content.render)
 
    app.get('/api/content', content.apicontents)

}
