"use client";
import { getHomeData } from "@/lib/getHomeData";
import { useState } from "react";

export function useHome(initialData: ReturnType<typeof getHomeData>) {
  const [data] = useState(initialData);
  return data;
}
