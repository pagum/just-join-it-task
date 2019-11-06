import React from 'react';
import DescriptionIcon from '@material-ui/icons/Description';
import PeopleIcon from '@material-ui/icons/People';
import HeightIcon from '@material-ui/icons/Height';
import TodayIcon from '@material-ui/icons/Today';

import { Skill } from './MainComponent.utils';
import {
  SkillsWrapper,
  TextWrapper,
  SkillsContainer,
  ContainerTitle,
  OtherInfoWrapper,
  InfoWrapper,
  Row,
} from './MainComponent.components';
import { JobOfferPageProps } from './JobOfferPage';

export const OtherInfoPanel = ({ item }: JobOfferPageProps) => {
  return (
    <SkillsContainer>
      <ContainerTitle variant="h5">Other info</ContainerTitle>
      <OtherInfoWrapper>
        <InfoWrapper>
          <Row>
            <DescriptionIcon />
          </Row>
          <Row>Employment Type </Row>
          <Row> {item.employment_type}</Row>
        </InfoWrapper>
        <InfoWrapper>
          <Row>
            <PeopleIcon />
          </Row>
          <Row> Company size </Row>
          <Row> {item.company_size} </Row>
        </InfoWrapper>
        <InfoWrapper>
          <Row>
            <HeightIcon />
          </Row>
          <Row> Expert level </Row>
          <Row> {item.experience_level} </Row>
        </InfoWrapper>
        <InfoWrapper>
          <Row>
            {' '}
            <TodayIcon />{' '}
          </Row>
          <Row> Added </Row>
          <Row> {new Date(item.published_at).toLocaleDateString()} </Row>
        </InfoWrapper>
      </OtherInfoWrapper>
    </SkillsContainer>
  );
};
