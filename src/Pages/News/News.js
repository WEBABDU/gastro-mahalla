import React from "react";
import NewsContent from "../../components/NewsContent/NewsContent";
import { Inform } from "../../shared/Inform/Inform";
import { PhoneForm } from "../../shared/PhoneForm/PhoneForm";

const News = () => {
  return (
    <div>
      <Inform text={"Yangliklar"} />
      <NewsContent />
      <PhoneForm/>
    </div>
  );
};

export default News;
