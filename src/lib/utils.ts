import { type ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentTimeFromOffset(offset: number): string {
  const now = new Date();
  const offsetMs = offset * 60 * 60 * 1000;
  const localTime = new Date(now.getTime() + offsetMs);

  // Format as 1:30pm (lowercase am/pm)
  return format(localTime, "h:mmaaa").toLowerCase();
}
