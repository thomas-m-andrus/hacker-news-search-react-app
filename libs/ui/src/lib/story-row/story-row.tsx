import React from 'react';
import { StoryRowProps } from '@hacker-news-search-react-app/types';
import './story-row.module.scss';
import {
  ListItem,
  ListItemProps,
  Typography,
  ListItemText,
} from '@material-ui/core';
import parse from 'html-react-parser';

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

export function StoryRow({
  story: { author, title, url, num_comments, _highlightResult },
}: StoryRowProps) {
  const MatchedTitle =
    Object.prototype.hasOwnProperty.call(_highlightResult, 'title') &&
    _highlightResult.title.matchLevel === 'full';
  const displayTitle = MatchedTitle ? _highlightResult.title.value : title;
  return (
    <ListItemLink className="story-row" href={url}>
      <ListItemText>
        <Typography variant="h6" component="h3" align="left">
          {MatchedTitle ? parse(displayTitle) : displayTitle}
        </Typography>
        <Typography variant="subtitle1">Author: {author}</Typography>
        <Typography variant="subtitle2">
          Number of Comments: {num_comments}
        </Typography>
      </ListItemText>
    </ListItemLink>
  );
}

export default StoryRow;
