import React from "react";
import { getImage } from "../../services/getImage";
import { worksDataInterface } from "../../services/interfaces";
import { Button } from "../Button/Button";

export const WorkExample: React.FC<{ data: worksDataInterface }> = ({
  data,
}) => {
  return (
    <div>
      {data.data.map(
        ({ title, id, descTitle, shortDesc, place, year, img }) => (
          <div key={id} className="work">
            <p className="work__title">{title}</p>
            <div className="work__content">
              <div className="work__content__img">{getImage(img)}</div>
              <div className="work__content__desc">
                <p className="work__content__desc__title">{descTitle}</p>
                <p className="work__content__desc__shortDesc">{shortDesc}</p>
                <div className="work__content__desc__data">
                  <p className="work__content__desc__data__text">
                    {`Место: ${place}`}
                  </p>
                  <p className="work__content__desc__data__text">
                    {`Год проекта: ${year}`}
                  </p>
                </div>
                <div className="work__content__desc__aboutBtn">
                  <Button
                    text="Подробнее"
                    id={{ sectionId: data.id, workId: id }}
                  />
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
