import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import style from "./Settings.module.css";
import SettingsForm from "./SettingsForm/SettingsForm";
import profile from "./../../cammon/ProfileImg.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateImage, updateProfile } from "../../redux/settings-reducer";

const Settings = () => {
  const first_name = useSelector((state) => state.auth.first_name);
  const last_name = useSelector((state) => state.auth.last_name);
  const imagePerson = useSelector((state) => state.auth.image);
  const cheef = useSelector((state) => state.auth.cheef);
  const [value, setValue] = useState(null);
  const [image, setImage] = useState(imagePerson.thumb);
  const dispatch = useDispatch();

  useEffect(() => {
    if (value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(value);
    } else {
      setImage(null);
    }
  }, [value]);

  const onSubmit = ({ first_name, last_name, phone, email, image }) => {
    const blob = new Blob([JSON.stringify(image, null, 2)], {type : 'application/json'});
    console.log(blob);
    dispatch(updateProfile(email, first_name, last_name, phone));
    dispatch(updateImage(blob));
  };

  return (
    <div className={style.wrapper}>
      <Container>
        <Row className={style.customRow}>
          <Col xl={4} lg={4} md={6} sm={6}  className={style.customCol}>
            <Sidebar />
            <div className={style.closer}></div>
          </Col>
          <Col xl={8} lg={8} md={6} sm={6}  className={style.customCol}>
            <div className={style.settingsContent}>
              <SettingsForm
                setValue={setValue}
                first_name={first_name}
                last_name={last_name}
                cheef={cheef}
                image={image}
                imagePerson={imagePerson}
                profile={profile}
                onSubmit={onSubmit}
              />
              <form className={style.settingsForm}>
                <div className={style.infoSec}>
                  <div className={style.infoCard}>
                    <label>Password</label>
                    <input type="text" />
                  </div>
                  <div className={style.infoCard}>
                    <label>Password confirm</label>
                    <input type="text" />
                  </div>
                  <div className={`${style.infoCard} ${style.infoButtons}`}>
                    <div
                      className={`${style.buttons} ${style.changePasswordBtn}`}
                    >
                      <input
                        type="submit"
                        value="Change password"
                        className={style.buttonSave}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Settings;
