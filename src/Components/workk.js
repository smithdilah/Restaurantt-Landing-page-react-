import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Kami menyajikan makanan yang tidak hanya memanjakan lidah, tetapi juga menjaga kesehatan tubuh Anda. ",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Pilih makanan sehat favorit Anda dan nikmati rasa lezat tanpa kompromi pada kesehatan Anda. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Nikmati pengiriman cepat yang menjamin kesegaran setiap hidangan.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Nikmati hidangan yang tidak hanya lezat tetapi juga penuh dengan nutrisi.
        Rasakan perbedaannya dalam setiap gigitan dan tetap sehat setiap hari.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;