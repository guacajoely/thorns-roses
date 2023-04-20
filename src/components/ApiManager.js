export const getNurseries = () => {
    return fetch('http://localhost:8088/nurseries?_embed=nurseryStock&_embed=distributorStock')
    .then(response => response.json())
}

export const getDistributors = () => {
    return fetch('http://localhost:8088/distributors?_embed=distributorStock&_embed=retailerStock')
    .then(response => response.json())
}

export const getRetailers = () => {
    return fetch('http://localhost:8088/retailers?_embed=retailerStock')
    .then(response => response.json())
}

export const getNurseryStock = () => {
    return fetch('http://localhost:8088/nurseryStock?_expand=flower&_expand=nursery')
    .then(response => response.json())
}

export const getDistributorStock = () => {
    return fetch('http://localhost:8088/distributorStock?_expand=distributor&_expand=nursery')
    .then(response => response.json())
}

export const getRetailerStock = () => {
    return fetch('http://localhost:8088/retailerStock?_expand=distributor&_expand=retailer')
    .then(response => response.json())
}

export const getCustomers = () => {
    return fetch('http://localhost:8088/customers')
    .then(response => response.json())
}

export const createPurchase = (customerId, retailerId, flowerId, price) => {
    return fetch(`http://localhost:8088/purchases`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            customerId: +customerId,
            retailerId: +retailerId,
            flowerId: +flowerId,
            quantity: 1,
            price: +price
        })

    })
    .then(response => response.json())
    .then(window.location.href=window.location.href)
}

export const getPurchases = (id) => {
    return fetch(`http://localhost:8088/purchases?customerId=${id}&_expand=flower&_expand=retailer&_expand=customer`)
    .then(response => response.json())
}