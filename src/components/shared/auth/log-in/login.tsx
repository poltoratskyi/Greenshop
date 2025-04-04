import SocialAuth from "../social";
import Form from "./form";
import FormCard from "../card";

interface Props {
  overflow?: boolean;
}

const Login: React.FC<Props> = ({ overflow }) => {
  return (
    <FormCard
      title="Log In"
      subtitle="Log in to your account to continue"
      overflow={overflow}
    >
      <Form />

      <SocialAuth
        location="Or log in with"
        google="Log in with Google"
        facebook="Log in with Facebook"
        github="Log in with Github"
      />
    </FormCard>
  );
};

export default Login;
