import {
  Bot,
  Building2,
  Car,
  Dumbbell,
  Globe,
  Hotel,
  LifeBuoy,
  Scissors,
  Search,
  ShoppingBag,
  Smile,
  Stethoscope,
  Store,
  Scale,
  UtensilsCrossed,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const iconMap = {
  globe: Globe,
  shoppingBag: ShoppingBag,
  bot: Bot,
  workflow: Workflow,
  search: Search,
  lifeBuoy: LifeBuoy,
  smile: Smile,
  stethoscope: Stethoscope,
  scissors: Scissors,
  utensils: UtensilsCrossed,
  dumbbell: Dumbbell,
  wrench: Wrench,
  car: Car,
  scale: Scale,
  building: Building2,
  hotel: Hotel,
  store: Store,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Cmp = iconMap[name];
  return <Cmp className={className} aria-hidden="true" />;
}
