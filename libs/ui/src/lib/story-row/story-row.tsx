import React from 'react';
import { StoryRowProps } from '@hacker-news-search-react-app/types';
import { MaterialListItemLink } from '@hacker-news-search-react-app/ui';
import './story-row.module.scss';
import {
  Typography,
  ListItemText,
} from '@material-ui/core';
import parse from 'html-react-parser';

export function StoryRow({
  story: { author, title, url, num_comments, _highlightResult },
}: StoryRowProps) {
  const MatchedTitle =
    Object.prototype.hasOwnProperty.call(_highlightResult, 'title') &&
    _highlightResult.title.matchLevel === 'full';
  const displayTitle = MatchedTitle ? _highlightResult.title.value : title;
  return (
    <MaterialListItemLink className="story-row" href={url}>
      <ListItemText>
        <Typography variant="h6" component="div" align="left">
          {MatchedTitle ? parse(displayTitle) : displayTitle}
        </Typography>
        <Typography variant="subtitle1" component="div">
          Author: {author}
        </Typography>
        <Typography variant="subtitle2" component="div">
          Number of Comments: {num_comments}
        </Typography>
      </ListItemText>
    </MaterialListItemLink>
  );
}

export default StoryRow;
