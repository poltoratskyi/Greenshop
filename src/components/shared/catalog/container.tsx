interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <div style={{ width: "100%" }}>{children}</div>;
};

export default Container;
