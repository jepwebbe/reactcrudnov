import React from "react";
import "./tekster.scss";
import LightBox from "../LightBox";

// Images
import SpecialeImg from "../../Assets/Images/speciale.png";
import BachelorImg from "../../Assets/Images/bachelor.png";
import EuropalterImg from "../../Assets/Images/europalter.png";

import { StyledCard } from "../StyledComponents/Card.Styled";
import { Heading } from "../StyledComponents/Heading.Styled";

import { Page } from "../App/Layout/Page";

import AddComment from "../Comments/AddComment";

export const Tekster = () => {

  return (
    <Page title="Tekster">
        <div className="tekster">
          <section id="essays">
            <Heading as="h2">Essays</Heading>
            <div className="textsWrap">
              <article>
                <LightBox
                  src={EuropalterImg}
                  alt="En blog fra Italien"
                  linkText="Se hele bloggen"
                  href="http://www.bing.com"
                >
                  <img src={EuropalterImg} className="thumb" alt="wih" />
                </LightBox>
                <StyledCard>
                  <Heading as="h3">Europas Udenfor</Heading>
                  <p>Lorem ipsum</p>
                  <p>Lang tekst</p>
                </StyledCard>
              </article>

              <article className="reverseMe">
                <StyledCard>
                  <Heading as="h3">Bachelor</Heading>
                  <p>Lorem ipsum</p>
                  <p>Lang tekst</p>
                </StyledCard>
                <LightBox
                  src={BachelorImg}
                  alt="Min bachelor"
                  linkText="Læs hele bacheloren her"
                  href="http://www.bing.com"
                >
                  <img src={BachelorImg} className="thumb" alt="wih" />
                </LightBox>
              </article>
            </div>
          </section>

          <section id="akademia">
            <Heading as="h2">Akademia</Heading>
            <div className="textsWrap">
              <article>
                <LightBox
                  src={SpecialeImg}
                  alt="Mit speciale"
                  linkText="Læs hele specialet her"
                  href="http://www.bing.com"
                >
                  <img src={SpecialeImg} className="thumb" alt="wih" />
                </LightBox>
                <StyledCard>
                  <Heading as="h3">Speciale</Heading>
                  <p>Lorem ipsum</p>
                  <p>Lang tekst</p>
                </StyledCard>
              </article>

              <article className="reverseMe">
                <LightBox
                  src={BachelorImg}
                  alt="Min bachelor"
                  linkText="Læs hele bacheloren her"
                  href="http://www.bing.com"
                >
                  <img src={BachelorImg} className="thumb" alt="wih" />
                </LightBox>
                <StyledCard>
                  <Heading as="h3">Bachelor</Heading>
                  <p>Lorem ipsum</p>
                  <p>Lang tekst</p>
                </StyledCard>
              </article>
            </div>
          </section>
          <AddComment />
        </div>

    </Page>
  );
};
