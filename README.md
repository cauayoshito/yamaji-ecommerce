# Yamaji Studio — Site em Next.js (TSX)

Starter em TSX inspirado no visual Bang Media, com identidade **Yamaji Studio**: tipografia forte, layout limpo e foco em cases.

## Rodando
```
npm i
npm run dev
```

## Estrutura
- `/app` — páginas (Home, Sobre, Projetos e 3 cases)
- `/components` — Header, HeroCase, ImageMasonry, TextBlock, RelatedProjects, CTA, Footer
- `/public/images` — troque por suas imagens reais (.jpg/.webp)

## Dicas
- Ajuste a cor `accent` em `tailwind.config.js`
- Substitua textos dos cases por conteúdo real
- Otimize as imagens e use `next/image` quando possível


## Variáveis de ambiente
Crie um arquivo `.env.local` baseado no `.env.example`:
```bash
cp .env.example .env.local
```

Configure o Meta Pixel:
```env
NEXT_PUBLIC_META_PIXEL_ID=SEU_PIXEL_ID
```
