import React from "react";
import { useSessionStorage } from "../../hooks/useSessionStorage";

import { Tabs } from "antd";

import AdminProducts from "./AdminProducts";
import AdminCategories from "./AdminCategories";

import "./admin.scss";
import AdminLogin from "./AdminLogin";

const { TabPane } = Tabs;

const Admin = () => {
    const [isSignedIn, setIsSignedIn] = useSessionStorage("isSignedIn", false);

    if (!isSignedIn) {
        return <AdminLogin setSignedIn={setIsSignedIn} />;
    }

    return (
        <section className="admin">
            <Tabs defaultActiveKey="1" tabPosition="left">
                <TabPane tab="Sản phẩm" key="1">
                    <AdminProducts />
                </TabPane>
                <TabPane tab="Chuyên Mục" key="2">
                    <AdminCategories />
                </TabPane>
            </Tabs>
        </section>
    );
};

export default Admin;
