import SocialAuth from "../../ui/social-auth";
import LogInForm from "./form";
import FormCard from "../../ui/auth-form";

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
      <LogInForm />

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
