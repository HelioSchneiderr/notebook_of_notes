const Annotations = require('../models/AnnotationData')

module.exports = {
    async read(req, res){
         const priority = request.query;

         const priorityNotes = await Annotations.find(priority)

         return response.json(priorityNotes)
    },

    async update(req, res){
        const {id} = request.params;

        const annotation = await Annotations.findOne({_id : id});

        if (annotation.priority){
            annotation.priority = false;

        }else{
            annotation.priority = true;
        }

        await annotation.save();

        return response.json(annotation)
        
    }

}