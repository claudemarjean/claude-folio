import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nzhelkkthygfmaddvbyf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56aGVsa2t0aHlnZm1hZGR2YnlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyNDAxNTcsImV4cCI6MjA3NjgxNjE1N30.Te-IOD8LwUaZ4_EtSi_JGK8umibVtESsseOiD4GcP0k";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
