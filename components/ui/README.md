# UI Kit Yamaji Studio

Componentes reutilizáveis para o design system da Yamaji Studio.

## Como usar

### Container
```tsx
import Container from "@/components/ui/Container";

<Container className="py-12">...</Container>
```

### SectionHeader
```tsx
import SectionHeader from "@/components/ui/SectionHeader";

<SectionHeader
  eyebrow="Soluções"
  title="Estrutura digital para operar como empresa tech"
  description="Quatro pilares que conectam produto, marketing e automação."
/>;
```

### PrimaryButton / SecondaryButton
```tsx
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

<PrimaryButton href="/aplicar" label="Agende uma consultoria" />
<SecondaryButton href="/cases" label="Ver cases" />
```

### GlassCard
```tsx
import GlassCard from "@/components/ui/GlassCard";

<GlassCard>Conteúdo premium</GlassCard>
```

### Badge / MetricChip / IconBadge
```tsx
import Badge from "@/components/ui/Badge";
import MetricChip from "@/components/ui/MetricChip";
import IconBadge from "@/components/ui/IconBadge";

<Badge>Sem compromisso</Badge>
<MetricChip>+38% Leads</MetricChip>
<IconBadge>01</IconBadge>
```

### Divider
```tsx
import Divider from "@/components/ui/Divider";

<Divider className="my-12" />
```

### BackgroundGlow
```tsx
import BackgroundGlow from "@/components/ui/BackgroundGlow";

<div className="relative">
  <BackgroundGlow />
  ...
</div>
```
