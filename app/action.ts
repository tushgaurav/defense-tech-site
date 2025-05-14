"use server";

export async function addToNewsletter(formData: FormData) {
  const email = formData.get("email");

  if (!email) {
    return { error: "Email is required" };
  }
}
