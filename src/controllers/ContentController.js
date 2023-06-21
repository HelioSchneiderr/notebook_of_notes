const Annotations = require('../models/AnnotationData')

module.exports = {
    async update(req, res){
        const { id } = request.params;
        const { notes } = request.body;

        const annotation = await Annotations.findOne({_id: id});

        if (notes){
            annotation.notes = notes

            await annotation.save()
        }

        return response.json(annotation);
    }
}