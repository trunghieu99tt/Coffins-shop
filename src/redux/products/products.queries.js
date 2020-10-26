import axios from "../../axios/axios";

export async function queryProducts() {
    const response = await axios.get("products.json");
    const data = response?.data;
    let products = [];
    for (const [key, value] of Object.entries(data)) {
        products.push({
            dbID: key,
            ...value,
        });
    }
    return products;
}

export async function queryCategories() {
    const response = await axios.get("categories.json");
    const data = response?.data;
    let categories = [];
    for (const [key, value] of Object.entries(data)) {
        categories.push({
            dbID: key,
            ...value,
        });
    }

    return [...new Set(categories)];
}
