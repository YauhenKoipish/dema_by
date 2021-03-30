import Image from "next/image";
import React from "react";
import logoImg from "../public/logo.webp";
import telImg from "../public/tel.webp";
import mailImg from "../public/mail.webp";
import instImg from "../public/instagram.webp";
import requisitesImg from "../public/requisites.webp";
import addressImg from "../public/address.webp";

export const getImage = (imgName: string) => {
  switch (imgName) {
    case "tel":
      return (
        <Image alt={"tel"} src={telImg} objectFit={"contain"} layout={"fill"} />
      );
    case "mail":
      return (
        <Image
          alt={"mail"}
          src={mailImg}
          objectFit={"contain"}
          layout={"fill"}
        />
      );
    case "requisites":
      return (
        <Image
          alt={"requisites"}
          src={requisitesImg}
          objectFit={"contain"}
          layout={"fill"}
        />
      );
    case "instagram":
      return (
        <Image
          alt={"instagram"}
          src={instImg}
          objectFit={"contain"}
          layout={"fill"}
        />
      );
    case "address":
      return (
        <Image
          alt={"address"}
          src={addressImg}
          objectFit={"contain"}
          layout={"fill"}
        />
      );

    default:
      return (
        <Image
          alt={"test"}
          src={logoImg}
          objectFit={"contain"}
          layout={"fill"}
        />
      );
  }
};
