import { createClient } from "@supabase/supabase-js";

export const supabaseUrl: string = "https://vuermdkdtcqyicfvebaq.supabase.co";
const supabaseKey: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1ZXJtZGtkdGNxeWljZnZlYmFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxNzcyMjYsImV4cCI6MjAxOTc1MzIyNn0.14s3fCjlhYAQbr_t6c2OZ3ZkiXBpAd5tnlu71RfFJ-8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
