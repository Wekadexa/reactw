// src/supabase.js
import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase URL and Anon Key
const supabaseUrl = 'https://uryhecasnxminkypnprz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyeWhlY2FzbnhtaW5reXBucHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4MjUyNTgsImV4cCI6MjA0ODQwMTI1OH0.gJJfielQswGaLMzMBilXqcnuVU95h5ZFHjDHDaKqylk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
