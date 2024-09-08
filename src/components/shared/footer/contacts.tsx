import { Logo } from "../header/logo";
import Style from "./footer.module.scss";

const info = [
  {
    descr: "70 West Buckingham Ave.Farmingdale, NY 11735",
    svg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0918 8.92531C12.0918 7.77425 11.1591 6.84155 10.0081 6.84155C8.85787 6.84155 7.92517 7.77425 7.92517 8.92531C7.92517 10.0755 8.85787 11.0082 10.0081 11.0082C11.1591 11.0082 12.0918 10.0755 12.0918 8.92531Z"
          stroke="#46A358"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99959 17.5C7.58457 17.5 3.75 13.2989 3.75 8.8322C3.75 5.33539 6.54758 2.5 9.99959 2.5C13.4516 2.5 16.25 5.33539 16.25 8.8322C16.25 13.2989 12.4154 17.5 9.99959 17.5Z"
          stroke="#46A358"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    descr: "contact@greenshop.com",
    svg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6208 7.51587C14.6208 7.51587 11.9457 10.7264 9.98919 10.7264C8.03347 10.7264 5.32837 7.51587 5.32837 7.51587"
          stroke="#46A358"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.0434 9.97404C2.0434 4.27562 4.02753 2.37671 9.97991 2.37671C15.9323 2.37671 17.9164 4.27562 17.9164 9.97404C17.9164 15.6716 15.9323 17.5714 9.97991 17.5714C4.02753 17.5714 2.0434 15.6716 2.0434 9.97404Z"
          stroke="#46A358"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    descr: "+88 01911 717 490",
    svg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9604 2.29175C15.0446 2.63425 17.4813 5.06758 17.8279 8.15175"
          stroke="#46A358"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9604 5.24414C13.4363 5.53081 14.5896 6.68497 14.8771 8.16081"
          stroke="#46A358"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.41708 13.5825C0.668758 7.83352 1.48616 5.20096 2.09213 4.35263C2.16997 4.21552 4.08873 1.34323 6.1455 3.02839C11.2507 7.23288 4.78759 6.63843 9.0745 10.9261C13.3623 15.2128 12.7669 8.74996 16.9716 13.8541C18.6568 15.9117 15.7844 17.8303 15.6482 17.9073C14.7998 18.5141 12.1663 19.3315 6.41708 13.5825Z"
          stroke="#46A358"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

interface Element {
  descr: string;
  svg: JSX.Element;
}
[];

export const Contacts: React.FC = () => {
  return (
    <div className={Style.contacts}>
      <div className={Style.wrapper}>
        <Logo />

        <ul className={Style.lists}>
          {info.map((item: Element, index: number) => (
            <li className={Style.list} key={index}>
              <div className={Style.icon}>{item.svg}</div>

              <p className={Style.descr}>{item.descr}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
