import React, { useEffect } from 'react';
import {Carousel} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import './style.css';
import { getAllBanner } from '../../actions/banner.action';
import { generatePublicUrl } from '../../urlConfig';

/**
* @author
* @function Banner
**/

const Banner = (props) => {

  const dispatch = useDispatch();
  const banner = useSelector(state => state.banner);

  useEffect(() => {
    dispatch(getAllBanner());
  },[dispatch]);

  return (
    <>
      <Carousel>
        {
          banner.banners.map((banner, index) => (
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={generatePublicUrl(banner.bannerImage)}
                alt="slides"
              />
              </Carousel.Item>
          ))
        }
      </Carousel>
    </>
  )

}

export default Banner