import React from 'react'
import './logo.scss'
import imageStar from '../../assets/images/star.svg'
import imageWars from '../../assets/images/wars.svg'


export default props => {

   // animationByline();
return (
    <div className="starwars-logo">
     <img src={imageStar} alt="Star" className="star" />
     <img src={imageWars} alt="Wars" className="wars" />
     <h2 class="byline" id="byline"><span>T</span><span>h</span><span>e</span> <span>G</span><span>a</span><span>m</span><span>e</span></h2>
  </div>)

}
