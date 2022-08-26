declare module "\*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.webp" {
    const content: any;
    export default content;
  }

  declare module "*.jpg"

declare module '*.pdf';

declare module '*.mp3';
declare module '*.mp4';