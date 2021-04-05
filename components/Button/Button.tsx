import Link from "next/link";
import React from "react";

export const Button: React.FC<{
  text: string;
  id: { sectionId: number; workId: number };
}> = ({ text, id }) => {
  return (
    <Link href={`/work/${id.sectionId}/${id.workId}`}>
      <button className="btn">
        <span className="btn__circle" aria-hidden="true">
          <span className="btn__circle__icon btn__circle__arrow"></span>
        </span>
        <a className="btn__text">{text}</a>
      </button>
    </Link>
  );
};
