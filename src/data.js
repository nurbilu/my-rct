const products = [
{ price: 1, desc: "abc", id: 1 },
{ price: 2, desc: "def", id: 2 },
{ price: 3, desc: "ghi", id: 3 },]

export const getAll = () => {
    return products;
}

// export const getSingle = (ind) => {
//     return products[ind]


// }

export const getSingleByid = (id) => {
    return products.filter(p => p.id === id)
}
