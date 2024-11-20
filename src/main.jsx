// Modules
import { createRoot } from "react-dom/client";

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
const app = createRoot(document.getElementById("root"));

// Render
app.render(<AppRouter />);
