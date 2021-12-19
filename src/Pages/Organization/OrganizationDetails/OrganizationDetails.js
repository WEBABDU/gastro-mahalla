import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/products-reducer";
import {
  getOrganization,
  getOrganizationById,
} from "../../../redux/regions-reducer";
import { NavLink, withRouter } from "react-router-dom";
import style from "./OrganizationDetails.module.css";
import location from "./../../../cammon/Location.svg";
import call from "./../../../cammon/Call.svg";
import noImage from "./../../../cammon/coming_soon.png";
import SocialNetworks from "../../../shared/SocialNetworks/SocialNetworks";
import ProductCard from "../../../shared/ProductCard/ProductCard";
import { OrganizationCard } from "../../../shared/OrganizationCard/OrganizationCard";
import { MiniCards } from "../../../shared/MiniCards/MiniCards";

const OrganizationDetails = (props) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.regions.organizationById);
  const products = useSelector((state) => state.products.products);
  const organization = useSelector((state) => state.regions.organization);
  const organizationPortion = organization.slice(0, 6);
  console.log("deta", props.match.locale);

  useEffect(() => {
    let userId = props.match.params.userId;
    dispatch(getOrganizationById(userId));
    dispatch(getProducts(userId));
    dispatch(getOrganization());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, props.match.params.userId]);

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
                    Object.keys(details).length
                      ? details.image.thumbnails.medium
                      : noImage
                  }
                  alt="userImage"
                />
              </div>
              <div className={style.myCardLinks}>
                <a className={style.myLink} href="/">
                  <img src={location} alt="location" />
                  <span>{details.address}</span>
                </a>
                <a className={style.myLink} href="/">
                  <img src={call} alt="call" />
                  <span className={style.cardContact}>{details.contact}</span>
                </a>
              </div>
              <div className={style.textContent}>
                <h2 className={style.cardTitle}>{details.title}</h2>
                <p className={style.cardDescription}>{details.description}</p>
              </div>
              <div className={style.socialNetworks}>
                <SocialNetworks />
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className={style.foodMenu}>
              <Row className={style.cusRow}>
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    userId={props.match.params.userId}
                  />
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        <Row className={style.cardsContent}>
          {organizationPortion.map((el) => (
            <OrganizationCard key={el.id} card={el} match={props.match} />
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

export default withRouter(OrganizationDetails);
