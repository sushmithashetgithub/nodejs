const getCartByUserId=(req, res) => {
    const userId = req.params.userId;
    res.send(`Fetching cart for user with ID: ${userId}`);
}

const postCartByUserId=(req, res) => {
    const userId = req.params.userId;
    res.send(`Adding product to cart for user with ID: ${userId}`);
}

module.exports={
    getCartByUserId,
    postCartByUserId
}