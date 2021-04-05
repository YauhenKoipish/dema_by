import { NextPageContext } from "next";
import { worksData } from "../../../services/data";
import { getImage } from "../../../services/getImage";

const Work = (data: {
  title: string;
  descTitle: string;
  shortDesc: string;
  desc: string;
  place: string;
  year: string;
  img: string;
  id: number;
}) => {
  const { title, id, descTitle, shortDesc, place, year, img } = data;

  return (
    <div key={id} className="work">
      <p className="work__title">{title}</p>
      <div className="work__content">
        <div className="work__content__img">{getImage(img)}</div>
        <div className="work__content__desc">
          <p className="work__content__desc__title">{descTitle}</p>
          <p className="work__content__desc__shortDesc">{shortDesc}</p>
          <div className="work__content__desc__data">
            <p className="work__content__desc__data__text">{`Место: ${place}`}</p>
            <p className="work__content__desc__data__text">
              {`Год проекта: ${year}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Work.getInitialProps = async ({
  query: { sectionId, workId },
}: NextPageContext) => {
  const data = worksData[+sectionId!].data.filter(
    (item) => item.id === +workId!
  )[0];

  return { ...data };
};

export default Work;
