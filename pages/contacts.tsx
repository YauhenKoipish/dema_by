import { tel } from "../services/data";
import { getImage } from "../services/getImage";

export default function contacts() {
  return (
    <div className="contacts">
      <div className="contacts__container">
        <div className="contacts__container__elem">
          <div className="contacts__container__elem__img">
            {getImage("tel")}
          </div>
          <div className="contacts__container__elem__content">
            <div className="contacts__container__elem__content__title">
              ТЕЛЕФОН
            </div>
            <a
              href={`tel:${tel}`}
              className="contacts__container__elem__content__desc">
              {tel}
            </a>
          </div>
        </div>
        <div className="contacts__container__elem">
          <div className="contacts__container__elem__img">
            {getImage("tel")}
          </div>
          <div className="contacts__container__elem__content">
            <div className="contacts__container__elem__content__title">
              ТЕЛЕФОН
            </div>
            <a
              href={`tel:${tel}`}
              className="contacts__container__elem__content__desc">
              {tel}
            </a>
          </div>
        </div>
        <div className="contacts__container__elem">
          <div className="contacts__container__elem__img">
            {getImage("tel")}
          </div>
          <div className="contacts__container__elem__content">
            <div className="contacts__container__elem__content__title">
              ТЕЛЕФОН
            </div>
            <a
              href={`tel:${tel}`}
              className="contacts__container__elem__content__desc">
              {tel}
            </a>
          </div>
        </div>
        <div className="contacts__container__elem">
          <div className="contacts__container__elem__img">
            {getImage("tel")}
          </div>
          <div className="contacts__container__elem__content">
            <div className="contacts__container__elem__content__title">
              ТЕЛЕФОН
            </div>
            <a
              href={`tel:${tel}`}
              className="contacts__container__elem__content__desc">
              {tel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
