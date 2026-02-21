/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  // jodi onno VITE_ variables thake, oigulo ekhane add korun
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
