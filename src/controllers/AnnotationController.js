const Annotations = require('../models/AnnotationData')


module.exports = {

    async read(request, response){
        const annotationList = await Annotations.find();

        return response.json(annotationList);
    },

    async create(req, res){
        const{title, notes, priority}= req.body

        if(!notes || !title){
            return res.status(400).json(error)
        }

        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority
        });

        return res.json(annotationCreated)

    },

    async delete(request, responde){

        const { id } = request.params;

        const annotationDeleted = await Annotations.findOneAndDelete({_id: id})
        
        if(annotationDeleted){
            return responde.json(annotationDeleted)
        }

        return responde.status(401).json({error: "Não foi encontrado um registro"})
    }
}