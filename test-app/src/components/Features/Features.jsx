import React from "react";
import css from "../Card/Card.module.css";
import sprite from "../../icons/sprite.svg";
import style from "./Features.module.css";
import { Form } from "../Form/Form";

export const Features = ({ props }) => {
  return (
    <div className={css.block}>
      <ul className={style.list}>
        <li className={css.item}>
          <svg width={20} height={20} className={css.icon}>
            <use href={`${sprite}#icon-users`} />
          </svg>
          {props.adults} adults
        </li>
        <li className={css.item}>
          <svg width={20} height={20} className={css.icon}>
            <use href={`${sprite}#automatic`} />
          </svg>
          {props.transmission}
        </li>
        <li className={css.item}>
          {" "}
          <svg width={20} height={20} className={css.icon}>
            <use href={`${sprite}#icon-petrol`} />
          </svg>
          {props.engine}
        </li>
        <li className={css.item}>
          {" "}
          <svg width={20} height={20} className={css.icon}>
            <use href={`${sprite}#icon-kitchen`} />
          </svg>
          Kitchen
        </li>
        <li className={css.item}>
          {" "}
          <svg width={20} height={20} className={css.icon}>
            <use href={`${sprite}#icon-bed`} />
          </svg>
          {props.details.beds} beds
        </li>
        <li className={css.item}>
          {" "}
          <svg width={20} height={20} className={css.icon}>
            <use href={`${sprite}#icon-conditioner`} />
          </svg>
          AC
        </li>
      </ul>
    </div>
  );
};
