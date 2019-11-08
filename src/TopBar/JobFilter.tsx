import React from 'react';
import Button from '@material-ui/core/Button';
import queryString from 'query-string';

const technologiesToFilter = ['php', 'java', 'ruby'];

export const JobFilter = () => {
  const onClick = (e: React.MouseEvent) => {
    const stringified = queryString.stringify({
      technology: e.currentTarget.id,
    });

    window.location.search = stringified;
  };

  return (
    <>
      {technologiesToFilter.map(tech => (
        <Button color="primary" onClick={e => onClick(e)} key={tech} id={tech}>
          {tech}
        </Button>
      ))}
    </>
  );
};
