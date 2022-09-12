import { H1_MainHeading } from '../../components/MainHeading'
import { anchors } from '../../helpers/urls'
import { theme } from '../../helpers/themes'
import React from 'react'
import styled from 'styled-components'

const myMail = 'radimpopp@gmail.com'

export const Cv = () => {
  return (
    <Div_CvContainer id={anchors.landingPage.cv}>
      <H1_CvHeading>
        Radim<Span_Salmon> Popp</Span_Salmon>
      </H1_CvHeading>
      <Ul_CvFragment>
        <H2_CvHeading>Contact</H2_CvHeading>
        <P_CvText>Brno, Czechia</P_CvText>
        <P_CvText>+420 774 729 117</P_CvText>
        <A_Cv href={`mailto:${myMail}`}>{myMail}</A_Cv>
      </Ul_CvFragment>
      <Ul_CvFragment>
        <H2_CvHeading>Skills</H2_CvHeading>
        <Li_Cv>React.js</Li_Cv>
        <Li_Cv>Node.js</Li_Cv>
        <Li_Cv>Git</Li_Cv>
        <Li_Cv>HTML / CSS / Styled Components / JS / TS</Li_Cv>
      </Ul_CvFragment>
      <Ul_CvFragment>
        <H2_CvHeading>Courses</H2_CvHeading>
        <Li_Cv>IT-absolvent 2022</Li_Cv>
        <Ul_Nested>
          <Li_CvNested>SmartBrains</Li_CvNested>
          <Li_CvNested>Frontend development focused mainly on React and Typescript</Li_CvNested>
        </Ul_Nested>
        <Li_Cv>Modern JavaScript from Novice to Ninja</Li_Cv>
        <Ul_Nested>
          <Li_CvNested>Udemy</Li_CvNested>
          <Li_CvNested>2022</Li_CvNested>
        </Ul_Nested>
        <Li_Cv>The Complete Web Development 2.0 (HTML / CSS / JavaScript)</Li_Cv>
        <Ul_Nested>
          <Li_CvNested>Udemy</Li_CvNested>
          <Li_CvNested>2022</Li_CvNested>
        </Ul_Nested>
      </Ul_CvFragment>
      <Ul_CvFragment>
        <H2_CvHeading>Education</H2_CvHeading>
        <Li_Cv>English Language and Literature</Li_Cv>
        <Ul_Nested>
          <Li_CvNested>Faculty of Arts, MUNI</Li_CvNested>
          <Li_CvNested>2017-2022</Li_CvNested>
        </Ul_Nested>
        <Li_Cv>Law</Li_Cv>
        <Ul_Nested>
          <Li_CvNested>Faculty of Law, MUNI</Li_CvNested>
          <Li_CvNested>2015-2016</Li_CvNested>
        </Ul_Nested>
        <Li_Cv>Gymnázium Lipník nad Bečvou</Li_Cv>
        <Ul_Nested>
          <Li_CvNested>2006-2014</Li_CvNested>
        </Ul_Nested>
      </Ul_CvFragment>
      <Ul_CvFragment>
        <H2_CvHeading>Language Skills</H2_CvHeading>
        <Li_Cv>Czech: C2</Li_Cv>
        <Li_Cv>English: C1</Li_Cv>
        <Li_Cv>Russian: A2</Li_Cv>
      </Ul_CvFragment>
    </Div_CvContainer>
  )
}

const Div_CvContainer = styled.div`
  width: 100%;
  padding-bottom: ${theme.spacing.large};
`

const H1_CvHeading = styled(H1_MainHeading)`
  width: 75%;
  margin-left: 300px;
  font-size: 6rem;
  text-align: left;
  ${theme.mediaQueries.tablet} {
    margin-left: 13%;
  }
  ${theme.mediaQueries.phone} {
    width: 90%;
    margin-left: 20px;
  }
`

const H2_CvHeading = styled.h2`
  width: 75%;
  margin: ${theme.spacing.small} 0 ${theme.spacing.small} 300px;
  font-size: ${theme.fontSize.extraLarge};
  text-align: left;
  font-weight: ${theme.fontWeight.light};
  color: ${theme.color.salmon};
  padding: ${theme.spacing.small} 0;
  ${theme.mediaQueries.tablet} {
    margin-left: 13%;
  }
  ${theme.mediaQueries.phone} {
    width: 90%;
    margin-left: 20px;
  }
`

const Span_Salmon = styled.span`
  color: ${theme.color.salmon};
`

const P_CvText = styled.p`
  padding: 1px 0;
  width: 75%;
  margin-left: 300px;
  font-size: ${theme.fontSize.medium};
  text-align: left;
  font-weight: ${theme.fontWeight.light};
  color: ${theme.color.white};
  padding: ${theme.spacing.extraSmall} 0;
  ${theme.mediaQueries.tablet} {
    margin-left: 13%;
  }
  ${theme.mediaQueries.phone} {
    width: 90%;
    margin-left: 20px;
  }
`

const A_Cv = styled.a`
  width: 75%;
  margin-left: 300px;
  font-size: ${theme.fontSize.medium};
  text-align: left;
  font-weight: ${theme.fontWeight.light};
  color: ${theme.color.white};
  padding: ${theme.spacing.extraSmall} 0;
  &:hover {
    color: ${theme.color.salmon};
  }
  ${theme.mediaQueries.tablet} {
    margin-left: 13%;
  }
  ${theme.mediaQueries.phone} {
    width: 90%;
    margin-left: 20px;
  }
`

const Li_Cv = styled.li`
  width: 75%;
  margin-left: 350px;
  font-size: ${theme.fontSize.medium};
  text-align: left;
  font-weight: ${theme.fontWeight.light};
  color: ${theme.color.white};
  padding: ${theme.spacing.extraSmall} 0;
  ${theme.mediaQueries.tablet} {
    margin-left: 17%;
  }
  ${theme.mediaQueries.phone} {
    width: 90%;
    margin-left: 30px;
  }
`

const Li_CvNested = styled(Li_Cv)`
  margin-left: 400px;
  ${theme.mediaQueries.tablet} {
    margin-left: 21%;
  }
  ${theme.mediaQueries.phone} {
    width: 90%;
    margin-left: 40px;
  }
`

const Ul_CvFragment = styled.ul`
  width: 100%;
  margin-top: ${theme.spacing.medium};
`

const Ul_Nested = styled.ul`
  padding-bottom: ${theme.spacing.small};
`
