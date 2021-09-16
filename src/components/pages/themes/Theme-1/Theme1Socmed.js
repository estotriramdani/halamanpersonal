import React from 'react';

const Theme1Socmed = ({ href, name }) => {
  return (
    <a target="_blank" rel="noreferrer" href={href}>
      <i className={'theme-1-bi bi-' + name}></i>
    </a>
  );
};

export default Theme1Socmed;
