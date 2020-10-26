import React from "react";
import { useProductsContext } from "../../context/products.context";

const AdminSidebar = () => {
    const [{ categories }] = useProductsContext();

    return (
        <aside className="admin-sidebar">
            <button className="admin-sidebarItem"></button>
        </aside>
    );
};

export default AdminSidebar;
