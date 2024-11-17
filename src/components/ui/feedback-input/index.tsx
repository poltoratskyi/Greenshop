import Style from "./feedback.module.scss";

import Button from "../../../components/shared/button";

const FeedbackInput: React.FC = () => {
  return (
    <div className={Style.block}>
      <input
        id="email"
        name="email"
        type="email"
        className={Style.feedback}
        placeholder="Enter your email address..."
        autoComplete="off"
      />

      <Button button value="Join" className="feedback" />
    </div>
  );
};

export default FeedbackInput;
