export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

// należy dodać kreatory akcji i je eksportować

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export default addProduct;