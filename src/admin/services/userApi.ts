import supabase from "./supabase";

export async function getAllUsers() {
  const { data: user, error } = await supabase.from("user").select("*");
  if (error) {
    console.log(error);
    throw new Error("users are not loaded");
  }
  return user;
}
