// Modules
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import type { Container } from "react-dom/client";

// Styles
import "./main.css";

// Common
import { supabaseConfig } from "@/common/configs.common";

// Helpers
import { initialiseSupabase } from "@/helpers/supabase.helper";

// Components
import { AppRouter } from "@/components/app-router";

// Initialise Supabase
initialiseSupabase(supabaseConfig);

// Create Root
const app = createRoot(document.getElementById("root") as Container);

// Render
app.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
