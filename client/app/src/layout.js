import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ title, description, author, keywords, children }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      {children}
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce shop",
  description: "Online Store, shop, amazon, flipkart",
  keywords: "mangas, clothes, aesthetics",
  author: "Rudra",
};

export default Layout;
