export default function reviews() {
  return (
    <div className="reviews">
      <div className="reviews__title">Отзывы наших клиентов</div>
      <div className="reviews__container">
        <ul className="reviews__container__nav">
          <li className="reviews__container__nav__elem">ProStore</li>
          <li className="reviews__container__nav__elem">FIMA</li>
          <li className="reviews__container__nav__elem">Litana</li>
        </ul>
        <div className="reviews__container__content">
          <p className="reviews__container__content__text">
            ООО «ПрофиСлав-Строй» в 2017 году выполняло работы по строительству
            светофорного объекта, прокладки кабельной канализации,
            благоустройству, сети связи ОРУД, устройству организации безопасного
            движения на объекте: «Реконструкция светофорного объекта с
            организацией выезда налево на пересечении пр. Партизанский-заезд на
            гостевую стоянку здания специализированной розничной торговли по пр.
            Партизанский, 182».
          </p>
        </div>
      </div>
    </div>
  );
}
