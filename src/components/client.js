import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://tlehhsdbhfiycjwsmbxg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsZWhoc2RiaGZpeWNqd3NtYnhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxMzU2MDUsImV4cCI6MjAxMjcxMTYwNX0.Q1TsX1dRzUjmqZF_7CC_makstEhFS-R6-16B1cvtmEo'
)