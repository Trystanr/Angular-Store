function findProduct(prodID) {

    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].id == prodID) {
            return productArray[i];
        }
    }

    return 0;
}