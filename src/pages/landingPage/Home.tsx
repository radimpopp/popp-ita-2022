import { Contact } from './Contact'
import { H1_MainHeading } from '../../components/MainHeading'
import { ImageSlider } from './Carousel'
import { anchors } from '../../helpers/urls'
import { theme } from '../../helpers/themes'
import React from 'react'
import bio from './images/bio.jpeg'
import styled from 'styled-components'

export const Home = () => {
  return (
    <Div_StyledHome>
      <Div_LandingPage>
        <Div_Bio>
          <Div_BioText>
            <H1_BioHeading>
              Welcome to my interactive <Span_Salmon>portfolio</Span_Salmon> created in React! My
              name is <Span_Salmon>Radim Popp</Span_Salmon> and I am a web developer living in{' '}
              <Span_Salmon>Brno</Span_Salmon>.
            </H1_BioHeading>
            <Div_Sub>
              <H1_DashHeading>
                <Span_Salmon>—</Span_Salmon>
              </H1_DashHeading>
              <P_LandingPage>
                WARNING! This page is under construction. Please be patient as the final version of
                the interactive portfolio will be available during the week of the 12th September
                2022. Thank you for your patience.
              </P_LandingPage>
            </Div_Sub>
          </Div_BioText>
          <Div_ProfilePic>
            <Img_Profile src={bio} />
          </Div_ProfilePic>
        </Div_Bio>
        <Div_Projects id={anchors.landingPage.projects}>
          <ImageSlider />
        </Div_Projects>
        <Div_Contact id={anchors.landingPage.contact}>
          <Div_ContactText>
            <H1_ContactHeading>
              Are <Span_Salmon>you</Span_Salmon> interested in working{' '}
              <Span_Salmon>together?</Span_Salmon>
              <br />
              <Div_ContactMe>
                <Span_Salmon>Contact me </Span_Salmon>via email:
              </Div_ContactMe>
            </H1_ContactHeading>
          </Div_ContactText>
          <Contact />
        </Div_Contact>
      </Div_LandingPage>
    </Div_StyledHome>
  )
}

const Div_StyledHome = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  background-color: ${theme.color.black};
  display: flex;
  justify-content: center;
`

const Div_LandingPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-direction: column;
`

const H1_BioHeading = styled(H1_MainHeading)`
  width: 75%;
  margin-left: 15%;
  margin-bottom: 15%;
  font-size: ${theme.fontSize.extraLarge};
  text-align: left;
  ${theme.mediaQueries.tablet} {
    width: 90%;
    margin: 0 5% 10% 5%;
    padding-top: unset;
  }
  ${theme.mediaQueries.phone} {
    font-size: 2.3rem;
  }
`

const H1_DashHeading = styled(H1_BioHeading)`
  width: unset;
  margin-left: unset;
  padding-top: unset;
`

const Span_Salmon = styled.span`
  color: ${theme.color.salmon};
`

const Div_Bio = styled.div`
  height: 91vh;
  display: flex;
  align-items: center;
  ${theme.mediaQueries.tablet} {
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
`

const Div_BioText = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${theme.mediaQueries.tablet} {
    width: 90%;
  }
`
const Div_Sub = styled.div`
  width: 60vw;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 0 10%;
`

const Div_Projects = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${theme.color.salmon};
`

const Div_Contact = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${theme.color.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: ${theme.spacing.extraLarge};
`

const Div_ContactText = styled.div`
  width: 100%;
  height: 20%;
`

const Div_ProfilePic = styled.div`
  width: 20vw;
  height: 20vw;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: ${theme.color.white};
  border-radius: 50%;
  ${theme.mediaQueries.tablet} {
    margin-top: 80px;
    justify-content: center;
    align-items: center;
  }
  ${theme.mediaQueries.smallTablet} {
    margin-top: 150px;
    justify-content: center;
    align-items: center;
  }
  ${theme.mediaQueries.phone} {
    margin-top: 120px;
  }
  ${theme.mediaQueries.iphoneSE} {
    margin-top: 70px;
  }
  ${theme.mediaQueries.galaxyFold} {
    margin-top: ${theme.spacing.extraLarge};
  }
`

const P_LandingPage = styled.p`
  font-size: ${theme.fontSize.small};
  width: 35%;
  color: ${theme.color.greyBright};
  text-align: left;
  ${theme.mediaQueries.tablet} {
    width: 80%;
  }
  ${theme.mediaQueries.phone} {
    font-size: 1.2rem;
    padding-bottom: ${theme.spacing.superSize};
  }
`

const Img_Profile = styled.img`
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  ${theme.mediaQueries.tablet} {
    width: 220px;
    height: 220px;
  }
  ${theme.mediaQueries.smallTablet} {
    width: 250px;
    height: 250px;
  }
  ${theme.mediaQueries.phone} {
    width: 200px;
    height: 200px;
  }
  ${theme.mediaQueries.iphoneSE} {
    width: 150px;
    height: 150px;
  }
  ${theme.mediaQueries.galaxyFold} {
    width: 120px;
    height: 120px;
  }
`

const Div_ContactMe = styled.div`
  ${theme.mediaQueries.phone} {
    margin-top: ${theme.spacing.large};
  }
`

const H1_ContactHeading = styled(H1_MainHeading)`
  width: 75%;
  margin-left: 15%;
  margin-bottom: 5%;
  font-size: ${theme.fontSize.extraLarge};
  text-align: left;
  ${theme.mediaQueries.tablet} {
    width: 90%;
    margin: 0 5% 5% 5%;
    padding-top: unset;
  }
  ${theme.mediaQueries.phone} {
    font-size: ${theme.fontSize.large};
    margin: 0 5% 0% 5%;
  }
`
