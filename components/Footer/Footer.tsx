import React from "react";

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <span className="footer__content__text">УНП 193240087 © 2019-2029</span>
        <span className="footer__content__text">
          Благоустройство в Беларуси
        </span>
        <a
          href={`mailto:yauhen.koipish@gmail.com`}
          className="footer__content__powered">
          Powered by YaKo
        </a>
      </div>
    </div>
  );
};
