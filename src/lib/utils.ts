import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
  const username = name.replace(/\s+/g, "").toLowerCase();
  const base = "https://avatar.iran.liara.run/public";
  if (gender === "FEMALE") return `${base}/girl?username=${username}`;
  // default to boy
  return `${base}/boy?username=${username}`;
}


// phone formatting function for IND numbers - ai generated 🎉
export const formatPhoneNumber = (value: string) => {
  if (!value) return value;

  // remove all non-digits
  const phoneNumber = value.replace(/[^\d]/g, "");
  const len = phoneNumber.length;

  // handle +91 prefix
  if (phoneNumber.startsWith("91") && len > 10) {
    const national = phoneNumber.slice(-10);
    return `+91 ${national.slice(0, 5)} ${national.slice(5)}`;
  }

  // handle plain 10-digit Indian numbers
  if (len <= 5) return phoneNumber;
  if (len <= 10) {
    return `${phoneNumber.slice(0, 5)} ${phoneNumber.slice(5, 10)}`;
  }

  // fallback: show as is
  return phoneNumber;
};
