import React from "react";

const PageContainer = ({ children }) => {
    return (
        <div
            style={{
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "24px 16px",
                boxSizing: "border-box",
            }}
        >
            {children}
        </div>
    );
};

export default PageContainer;
