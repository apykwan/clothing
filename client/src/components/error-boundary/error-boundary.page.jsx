import { Link } from 'react-router-dom';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from './error-boundary.styles';

const ErrorPage = () => {
    return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
          <Link to="/">***For Demonstration Purpose***</Link>
        </ErrorImageOverlay>
    );
};

export default ErrorPage;