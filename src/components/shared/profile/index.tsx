"use client";

import { User } from "../../../types";
import { Container, Review, Wrapper } from "../layout";
import Form from "./form";
import Nav from "./nav";
import Style from "./profile.module.scss";

interface Props {
  data: User;
}

const Profile: React.FC<Props> = ({ data }) => {
  return (
    <section className={Style.profile}>
      <div className="container">
        <Container>
          <Review summaryWidth title="My Account">
            <Nav />
          </Review>

          <Wrapper>
            <Review title="Personal Information">
              <Form {...data} />
            </Review>
          </Wrapper>
        </Container>
      </div>
    </section>
  );
};

export default Profile;
