import React from "react";

import { MapPin, Mail, Phone, Radio } from "react-feather";

import ReactPlayer from "react-player";
import BackToTop from "../../components/BackToTop/BackToTop";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="footer-inner">
                    <div className="info">
                        <h2 className="footer__heading">Thông tin liên hệ</h2>
                        <h3 className="company-name">QUÁCH GỖ VÀNG TÂM</h3>
                        <p className="info-item">
                            <span>
                                <MapPin />
                            </span>
                            <strong>Địa chỉ:</strong>
                            Đội 2 Chàng Sơn – Thạch Thất – Hà Nội
                        </p>
                        <p className="info-item">
                            <span>
                                <MapPin />
                            </span>
                            <strong>xưởng sản xuất</strong> : chùa tây phương –
                            thạch thất – hà nội.
                        </p>
                        <div className="info-item">
                            <p>
                                <strong>Số điện thoại : </strong>
                            </p>
                            <p>
                                <Phone></Phone>
                                0982955223
                            </p>
                            <p>
                                <Phone></Phone>
                                0912366682
                            </p>
                        </div>
                        <p className="info-item">
                            <span>
                                <Mail />
                            </span>
                            <strong>Email : </strong> dungminh8891@gmail.com
                        </p>
                        <p className="info-item">
                            <span>
                                <Radio />
                            </span>
                            <strong>Website : </strong>
                            http://quachgovangtam.com
                        </p>
                    </div>

                    <div className="social">
                        <h2 className="footer__heading">Like facebook</h2>
                    </div>

                    <div className="map">
                        <h2 className="footer__heading">Bản đồ </h2>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14895.343907210274!2d105.596856!3d21.039248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345756edd6cff9%3A0xa056c6415a6f9972!2zQ2jDoG5nIFPGoW4sIFRo4bqhY2ggVGjhuqV0LCBIYW5vaSwgVmlldG5hbQ!5e0!3m2!1sen!2sus!4v1602428516750!5m2!1sen!2sus"
                            frameborder="0"
                            ariaHidden="false"
                            title="map"
                        ></iframe>
                    </div>

                    <div className="youtubeVideo">
                        <h2 className="footer__heading">VIDEO YOUTUBE</h2>

                        <ReactPlayer url="https://www.youtube.com/watch?v=RyF4r5xCjdw"></ReactPlayer>
                    </div>
                </div>
            </div>

            <BackToTop />
        </footer>
    );
};

export default Footer;
