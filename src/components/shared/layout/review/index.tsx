import Style from "./review.module.scss";

interface Props {
  summaryWidth?: boolean;
  title: string;
  children: React.ReactNode;
}

const Review: React.FC<Props> = ({ summaryWidth, children, title }) => {
  return (
    <div
      className={
        summaryWidth ? `${Style.review} ${Style.summary}` : Style.review
      }
    >
      <h2 className={Style.title}>{title}</h2>

      {children}
    </div>
  );
};

export default Review;
