import { worksData } from "../services/data";
import { useState } from "react";
import { WorkExample } from "../components/WorkExample/WorkExample";

export default function works() {
  const [currentId, setCurrentId] = useState<number>(0);

  const changeSection = (id: number) => {
    setCurrentId(id);
  };

  return (
    <div className="works">
      <p className="works__title">Наши работы</p>
      <div className="works__main">
        <div className="works__main__navigation">
          {Object.values(worksData).map(({ id, name }) => (
            <div
              key={id}
              className="works__main__navigation__elem"
              onClick={() => {
                changeSection(id);
              }}>
              <p className="works__main__navigation__elem__text">{name}</p>
              <p className="works__main__navigation__elem__arrow"> {"❯"}</p>
            </div>
          ))}
        </div>
        <div className="works__main__content">
          <WorkExample data={worksData[currentId]} />
        </div>
      </div>
    </div>
  );
}
