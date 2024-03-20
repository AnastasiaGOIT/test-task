import { useState } from "react";
import { Button } from "../Button";
import css from "./Card.module.css";
import sprite from "../../icons/sprite.svg";

export const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const shortenDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + "...";
  };
  return (
    <div className={css.container}>
      <div>
        <img
          className={css.image}
          src={props.gallery[0]}
          alt="img"
          width="290px"
          height="309px"
        />
      </div>
      <div className={css.container_s}>
        <div className={css.name_price}>
          <h3>{props.name}</h3>
          <p>{props.price}</p>

          <svg width={24} height={24} className={css.icon}>
            <use href={`${sprite}#icon-heart`} />
          </svg>
        </div>
        <a>{props.rating}</a>
        <p>{props.location}</p>
        <p>
          {expanded
            ? props.description
            : shortenDescription(props.description, 100)}
        </p>
        <ul className={css.list}>
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
        <button children={"Show more"} className={css.button_red} />
      </div>
    </div>
  );
};
