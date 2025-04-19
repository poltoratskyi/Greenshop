export const filterSort = [
  { id: 1, label: "asc", value: "name", sort: "name" },

  { id: 2, label: "asc", value: "data", sort: "data" },

  { id: 3, label: "asc", value: "popularity", sort: "popularity" },

  { id: 4, label: "asc", value: "prices from the lowest", sort: "price" },
  { id: 5, label: "desc", value: "prices from the highest", sort: "price" },
];

export const svgRound = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M12.6666 5.66667L7.99998 10.3333L3.33331 5.66667"
      stroke="#3D3D3D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
