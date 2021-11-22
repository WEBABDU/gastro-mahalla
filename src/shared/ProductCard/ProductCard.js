import React from 'react';
import style from "./ProductCard.module.css"
import { Col } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const ProductCard = ({product, userId}) => {
    return ( 
        <Col className={style.customCol} lg={8}>
            <NavLink to={`/organization/${userId}/products/${product.id}`} className={style.foodCard}>
                <div className={style.productCardImg}>
                    <img src={product.image.thumbnails.small} alt="product"/>
                </div>
                <span className={style.productTitle}>{product.title}</span>
            </NavLink>
        </Col>
     );
}
 
export default ProductCard;