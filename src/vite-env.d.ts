/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CAT_FACTS_URL: string;
  // ...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
