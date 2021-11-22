import React from "react";
import Foods from "../../components/Foods/Foods";
import Header from "../../components/Header/Header";
import AboutNewsContent from "../../components/AboutNewsContent/AboutNewsContent";
import ProjectName from "../../components/ProjectName/ProjectName";
import SignModeContent from "../../components/SignModeContent/SignModeContent";
import { PhoneForm } from "../../shared/PhoneForm/PhoneForm";


const Home = () => {
  return (
    <>
      <Header />
      <Foods />
      <ProjectName />
      <AboutNewsContent />
      <SignModeContent />
      <PhoneForm />
    </>
  );
};

export default Home;
