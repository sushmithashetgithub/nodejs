const getProducts=(req,res)=>{
    res.send("Fetching all products")
}

const getProductsByID=(req, res) => {
    const id = req.params.id;
    res.send(`Fetching product with ID: ${id}`);
}

const PostNewProduct=(req, res) => {
    res.send("Adding a new product");
}

const editProduct=(req,res)=>{
    res.send("put request called.");
}

const deleteProduct=((req,res)=>{
    res.send("delete request called.");
})

module.exports={
    getProducts,
    getProductsByID,
    PostNewProduct,
    editProduct,
    deleteProduct
}