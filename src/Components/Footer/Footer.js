import React from "react";
import twitter from "../../public/twitter-bird.jpg"
import gmail from "../../public/Gmail.png"
import "./Footer.css"

export default function Footer() {
  return <div classname = "footer-stuff">
    #: 616-274-8043 <p />
    <img alt="gmail " src={gmail} />: ElijahProsperie@gmail.com <p/>
    <img alt="twitter " src={twitter} />: @ElijahProsperie
  </div>;
}
