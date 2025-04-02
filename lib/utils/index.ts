import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const localFetch = async <T>(
  path: string,
  options?: RequestInit,
): Promise<T | string> => {
  const res = await fetch(`${process.env.URL!}${path}`, { ...options });
  if (!res.ok) {
    return `Error with local fetch ${path}`;
  }
  return await res.json();
};

export const rapidApiFetch = async <T>(path: string): Promise<T | string> => {
  const options: RequestInit = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NFL_RAPID_API_KEY!,
      "x-rapidapi-host": "nfl-api-data.p.rapidapi.com",
    },
  };

  const res = await fetch(`${process.env.NFL_RAPID_API_URL!}${path}`, options);

  if (!res.ok) {
    return `Error with local fetch ${path}`;
  }
  return await res.json();
};
