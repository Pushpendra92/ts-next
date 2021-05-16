import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaBath, FaBed } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import httpsWithQuality from '../../utils/httpsWithQuality';
import { connect } from 'react-redux';
import {
  selectAptType,
  selectSlider,
} from 'src/store/actions/apartmentActions';

const Div = styled.div`
  background-color: rgb(246, 248, 248);
  img {
    object-fit: cover;
    width: 100%;
  }

  .slick-slide {
    padding: 0 20px;
    min-width: 350px !important ;
  }
  .slick-list {
    margin: 0 -10px;
  }

  .sliderdiv {
    padding: 10px;
    background-color: white;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .sliderdiv:hover {
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  }

  .selected-border {
    border: 1px solid red;
  }
`;

class Carousel extends Component {
  state = {
    show: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.caraouselPosition != this.props.caraouselPosition)
      this.slider.slickGoTo(this.props.caraouselPosition);
  }

  selectType = (appType) => {
    this.props.setselectedAptTypeStore(appType);
    let selectedAptIndex = this.props.aptTypes.indexOf(appType);
    this.props.courouselPositionStore(selectedAptIndex);
  };

  render() {
    const settings = {
      dots: false,
      lazyLoad: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: false,
      arrows: false,
      autoplaySpeed: 2000,
      focusOnSelect: false,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <Div className="property-carousel">
          <Slider
            {...settings}
            className="relative"
            ref={(slider) => (this.slider = slider)}
          >
            {this.props.aptTypes.length &&
              this.props.aptTypes.map((appType, id) => (
                <div
                  key={'slide#' + id}
                  onClick={() => this.selectType(appType)}
                  className={`sliderdiv ${
                    id === this.props.caraouselPosition ? 'selected-border' : ''
                  }`}
                >
                  <img
                    src={httpsWithQuality(appType.image_url, 450)}
                    alt={appType.file_name}
                    className="img-responsive"
                  />
                  {/* </div> */}
                  <div className="py-2 flex justify-between">
                    <div>
                      <p className="text-base">{appType.type}</p>
                    </div>
                    <div>
                      <span className="text-base font-extrabold">
                        {appType.cost}
                      </span>
                      /night
                    </div>
                  </div>
                  <div className="flex gap-2 flex-row items-center">
                    <FaBed size={24} />
                    <span className="font-bold">{appType.no_of_bedrooms}</span>
                    <FaBath size={24} />
                    <span className="font-bold">{appType.no_of_bathrooms}</span>
                  </div>
                  <hr></hr>
                  <div className="flex-col">
                    <div className="flex gap-1 items-center py-2">
                      <ImLocation />
                      <span>Shibuya</span>
                    </div>
                    <div>Max residents: {appType.max_number_of_residents}</div>
                  </div>
                </div>
              ))}
          </Slider>
        </Div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    caraouselPosition: state.apt_info.caraouselPosition,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setselectedAptTypeStore: (selectedAptType) => {
      dispatch(selectAptType({ selectedAptType }));
    },
    courouselPositionStore: (caraouselPosition) => {
      dispatch(selectSlider({ caraouselPosition }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
