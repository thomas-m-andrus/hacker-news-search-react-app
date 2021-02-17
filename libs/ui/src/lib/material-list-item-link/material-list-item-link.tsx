import React from 'react';

import './material-list-item-link.module.scss';
import { MaterialListItemLinkProps } from '@hacker-news-search-react-app/types';
import { ListItem } from '@material-ui/core';

export function MaterialListItemLink(props: MaterialListItemLinkProps) {
  return (
    <li>
      <ListItem button component="a" {...props} />
    </li>
  );
}

export default MaterialListItemLink;
