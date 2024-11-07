// Types
import { AppConfig, SupabaseConfig } from "@/types/app.types";

// App Config
export const appConfig: AppConfig = {
  appName: "React App",
};

// Supabase Config
export const supabaseConfig: SupabaseConfig = {
  projectUrl: import.meta.env.VITE_APP_SUPABASE_PROJECT_URL,
  projectKey: import.meta.env.VITE_APP_SUPABASE_PROJECT_KEY,
};
