module.exports = function(app){
    var content = require('../controllers/content.controller')
    app.get('/content',content.render)
    app.get('/content-info',content.renderInfo)
    
    app.route('/content-info/:id')
    .get(content.renderInfo)
    .put(content.renderInfo)
    .delete(content.renderInfo)
    app.param('id',content.contentById)

 
    app.get('/api/content', content.apicontents)


    app.post('/api/content/save', content.save)
    app.post('/api/content/update', content.update)

}
