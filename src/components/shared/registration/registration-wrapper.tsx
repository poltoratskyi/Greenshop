import Style from "./registration.module.scss";

import ModalContent from "../modal-forms/modal-content";
import SignUp from "../../../components/shared/modal-forms/sign-up";
import LogIn from "../../../components/shared/modal-forms/log-in";
import Pathname from "../pathname";

const RegistrationWrapper: React.FC = () => {
  return (
    <>
      <Pathname second="Account" />

      <section className={Style.registration}>
        <div className="container">
          <div className={Style.registration_wrapper}>
            <ModalContent>
              <div className={Style.box}>
                <LogIn overflow />

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

export default RegistrationWrapper;
