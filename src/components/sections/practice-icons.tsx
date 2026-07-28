import { Heart, Home, Scale, type LucideIcon } from "lucide-react";

import type { PracticeAreaKey } from "@/lib/site-config";

export const practiceIcons: Record<PracticeAreaKey, LucideIcon> = {
  imobiliario: Home,
  civil: Scale,
  familia: Heart,
};
