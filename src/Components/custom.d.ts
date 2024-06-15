// custom.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "dotlottie-player": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      src?: string;
      background?: string;
      speed?: number;
      direction?: number;
      playMode?: string;
      autoplay?: boolean;
      loop?: boolean;
    };
  }
}
