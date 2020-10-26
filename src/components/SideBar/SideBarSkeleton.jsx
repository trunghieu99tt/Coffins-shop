import React from "react";
import Skeleton from "react-loading-skeleton";

import ItemSkeleton from "../ProductList/ItemSkeleton";

const SideBarSkeleton = () => {
    return (
        <section className="sidebar">
            <Skeleton height="50px" />
            <div className="sidebar-main">
                {[...Array(10)].map((_, idx) => (
                    <ItemSkeleton key={`sidebarItemSkeleton-${idx}`} />
                ))}
            </div>
        </section>
    );
};

export default SideBarSkeleton;
