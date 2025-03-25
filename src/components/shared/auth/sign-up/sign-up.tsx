import SocialAuth from "../social";
import Form from "./form";
import FormCard from "../card";

interface Props {
  overflow?: boolean;
}

const SignUp: React.FC<Props> = ({ overflow }) => {
  return (
    <FormCard
      title="Sign Up"
      subtitle="New user registration"
      overflow={overflow}
    >
      <Form />

      <SocialAuth
        location="Or sign up with"
        google="Continue with Google"
        facebook="Continue with Facebook"
        github="Continue with Github"
      />
    </FormCard>
  );
};

export default SignUp;
