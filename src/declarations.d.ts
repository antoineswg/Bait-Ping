// Declare .jsx files as React components
declare module '*.jsx' {
  import React from 'react';
  const component: React.FC<any>;
  export default component;
}

// Declare .json files
declare module '*.json' {
  const value: { [key: string]: any };
  export default value;
}

// Declare .css files
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Declare .svg files
declare module '*.svg' {
  const content: string;
  export default content;
}

// Declare other custom modules if needed
declare module '*.glb' {
  const content: string;
  export default content;
}