import style from "./SocialNetworks.module.css";
import instagram from "./../../cammon/instagram.png";
import telegram from "./../../cammon/telegram.png";
import facebook from "./../../cammon/facebook.png";


const SocialNetworks = () => {
  return (
    <>
      <div className={style.socialNetworksBlock}>
        <div className={style.linksImg}>
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="/">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="/">
            <img src={telegram} alt="telegram" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialNetworks;
