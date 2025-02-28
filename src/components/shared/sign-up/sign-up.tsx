import SocialAuth from "../../ui/social-auth";
import SignUpForm from "./form";
import FormCard from "../../ui/auth-form";

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
      <SignUpForm />

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
