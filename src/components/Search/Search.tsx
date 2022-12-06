import React, { useState } from "react";
import "./search.scss";
import IconsSVG from "../../assets/image/sprite.svg";

export const Search = () => {
  const [value, setValue] = useState("");
  return (
    <div className="container">
      <div className="search">
        <div className="search__wrapper">
          <div className="search__logo">
            <a href="/">
              <svg height="25" width="113">
                <use xlinkHref={`${IconsSVG}#logo`}></use>
              </svg>
            </a>
          </div>

          <form className="search__form" action="">
            <svg height="16" width="16">
              <use xlinkHref={`${IconsSVG}#search`}></use>
            </svg>

            <input
              className="search__input"
              type="text"
              placeholder="Поиск"
              onClick={() => {}}
            ></input>
          </form>
          <div className="search__icons">
            <button>
              <svg height="22" width="19">
                <use xlinkHref={`${IconsSVG}#wishlist`}></use>
              </svg>
            </button>
            <button>
              <svg height="17" width="20">
                <use xlinkHref={`${IconsSVG}#bag`}></use>
              </svg>
            </button>
            <button>
              <svg height="15" width="20">
                <use xlinkHref={`${IconsSVG}#profile`}></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
