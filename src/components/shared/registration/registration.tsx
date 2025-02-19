import Style from "./registration.module.scss";
import ModalContent from "../modal-content";
import SignUp from "../sign-up";
import Login from "../login";
import Pathname from "../pathname";

const Registration: React.FC = () => {
  return (
    <>
      <Pathname second="Account" />

      <section className={Style.registration}>
        <div className="container">
          <div className={Style.wrapper}>
            <ModalContent>
              <div className={Style.box}>
                <Login overflow />

                <div className={Style.line}>
                  <span></span>
                  <p>Or</p>
                  <span></span>
                </div>

                <SignUp overflow />
              </div>
            </ModalContent>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
