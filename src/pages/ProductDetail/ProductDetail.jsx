import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useProductsContext } from "../../context/products.context";

import scrollToTop from "../../hooks/scrollToTop";

import { FacebookShareButton, TwitterShareButton } from "react-share";
import { Facebook, Twitter } from "react-feather";

import ProductImageCarousel from "../../components/ProductCarousel/ProductCarousel";
import SideBar from "../../components/SideBar/SideBar";
import ProductList from "../../components/ProductList/ProductList";

import "./productDetail.scss";
import ProductMainSkeleton from "./ProductDetailSkeleton";
import { formatMoney } from "../../utils/helper";

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState(0);

    const { id } = useParams();
    const [{ products }] = useProductsContext();

    useEffect(() => {
        scrollToTop();
    }, []);

    const handleChange = (e) => {
        const { value } = e.target;
        setQuantity(~~value);
    };

    const handleSetActive = (idx) => setActiveTab(idx);

    if (!products)
        return (
            <div className="container-fluid">
                <div className="d-flex">
                    <SideBar />
                    <ProductMainSkeleton />
                </div>
            </div>
        );

    const product = products?.length > 0 && products.find((pr) => pr.id === id);

    const { name, image, price, description, category } = product;

    const relatedProducts = products.filter(
        (product) => product.category === category
    );
    const interestingProducts = products.filter(
        (product) => product.category !== category
    );

    return (
        <div className="container-fluid">
            <div className="d-flex">
                <SideBar />

                <section className="productDetail">
                    <div className="productDetail-main">
                        <div className="productDetail-left">
                            <div className="productDetail__imageGalleryContainer">
                                <ProductImageCarousel images={image} />
                            </div>

                            <div className="productDetail-additionalInfo">
                                <div className="productDetail-tabHeaders">
                                    <div
                                        className={`productDetail-tabHeaderItem ${
                                            (activeTab === 0 && "active") || ""
                                        }`}
                                        onClick={() => handleSetActive(0)}
                                    >
                                        Mô tả
                                    </div>
                                    <div
                                        className={`productDetail-tabHeaderItem ${
                                            (activeTab === 1 && "active") || ""
                                        }`}
                                        onClick={() => handleSetActive(1)}
                                    >
                                        Chất liệu
                                    </div>
                                </div>

                                <div className="productDetail-tabContents">
                                    <p
                                        className={`productDetail-tabContent ${
                                            (activeTab === 0 && "active") || ""
                                        }`}
                                    >
                                        {description || ""}
                                    </p>

                                    <p
                                        className={`productDetail-tabContent ${
                                            (activeTab === 1 && "active") || ""
                                        }`}
                                    >
                                        {description || ""}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="productDetail__details">
                            <h2 className="productDetail__name">
                                {name || ""}
                            </h2>

                            <p className="productDetail__sku">
                                <span>Mã sản phẩm : </span>
                                <span>{id || ""}</span>
                            </p>

                            <h3 className="productDetail__price">
                                <span>Giá bán : </span>
                                <span>{`${formatMoney(price)}` || ""}VND</span>
                            </h3>

                            <p className="productDetail__attribute">
                                <span>Kích thước : </span>
                                <span>D205 X R55 X C55</span>
                            </p>

                            <p className="productDetail__attribute">
                                <span>Tình trạng: : </span>
                                <span>Moi</span>
                            </p>

                            <div className="productDetail-addToCart">
                                <div className="form-group">
                                    <label htmlFor="quantity">So luong</label>
                                    <input
                                        id="quantity"
                                        type="number"
                                        className="form-control productDetail__quantityInput"
                                        value={quantity}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button className="productDetail__addToCartBtn">
                                    Them vao gio hang
                                </button>
                            </div>

                            <div className="productDetail-share">
                                <FacebookShareButton
                                    className="productDetail__socialBtn"
                                    url="https://pwa-ee-kouzwqy-clo7ogzok2phi.eu-5.magentosite.cloud/products/lait-creme-concentre-tube"
                                    quote="Quach"
                                >
                                    <Facebook />
                                    <span>CHIA SE</span>
                                </FacebookShareButton>

                                <TwitterShareButton
                                    className="productDetail__socialBtn"
                                    url="https://pwa-ee-kouzwqy-clo7ogzok2phi.eu-5.magentosite.cloud/products/lait-creme-concentre-tube"
                                    title="Quach"
                                >
                                    <Twitter />
                                    <span>{"TWEET"}</span>
                                </TwitterShareButton>
                            </div>
                        </div>
                    </div>
                    <ProductList
                        name="Có thể bạn sẽ thích"
                        isSlide
                        items={interestingProducts}
                    />
                    <ProductList
                        name="sản phẩm liên quan"
                        isSlide
                        items={relatedProducts}
                    />
                </section>
            </div>
        </div>
    );
};

export default ProductDetail;
