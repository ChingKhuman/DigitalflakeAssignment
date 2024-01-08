const express = require('express')

const Category = require('../model/category')

const router = express.Router()

router.post('/', async(request, response)=> {
    try {
        if(
            !request.body.name ||
            !request.body.description ||
            !request.body.status
        ){
            return response.status(400).send({
                message: 'Send all required fields ',
            })
        }
        const newCategory = {
            name: request.body.name,
            description: request.body.description,
            status: request.body.status
        };
        const category = await Category.create(newCategory);
        return response.status(201).send(category);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message})
       
    }
})

router.get('/', async (request, response) => {
    try {
        const categories = await Category.find({});
        return response.status(200).json({
            count: categories.length,
            data: categories
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})
router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const categories = await Category.findById(id);
        return response.status(200).json(categories);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

router.put('/:id', async (request, response) => {
    try {
        if (  !request.body.name ||
            !request.body.description ||
            !request.body.status) {
            return response.status(400).send({
                message: 'Send all required fields:',
            })
        }
        const {id} = request.params;
        const result = await Category.findByIdAndUpdate(id, request.body)
        
        if(!result) {
            return response.status(404).json({message: 'Category not found'})
        }
        return response.status(200).send({message: 'Category updated successfully'})
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
})

router.delete('/:id', async (request, response) => {
    try {
       
        const {id} = request.params;
        const result = await Category.findByIdAndDelete(id, request.body)
        
        if(!result) {
            return response.status(404).json({message: 'Category not found'})
        }
        return response.status(200).send({message: 'Category deleted successfully'})
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
})
module.exports = router;