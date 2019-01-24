# react-clamp-text

> A React component that clamps long text into specified lines using CSS.

[![NPM](https://img.shields.io/npm/v/react-clamp-text.svg)](https://www.npmjs.com/package/react-clamp-text) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-clamp-text
```

## Usage

```tsx
import * as React from 'react';
import ClampText from 'react-clamp-text';

class Example extends React.Component {
  render () {
    return (
      <ClampText
        line={3}
        showMore={true}
        showMoreText="Expand"
        showLessText="Collapse"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </ClampText>
    )
  }
}
```

## License

MIT © [charlee](https://github.com/charlee)
