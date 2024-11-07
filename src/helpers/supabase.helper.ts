// Modules
import { createClient } from "@supabase/supabase-js";

// Types
import { SupabaseClient, SupabaseConfig } from "@/types/app.types";

// Instance
let supabase: SupabaseClient;

// Initialise Supabase
export const initialiseSupabase = (config: SupabaseConfig): void => {
  supabase = createClient(config.projectUrl, config.projectKey);
};

// Get Supabase
export const getSupabase = (): SupabaseClient => {
  return supabase;
};
