import React, { Fragment } from "react";
import Header from "../Components/Header/Header";
import styles from "./home.module.css";
import ImageSlider from "../Components/ImageSlider/ImageSlider";
import image1 from "../Assets/sliderImages/restauantTwo.jpg";
import image2 from "../Assets/sliderImages/image.webp";
import image3 from "../Assets/sliderImages/imagethree.webp";
import image4 from "../Assets/sliderImages/imageFour.webp";

const sliderImages = [image1, image2, image3, image4];

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className={styles.wrapper}>
          <Header heading="Nearby Restaurants" showHomeIcon={false} />
          <div>
            <ImageSlider images={sliderImages} />
            <div>
              include a slider in which show cards and restaurant details on it
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
