import axios from "../../axios/axios";

export async function queryProducts() {
    const response = await axios.get("products.json");
    const data = response?.data;
    const products = Object.values(data);
    return products;
}
