import Style from "./message.module.scss";

const Message: React.FC = () => {
  return (
    <p className={Style.description}>
      Last step. Check your email to confirm your subscription.
      <span className={Style.success}>
        The service is functioning in the demo version. In the future, this
        function may become available to all other users.
      </span>
    </p>
  );
};

export default Message;
