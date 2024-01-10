const Product = require('../model/product')





const ProductCreateRoutes = async (request, response) => {
    try {
        if(
            !request.body.name ||
            !request.body.pack ||
            !request.body.categoryID ||
            !request.body.mrp ||
            !request.body.status
        ){
            return response.status(400).send({
                message: 'Send all required fields ',
            })
        }
        const newProduct = {
            name: request.body.name,
            pack: request.body.pack,
            categoryID: request.body.categoryID,
            mrp: request.body.mrp,
            status: request.body.status
        };
        const product = await Product.create(newProduct);
        return response.status(201).send(product);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message})
       
    }
}

const ProductGetRoutes = async (request, response) => {
    try {
        const products = await Product.find({});
        return response.status(200).json({
            count: products.length,
            data: products
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}

const ProductGetIdRoutes = async(request, response) => {
    try {
        const {id} = request.params;
        const products = await Product.findById(id);
        return response.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}

const ProductEditIdRoutes = async(request, response) => {
    try {
        if ( !request.body.name ||
            !request.body.pack ||
            !request.body.categoryID ||
            !request.body.mrp ||
            !request.body.status) {
            return response.status(400).send({
                message: 'Send all required fields:',
            })
        }
        const {id} = request.params;
        const result = await Product.findByIdAndUpdate(id, request.body)
        
        if(!result) {
            return response.status(404).json({message: 'Product not found'})
        }
        return response.status(200).send({message: 'Product updated successfully'})
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
}

const ProductDeleteRoutes = async(request, response) => {
    try {
       
        const {id} = request.params;
        const result = await Product.findByIdAndDelete(id, request.body)
        
        if(!result) {
            return response.status(404).json({message: 'Product not found'})
        }
        return response.status(200).send({message: 'Product deleted successfully'})
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
}
module.exports = { ProductCreateRoutes, ProductGetRoutes,
ProductGetIdRoutes,ProductEditIdRoutes,ProductDeleteRoutes }