import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProductById } from "../../redux/products-reducer";
import location from "./../../cammon/location.png";
import call from "./../../cammon/Call.svg";
import style from "./Products.module.css";
import SocialNetworks from "../../shared/SocialNetworks/SocialNetworks";
import noImage from "./../../cammon/coming_soon.png";
import {
  getOrganization,
  getOrganizationById,
} from "../../redux/regions-reducer";
import { Redirect, useHistory, withRouter } from "react-router";
import { OrganizationCard } from "../../shared/OrganizationCard/OrganizationCard";
import { NavLink } from "react-router-dom";
import { MiniCards } from "../../shared/MiniCards/MiniCards";
import ProductForm from "./ProductForm";
import { setDishesAsync } from "../../redux/booking-reducer";

const Products = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [checkedStatus, setCheckedStatus] = useState(false);
  const productId = props.match.params.productId;
  const userId = props.match.params.userId;
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.productById);
  const organizationById = useSelector(
    (state) => state.regions.organizationById
  );
  const organization = useSelector((state) => state.regions.organization);
  const organizationPortion = organization.slice(0, 6);
  const history = useHistory();

  const plus = (value, func) => {
    func(value + 1);
  };

  const minus = (value, func) => {
    if (value > 1) {
      func(value - 1);
    }
  };

  const onSubmit = ({ odam, portsia, datepicker }) => {
    if (!localStorage.getItem("token")) {
      return <Redirect to="signIn" />;
    }
    const parsetDate = Date.parse(datepicker) / 1000;
    dispatch(setDishesAsync(parsetDate, odam, portsia, Number(productId)));
    setTimeout(() => {
      history.push('/bookings')
    },1000)
  };



  useEffect(() => {
    dispatch(getProductById(productId, userId));
    dispatch(getOrganizationById(userId));
    dispatch(getOrganization());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Container>
        <div className={style.textBlock}>
          <h3 className={style.textLocation}>
            Joylashgan hududingizdagi taomlar
          </h3>
          <p className={style.descripLocation}>
            Sayohat hududingizni belgilang
          </p>
        </div>
        <Row className={style.customRow}>
          <Col lg={6}>
            <div className={style.myEatCard}>
              <div className={style.myCardImage}>
                <img
                  src={
                    Object.keys(product).length
                      ? product.image.thumbnails.medium
                      : noImage
                  }
                  alt=""
                />
              </div>
              <div className={style.myCardLinks}>
                <a className={style.myLink} href="/">
                  <img src={location} alt="location" />
                  <span>{organizationById.address}</span>
                </a>
                <a className={style.myLink} href="/">
                  <img src={call} alt="call" />
                  <span className={style.cardContact}>
                    {organizationById.contact}
                  </span>
                </a>
              </div>
              <div className={style.textContent}>
                <h2 className={style.cardTitle}>{product.title}</h2>
                <p className={style.cardDescription}>{product.description}</p>
              </div>
              <div className={style.price}>
                Taom narxi:$
                {product.price}
              </div>
              <div className={style.socialNetworks}>
                <SocialNetworks />
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <ProductForm
              isActive={isActive}
              setIsActive={setIsActive}
              isActive2={isActive2}
              setIsActive2={setIsActive2}
              setCheckedStatus={setCheckedStatus}
              checkedStatus={checkedStatus}
              plus={plus}
              minus={minus}
              onSubmit={onSubmit}
            />
          </Col>
        </Row>

        <Row className={style.cardsContent}>
          {organizationPortion.map((el) => (
            <OrganizationCard key={el.id} card={el} />
          ))}
        </Row>
        <div className={style.allCard} onClick={() => window.scroll(0, 0)}>
          <NavLink to="/organization">Barchasi</NavLink>
        </div>

        <div className={style.miniCardsWrapper}>
          <MiniCards color="#f8f8f8" />
        </div>
      </Container>
    </div>
  );
};

export default withRouter(Products);
