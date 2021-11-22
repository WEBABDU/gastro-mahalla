import React from 'react';
import { Container } from 'react-bootstrap';
import style from "./Inform.module.css";
import telegram from "./../../cammon/telegram.png";
import instagram from "./../../cammon/instagram.png";
import facebook from "./../../cammon/facebook.png";
import { Link } from 'react-router-dom';

export const Inform = ({text}) => {
    return (
        <div className={style.wrapper}>
            <Container>
                <div className={style.informLinks}>
                    <div className={style.text}>
                        <Link to="/" className={style.routerLinks}>
                            Bosh sahifa
                        </Link>
                        <span>
                            {text}
                        </span>
                    </div>
                    <div className={style.links}>
                        <div className={style.linkText}>Ulashish</div>
                        <a className={style.shareLinks} href="https://www.facebook.com/">
                            <img src={facebook} alt="facebook"/>
                        </a>
                        <a className={style.shareLinks} href="https://www.instagram.com/">
                            <img src={instagram} alt="instagram"/>
                        </a>
                        <a className={style.shareLinks} href="https://www.telegram.com/">
                            <img src={telegram} alt="telegram"/>
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}