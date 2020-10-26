import { useEffect } from "react";
import { useProductsContext } from "../context/products.context";
import faker from "faker";
import { uploadData } from "../utils/helper";

export const useApp = () => {
    const [
        { products, categoriesInfo },
        { fetchProducts, setCategories, fetchCategories },
    ] = useProductsContext();

    useEffect(() => {
        if (!products) fetchProducts();
        if (!categoriesInfo) fetchCategories();
    }, []);

    const updateCategories = () => {
        if (products && categoriesInfo) {
            const categories = categoriesInfo.map((category) => {
                const productsOfCategory = products.filter(
                    (product) => product.category === category.name
                );
                return {
                    ...category,
                    products: productsOfCategory,
                };
            });

            setCategories(categories);
        }
    };

    useEffect(() => {
        updateCategories();
    }, [products]);

    return {
        loading: !products || !categoriesInfo,
    };
};

// createMockData();

// const fakeData = [...Array(100)].map(() => {
//     const productPrice = parseInt(
//         `${Math.round(faker.commerce.price()) * 1000000}`
//     );
//     let minimalPrice = productPrice;
//     const isSale = Math.random() >= 0.5;
//     const isContactForPrice = Math.random() < 0.5;
//     if (isSale) {
//         do {
//             minimalPrice = Math.round(Math.random() * productPrice);
//         } while (minimalPrice >= productPrice);
//     }

//     return {
//         name: faker.commerce.productName(),
//         material: faker.commerce.productMaterial(),
//         price: productPrice,
//         minimalPrice,
//         description: faker.commerce.productDescription(),
//         id: faker.random.uuid(),
//         image: `${faker.image.image()}?random=${Date.now()}`,
//         category: faker.commerce.department(),
//         isSale,
//         isContactForPrice,
//     };
// });

// const categories = [
//     ...new Set(
//         fakeData.map((e) => ({
//             name: e.category,
//         }))
//     ),
// ];

// const createMockData = async () => {
//     fakeData.forEach(async (item) => {
//         await uploadData("products", item);
//     });
//     categories.forEach(async (category) => {
//         console.log("category", category);
//         await uploadData("categories", category);
//     });
// };
