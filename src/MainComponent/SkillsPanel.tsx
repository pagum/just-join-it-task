import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import { Skill } from './MainComponent.utils';
import {
  SkillsWrapper,
  TextWrapper,
  SkillsContainer,
  ContainerTitle,
} from './MainComponent.components';

interface SkillsProps {
  skills: Skill[];
}
export const SkillsPanel = ({ skills }: SkillsProps) => {
  return (
    <SkillsContainer>
      <ContainerTitle variant="h5">Skills</ContainerTitle>
      <SkillsWrapper>
        {skills.map((skill, index) => (
          <Box
            component="fieldset"
            mb={3}
            borderColor="transparent"
            key={index}
          >
            <TextWrapper>{skill.name}</TextWrapper>
            <Rating value={skill.level} readOnly />
          </Box>
        ))}
      </SkillsWrapper>
    </SkillsContainer>
  );
};
