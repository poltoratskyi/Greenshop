import { svgSearch } from "../../shared/header/actions";

import Style from "./header.module.scss";

import { Input } from "../../ui/input";
import { Menu } from "./menu-mobile";

const svgFilter = (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path
      d="M10.2144 16.3926H4.28125"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.9375 16.3934C13.9375 18.2651 14.5617 18.8884 16.4325 18.8884C18.3033 18.8884 18.9274 18.2651 18.9274 16.3934C18.9274 14.5218 18.3033 13.8984 16.4325 13.8984C14.5617 13.8984 13.9375 14.5218 13.9375 16.3934Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.9951 6.77801H18.9274"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.27202 6.77677C9.27202 4.90595 8.64786 4.2818 6.77704 4.2818C4.9054 4.2818 4.28125 4.90595 4.28125 6.77677C4.28125 8.64841 4.9054 9.27175 6.77704 9.27175C8.64786 9.27175 9.27202 8.64841 9.27202 6.77677Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Mobile: React.FC = () => {
  return (
    <div className={Style.mobile}>
      <Input
        id="mobileSearchInput"
        name="query"
        type="text"
        svg={true}
        svgSearch={svgSearch}
        svgFilter={svgFilter}
        className="mobile"
        inputPlaceholder="Find your plants"
      />

      <Menu />
    </div>
  );
};
