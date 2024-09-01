import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://gulrucvxfruedgrpauxw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1bHJ1Y3Z4ZnJ1ZWRncnBhdXh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwMDEyMzEsImV4cCI6MjA0MDU3NzIzMX0._HyCYi2yBrYmYygcq0O0fGRzpfSnbMFA_Nn3Gzblhws";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;