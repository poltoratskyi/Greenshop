"use client";

import Style from "./registration.module.scss";
import { Content, SignUp, LogIn } from "../auth";
import Pathname from "../../ui/pathname";
import { useState } from "react";
import Button from "@/components/ui/button";
import Toast from "../toast";
import { useToastHandling } from "@/lib/client";

const Registration: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const { isToastOpen, toastType, setIsToastOpen, isSuccessToast } =
    useToastHandling();

  const onClick = (boolean: boolean) => {
    setIsLogin(boolean);
    setIsToastOpen(false);

    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <Pathname second="Account" />

      <section className={Style.registration}>
        <div className="container">
          <div className={Style.wrapper}>
            <Content>
              <div className={Style.box}>
                <div className={Style.authSection}>
                  {isLogin ? (
                    <div
                      className={`${
                        isLogin
                          ? `${Style.inner} ${Style.showLogin}`
                          : Style.inner
                      }`}
                    >
                      <LogIn overflow />
                    </div>
                  ) : (
                    <Button
                      className="toggle"
                      type="button"
                      value="Log In"
                      onClick={() => onClick(true)}
                    />
                  )}
                </div>

                <div className={Style.line}>
                  <span></span>
                  <p>Or</p>
                  <span></span>
                </div>

                <div className={Style.authSection}>
                  {!isLogin ? (
                    <div
                      className={`${
                        !isLogin
                          ? `${Style.inner} ${Style.showSignUp}`
                          : Style.inner
                      }`}
                    >
                      <SignUp overflow />
                    </div>
                  ) : (
                    <Button
                      className="toggle"
                      type="button"
                      value="Sign Up"
                      onClick={() => onClick(false)}
                    />
                  )}
                </div>
              </div>
            </Content>
          </div>
        </div>
      </section>

      <Toast
        isSuccess={isSuccessToast}
        isOpen={isToastOpen}
        message={toastType}
        onClick={setIsToastOpen}
      />
    </>
  );
};

export default Registration;
