/* eslint-disable */

import React from 'react';
import { Link } from 'gatsby';

const ArticleBlockLink = ({ link, title, excerpt, icon }) => {
  return (
              <li>
                <Link to={link}>{title}</Link>
              </li>
  );
};

export default ArticleBlockLink;
