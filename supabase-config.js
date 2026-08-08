/* Supabase client — the anon public key below is safe to ship client-side;
   all access control is enforced by Row Level Security policies in supabase/schema.sql. */
const SUPABASE_URL = 'https://jbcicqffvhpgjcntenla.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiY2ljcWZmdmhwZ2pjbnRlbmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxNzg1MDgsImV4cCI6MjEwMTc1NDUwOH0.CGEwfEYHg_Mch8XEf9bgFd99g4VOC641Q4CBva1L08U';

const atlasSB = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
