const Annotations = require('../models/AnnotationData')


module.exports = {

    async read(request, response){
        const annotationList = await Annotations.find();

        return response.json(annotationList);
    },

    create(req, res){
        const{title, notes, priority}= req.body

        console.log(title);
        console.log(notes);
        console.log(priority);
    }
}