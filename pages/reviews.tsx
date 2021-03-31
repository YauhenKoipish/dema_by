import { useState } from "react";
import { reviewsData } from "../services/data";
import { getImage } from "../services/getImage";

export default function reviews() {
  const [currentId, setCurrentId] = useState(0);

  const handleClick = (id: number) => {
    setCurrentId(id);
  };

  return (
    <div className="reviews">
      <div className="reviews__title">Отзывы наших клиентов</div>
      <div className="reviews__container">
        <ul className="reviews__container__nav">
          {reviewsData.map(({ title, id }) => (
            <li
              key={id}
              className={`reviews__container__nav__elem  ${
                id === currentId && "active"
              }`}
              onClick={() => {
                handleClick(id);
              }}>
              {title}
            </li>
          ))}
        </ul>

        {reviewsData.map(({ text, img, id }) => (
          <div
            key={id}
            className={`reviews__container__content  ${
              id === currentId && "activeContent"
            }`}>
            <p
              className={`reviews__container__content__text  
              }`}>
              {text}
            </p>
            <div className="reviews__container__content__img">
              {getImage(img)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
