import React, { useEffect, useState } from "react";

import scrollToTop from "../../hooks/scrollToTop";

import { FacebookShareButton, TwitterShareButton } from "react-share";
import { Facebook, Twitter } from "react-feather";

import ProductImageCarousel from "../../components/ProductCarousel/ProductCarousel";
import SideBar from "../../components/SideBar/SideBar";
import ProductList from "../../components/ProductList/ProductList";

import "./productDetail.scss";

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        scrollToTop();
    }, []);

    const handleChange = (e) => {
        const { value } = e.target;
        setQuantity(~~value);
    };

    const handleSetActive = (idx) => setActiveTab(idx);

    return (
        <div className="container-fluid">
            <div className="d-flex">
                <SideBar />
                <section className="productDetail">
                    <div className="productDetail-main">
                        <div className="productDetail-left">
                            <div className="productDetail__imageGalleryContainer">
                                <ProductImageCarousel />
                            </div>

                            <div className="productDetail-additionalInfo">
                                <div className="productDetail-tabHeaders">
                                    <div
                                        className={`productDetail-tabHeaderItem ${
                                            (activeTab === 0 && "active") || ""
                                        }`}
                                        onClick={() => handleSetActive(0)}
                                    >
                                        Mo ta
                                    </div>
                                    <div
                                        className={`productDetail-tabHeaderItem ${
                                            (activeTab === 1 && "active") || ""
                                        }`}
                                        onClick={() => handleSetActive(1)}
                                    >
                                        Chat lieu
                                    </div>
                                </div>

                                <div className="productDetail-tabContents">
                                    <p
                                        className={`productDetail-tabContent ${
                                            (activeTab === 0 && "active") || ""
                                        }`}
                                    >
                                        – kích thước phủ bì : D205 X R55 X C55 –
                                        kích trước trong lòng : D179 X R40 X C35
                                        – độ dày gỗ : thành đốc 6 , đáy 6 , vad
                                        nắp 10cm.
                                    </p>

                                    <p
                                        className={`productDetail-tabContent ${
                                            (activeTab === 1 && "active") || ""
                                        }`}
                                    >
                                        quan trmj 2 sườn : tả thanh long , hữu
                                        bạch hổ , nắp trạm thất tinh liên vân
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="productDetail__details">
                            <h2 className="productDetail__name">
                                QUAN GỖ VÀNG TÂM – 216
                            </h2>

                            <p className="productDetail__sku">
                                <span>Ma san pham : </span>
                                <span>KD001</span>
                            </p>

                            <h3 className="productDetail__price">
                                <span>Gia ban : </span>
                                <span>34.000.000VND</span>
                            </h3>

                            <p className="productDetail__attribute">
                                <span>Kich thuoc : </span>
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
                    <ProductList name="Co the ban se thich" isSlide />
                    <ProductList name="San pham lien quan" isSlide />
                </section>
            </div>
        </div>
    );
};

export default ProductDetail;
