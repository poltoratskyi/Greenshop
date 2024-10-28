import Style from "./feedback.module.scss";

const FeedbackInput: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <input
        id="email"
        name="email"
        type="email"
        className={Style.feedback}
        placeholder="Enter your email address..."
        autoComplete="off"
      />

      <button className={Style.feedback_button}>Join</button>
    </div>
  );
};

export default FeedbackInput;
