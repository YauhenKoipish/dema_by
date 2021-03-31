import Image from "next/image";
import React from "react";
import logoImg from "../public/logo.webp";
import telImg from "../public/tel.webp";
import mailImg from "../public/mail.webp";
import instImg from "../public/instagram.webp";
import requisitesImg from "../public/requisites.webp";
import addressImg from "../public/address.webp";
import aleksandrImg from "../public/reviews/aleksandr.webp";
import marinaImg from "../public/reviews/marina.webp";
import tamaraImg from "../public/reviews/tamara.webp";
import vadimImg from "../public/reviews/vadim.webp";
import vitaliyImg from "../public/reviews/vitaliy.webp";

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

    case "aleksandrReview":
      return (
        <Image
          alt={"aleksandrReview"}
          src={aleksandrImg}
          objectFit={"contain"}
          layout={"fill"}
        />
      );

    case "marinaReview":
      return (
        <Image
          alt={"marinaReview"}
          src={marinaImg}
          objectFit={"contain"}
          layout={"fill"}
        />
      );

    case "tamaraReview":
      return (
        <Image
          alt={"tamaraReview"}
          src={tamaraImg}
          objectFit={"contain"}
          layout={"fill"}
        />
      );

    case "vadimReview":
      return (
        <Image
          alt={"vadimReview"}
          src={vadimImg}
          objectFit={"contain"}
          layout={"fill"}
        />
      );

    case "vitaliyReview":
      return (
        <Image
          alt={"vitaliyReview"}
          src={vitaliyImg}
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
