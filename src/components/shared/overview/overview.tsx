interface Props {
  id: string;
}

const Overview: React.FC<Props> = ({ id }) => {
  return (
    <div className="">
      <div className="container">
        <p>{id}</p>
      </div>
    </div>
  );
};

export default Overview;
