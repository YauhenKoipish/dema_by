import React from "react";
import Link from "next/link";
import { getImage } from "../../services/getImage";
import { instagram, mail, navList, tel } from "../../services/data";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <header className="header">
      <div className="header__container">
        <Link href="/">
          <a className="header__container__logo">{getImage("")}</a>
        </Link>

        <nav className="header__container__navigation">
          <ul className="header__container__navigation__container">
            {navList.map(({ text, path }) => (
              <Link href={path} key={path}>
                <a
                  className={`header__container__navigation__container__elem ${
                    pathname === path && "active"
                  }`}>
                  {text}
                </a>
              </Link>
            ))}
          </ul>
        </nav>
        <div className="header__container__contacts">
          <a className="header__container__contacts__elem" href={`tel:${tel}`}>
            <div className="header__container__contacts__elem__img">
              {getImage("tel")}
            </div>
            {tel}
          </a>
          <a
            className="header__container__contacts__elem"
            href={`mailto:${mail}`}>
            <div className="header__container__contacts__elem__img">
              {getImage("mail")}
            </div>

            {mail}
          </a>
          <a
            className="header__container__contacts__elem"
            href={"https://www.instagram.com/dsn_by/?igshid=wyqjk6ftvz7r"}>
            <div className="header__container__contacts__elem__img">
              {getImage("instagram")}
            </div>
            {instagram}
          </a>
        </div>
      </div>
    </header>
  );
};
