/// <reference types="astro/client" />
/// <reference types="@astrojs/ts-plugin" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace JSX {
  interface IntrinsicElements {
    'astro-slot': any;
    [elementName: string]: any;
  }
}