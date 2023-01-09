import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
  // className="pizza-block"
    speed={2}
    width={280}
    height={530}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="120" r="120" />
    <rect x="0" y="265" rx="10" ry="10" width="280" height="29" />
    <rect x="0" y="320" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="430" rx="10" ry="10" width="92" height="30" />
    <rect x="145" y="425" rx="25" ry="25" width="135" height="45" />
  </ContentLoader>
);

export default Skeleton;
