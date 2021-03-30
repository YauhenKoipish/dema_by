import { contactsData } from "../services/data";
import { getImage } from "../services/getImage";

export default function contacts() {
  return (
    <div className="contacts">
      <div className="contacts__container">
        {contactsData.map(({ img, title, desc }) => (
          <div className="contacts__container__elem" key={title}>
            <div className="contacts__container__elem__img">
              {getImage(img)}
            </div>
            <div className="contacts__container__elem__content">
              <div className="contacts__container__elem__content__title">
                {title}
              </div>
              {desc.map((item, index) => (
                <p
                  key={index}
                  className="contacts__container__elem__content__desc">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
