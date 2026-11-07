import {
  Clapperboard,
  Database,
  Globe,
  Mail,
  Megaphone,
  MessageCircle,
  Palette,
  Share2,
  Smartphone,
  TrendingUp,
  type LucideProps,
} from "lucide-react";
import type { ServiceIconName } from "@/lib/services";

const map: Record<ServiceIconName, React.ComponentType<LucideProps>> = {
  strategy: TrendingUp,
  ads: Megaphone,
  social: Share2,
  video: Clapperboard,
  design: Palette,
  whatsapp: MessageCircle,
  email: Mail,
  web: Globe,
  mobile: Smartphone,
  software: Database,
};

export default function ServiceIcon({ name, ...props }: { name: ServiceIconName } & LucideProps) {
  const Icon = map[name];
  return <Icon strokeWidth={1.8} aria-hidden="true" {...props} />;
}
