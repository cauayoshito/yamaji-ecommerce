# Auditoria Crítica — Yamaji Studio

**Site:** https://yamajistudio.com.br
**Objetivo avaliado:** captar clientes premium (empresas, profissionais liberais, infoprodutores) via WhatsApp / formulário
**Base da análise:** código-fonte completo do projeto (Next.js 16 + Tailwind) + padrão de mercado agência premium 2026
**Observação técnica:** o domínio está bloqueado na rede desta sessão, então a análise visual foi reconstruída a partir do código. Isso é suficiente para todas as conclusões abaixo — pontos que dependem de performance real (Core Web Vitals medidos) estão explicitamente marcados como "verificar em PageSpeed".

---

## Resumo executivo em 5 linhas

1. O site **parece um starter de SaaS de 2023**, não um estúdio premium. Transmite "desenvolvedor bom fazendo site de agência", não "agência contratando desenvolvedor bom".
2. A copy do Hero é **poética e vaga**. Não diz o que você faz, pra quem, nem o resultado.
3. A prova social está **abaixo do mínimo**: widgets decorativos falsos, métricas com disclaimer "demonstrativas", zero logos de cliente, zero depoimentos, zero cases visíveis na home.
4. **GA4 e Meta Pixel estão desligados** (`G-TODO12345` e `TODO_PIXEL_ID` no `app/layout.tsx`). Você está rodando cego, sem medir nada.
5. Nota geral: **5,8 / 10** — bonito, mas não vende.

---

## Etapa 1 — Análise estratégica geral

### O site transmite autoridade real?
Não. Transmite **competência técnica** (o código é organizado, o visual é limpo), mas não **autoridade**. São duas coisas diferentes.

Autoridade em agência premium vem de:
- Clientes reconhecíveis (logos)
- Resultados específicos e quantificados ("Saímos de R$ 80k/mês para R$ 340k/mês em 6 meses")
- Cases com antes/depois reais
- Rostos, nomes, empresas
- Volume de trabalho visível (portfólio sério)

O site tem quase nada disso na home. A seção "Resultados Reais" mostra cartões com "1.2k leads, R$ 780k volume, +24% YoY" seguidos do texto **"Métricas demonstrativas. Varia por operação."** — isso se autodestrói. Ou são reais e você não precisa do disclaimer, ou são fake e você não deveria mostrar. Do jeito que está, o visitante crítico percebe que é decoração e perde confiança do resto do site.

### Dá vontade de contratar ou só de achar bonito?
Achar bonito. Um decisor com R$ 15k disponível fechando um site vai sentir:
- "Ok, é um cara técnico, é organizado."
- "Mas quem ele já atendeu? Que empresa de verdade? Qual foi o resultado? Quanto custa?"
- Sem essas respostas, ele fecha a aba e procura alguém que responda.

### O posicionamento está claro?
Não. O site hoje diz, no Hero:

> "Comece com estrutura. Evolua com tecnologia."
> "Sites, tráfego, CRM, automações e IA organizados em um ecossistema de crescimento escalável e previsível."

Tradução: "a gente faz tudo de tecnologia pra empresas". Isso não é posicionamento, é cardápio. Qualquer agência mediana diz a mesma coisa.

**Posicionamento forte responde em uma frase:** *o que eu faço, pra quem, e por que é diferente.*

Exemplo ruim (atual): "Engenharia Digital v2.0" — jargão sem referente.
Exemplo bom: "Estruturamos operações digitais completas pra clínicas, advogados e infoprodutores faturarem mais sem depender de freelancers avulsos."

### Mais portfólio ou empresa?
Nem um nem outro — é um **"site institucional de freelancer querendo parecer agência"**. Tem seções de empresa (metodologia, níveis de serviço, pipeline) mas sem os elementos que sustentam esse posicionamento (equipe, cases reais, clientes reconhecíveis, números auditáveis).

### Problemas críticos (vermelho)
1. **Tracking desligado.** `ga4: "G-TODO12345"` e `metaPixel: "TODO_PIXEL_ID"` em `app/layout.tsx` linhas 40-41. Toda a engenharia de eventos (cta_click, scroll_depth, section_view, whatsapp_click) está programada e **não dispara pra lugar nenhum**. Você está sem dados.
2. **Schema.org com AggregateRating 5.0 / 30 reviews sem reviews visíveis no site.** Isso é risco de penalização Google + confiança. Se for verdade, precisa mostrar. Se não, precisa sair do JSON-LD.
3. **Copy "demonstrativa"** na seção "Resultados Reais" — mata a própria seção.
4. **Zero social proof visível na home**: sem logos, sem depoimentos, sem cases, sem nomes.
5. **CTAs fragmentados**: header diz "Agende sua conversa", hero diz "Falar no WhatsApp", CTA final diz "Começar com um site" e "Ir para diagnóstico". Quatro variações, três destinos, zero foco.

### Oportunidades de melhoria
- Trocar os widgets decorativos do Hero por um **screenshot real** de um dashboard/CRM/loja que você entregou.
- Criar uma seção "Marcas que confiam na Yamaji" com 6–8 logos reais acima da dobra.
- Adicionar 3 depoimentos com foto, nome, cargo e empresa.
- Mostrar 3 cases com métrica de impacto ("Anipet: +180% conversão em 90 dias").
- Definir **um único destino de conversão primário** (ex: `/aplicar`) e **um único secundário** (WhatsApp direto com contexto).

### Nota geral: **5,8 / 10**
- Código: 7,5
- Design: 6,5
- Copy: 4,5
- Prova social: 3,0
- CRO: 5,0
- Posicionamento: 5,0
- Autoridade percebida: 5,0

---

## Etapa 2 — Conversão (CRO)

### Proposta de valor no Hero: **fraca**

**Atual:**
> Engenharia Digital v2.0
> Comece com estrutura. Evolua com tecnologia.
> Sites, tráfego, CRM, automações e IA organizados em um ecossistema de crescimento escalável e previsível.
> [Falar no WhatsApp] [Ver Sistemas]
> Resposta em até 24h úteis.

Problemas:
- **"Engenharia Digital v2.0"** — ninguém sabe o que é v2.0 nem por que importa. Parece versão beta.
- **"Comece com estrutura. Evolua com tecnologia."** — bonito de escrever, vazio de promessa. Não responde "o que você faz por mim?".
- **Cardápio em vez de promessa:** lista 5 serviços sem priorizar.
- **"Ecossistema de crescimento escalável e previsível"** — 4 palavras-chave de gestor de produto. Zero valor percebido pelo cliente.
- **CTA secundário fraco:** "Ver Sistemas" manda pra uma página de produto. Deveria mandar pra **caso de sucesso** (gera desejo) ou pra **orçamento direto**.

### Proposta reescrita (referência — ajuste para seu tom)

> Estruturamos a operação digital de empresas que querem escalar sem virar refém de freelancer.
> Sites premium, CRM, tráfego e automação — entregues em 30 dias, com métricas auditáveis.
> [Agendar diagnóstico gratuito (20 min)] [Ver cases com resultado]
> Resposta em até 24h. Sem enrolação.

Por que funciona melhor:
- **"empresas que querem escalar sem virar refém de freelancer"** — já filtra e valida dor específica.
- **"em 30 dias"** — promessa tangível.
- **"com métricas auditáveis"** — oposto de "demonstrativas".
- **"Agendar diagnóstico gratuito (20 min)"** — reduz atrito, quantifica o compromisso.
- **"Ver cases com resultado"** — CTA secundário que alimenta o primário.

### Elementos ausentes que aumentariam conversão
- **Prova social acima da dobra** (tirinha de logos ou "mais de X empresas atendidas").
- **Urgência real.** Exemplo honesto: "Aceitamos 3 novos projetos por mês — abril: 1 vaga restante."
- **Garantia explícita.** "Primeira semana: se você não aprovar o roadmap, devolvemos 100%." Já existe um componente `Guarantees.tsx` e `GuaranteeSLA.tsx` no código — não está sendo usado na home.
- **Âncora de preço.** Sem âncora, o cérebro do lead pensa "deve ser R$ 50k". Coloque "Projetos a partir de R$ X" ou "investimento médio por operação: R$ X–Y".
- **FAQ específica** (reduz objeções sem precisar de ligação).
- **Depoimento em vídeo** (converte 2–3× mais que texto).

### Fluxo atual: **vazamento em 3 pontos**
1. **Hero → sem prova social** → lead já começa em dúvida.
2. **"Crescimento em Níveis"** parece estrutura de preço **mas não tem preço nem CTA em cada card** → o visitante compara as 3 opções mentalmente, não decide, scrolla.
3. **CTA final divide o lead em duas portas** (site vs operação completa) — isso só funciona se cada porta levar a uma conversão diferente. Hoje uma vai pro WhatsApp e outra pro formulário, sem contexto de qualificação. **Consolide em uma porta.**

### Ganhos rápidos de conversão (impacto × esforço)
1. Fixar um **CTA sticky no mobile** com "Chamar no WhatsApp" (componentes `StickyWhats.tsx` e `MobileStickyCTA.tsx` existem no código — não estão na home).
2. Usar o componente `ProblemHookSolution.tsx` já existente logo após o Hero — ele endereça a dor antes de vender a solução.
3. Adicionar `TestimonialsCarousel.tsx` (componente existe) entre serviços e níveis.
4. Habilitar o GA4/Pixel (sem isso qualquer melhoria é chute).

---

## Etapa 3 — UI / Design / Estética

### Tipografia
- **Atual:** Inter (corpo) + Montserrat (display).
- **Diagnóstico:** funcional, mas **genérica**. Em 2026 todo site de agência usa Inter. Não diferencia nem transmite luxo.
- **Recomendação:** trocar Montserrat por uma display com caráter. Opções:
  - **Neue Haas Grotesk / Söhne** (ref.: Linear, Vercel) — técnico premium
  - **Saans / GT Super** — editorial premium
  - **Fraunces** (serif moderna, grátis) — diferencia instantaneamente
  - Fique com Inter no corpo, mas **suba o peso do display para 700–800** e **aumente o tamanho do H1 no mobile** (hoje `text-4xl md:text-6xl` está ok, mas o tracking `tracking-tight` puxa pra um look genérico Vercel-clone).

### Hierarquia visual
- O Hero **compete** com os widgets flutuantes da direita. Os balões "Ricardo Mendes / Tráfego +24% / AI Processing" são ruído decorativo — eles puxam o olho pra longe da promessa e do CTA.
- A seção "Crescimento em Níveis" é esteticamente a mais sofisticada da página (gradient border, glow, badge RECOMENDADO), mas **ela não é o objetivo da página**. Ela ofusca o CTA final.
- Hierarquia correta por seção: Hero > Prova Social > Cases/Resultado > Oferta > CTA. Hoje está: Hero > Serviços (texto) > Níveis (visual forte) > Pipeline (decorativo) > Resultados (fake) > Protocolo (genérico) > CTA.

### Cores
- Fundo `#0A0A0B`, accent `#00FFA3` (verde neon), accent2 `#5B2DFF` (roxo).
- **Problema:** esse combo dark + neon verde é **o estilo padrão de toda startup técnica 2022–2025**. Vercel, Linear, 50 clones de Stripe, qualquer landing de SaaS indie. Não diferencia. Não é premium — é moderno genérico.
- Se quiser **autoridade**, considere:
  - **Off-black + bege/creme (quase-Apple / Studio Works)** — parece consultoria.
  - **Black + dourado quente (âmbar #D4AF37)** — parece boutique premium.
  - **Branco + preto + um único accent sutil (azul petróleo, verde militar)** — parece agência editorial.
- Se quiser **tech premium de verdade**, veja: linear.app, stripe.com, vercel.com, work.co, instrument.com, locomotive.ca, monograph.studio. Nenhum deles usa verde neon chapado.

### Espaçamento e alinhamento
- Container máximo de 1200px + padding de 24px: ok.
- Seções com `py-20` e `py-24`: razoável, mas **a página inteira tem o mesmo ritmo vertical**. Isso achata o storytelling. Alterne: Hero alto, seção crítica comprimida, respiro largo antes do CTA final.
- No código há muitos `text-center` em seções grandes — evita isso. Texto alinhado à esquerda lê mais rápido e parece mais sério/editorial.

### Consistência
- **Gradients** aparecem em vários lugares (hero, badges, cards) com intensidades diferentes — sem padronização visível. Crie 2–3 presets de glow e aplique consistentemente.
- **Cantos arredondados** misturam `rounded-xl`, `rounded-2xl`, `rounded-lg`, `rounded-full` sem hierarquia clara. Defina: componentes grandes = 2xl, cards = xl, chips/badges = full.
- **Ícones** estão mistos: alguns inline SVG custom no hero, outros sem ícone nas seções. Padroniza com `lucide-react` (já instalado).

### Referências visuais a estudar (nível premium 2026)
- **linear.app** — tipografia, motion, uso de espaço
- **vercel.com** — dark + accent disciplinado
- **work.co** — agência premium, editorial forte
- **instrument.com** — case studies como eixo narrativo
- **koto.studio** — branding boutique
- **stripe.com** — hierarquia e cor de qualidade institucional

---

## Etapa 4 — Estrutura da página

### Estrutura atual (home)
1. Hero (promessa vaga + widgets decorativos)
2. Serviços (4 cards texto)
3. Crescimento em Níveis (3 tiers sem preço)
4. Ecosystem Pipeline (diagrama interno)
5. Resultados Reais (métricas com disclaimer)
6. Protocolo de Operação (4 passos genéricos)
7. CTA final (2 portas)

### Problemas estruturais
- **Falta prova social** (logos, cases, depoimentos).
- **Pipeline "Site → Leads → CRM → Automação → Dashboard → IA"** é uma **visão interna sua**, não do cliente. Cliente quer saber o que ele vai receber e o que vai mudar no negócio dele, não seu workflow.
- **Níveis** aparece cedo demais. Oferta antes de prova social não fecha.
- **Protocolo de Operação** está **depois** dos resultados — deveria estar antes de qualquer oferta, explicando como você tira o projeto do papel, para reduzir ansiedade.
- **CTA final "qual o seu próximo nível digital?"** — bonito, mas quebra em duas rotas. Em home, consolide.

### Estrutura recomendada (reordenação)
1. **Hero** — promessa clara + CTA primário + subtítulo de garantia + botão secundário para case
2. **Logos/Prova social rápida** — "Empresas que operam com Yamaji" (6–8 logos)
3. **Problema → Solução** — "Você tem tráfego e não vende", "Seu site parece bonito mas não converte", "Seu CRM virou planilha" — 3 dores específicas + como a Yamaji resolve
4. **Cases com resultado** — 3 cases com métrica (Anipet, Proprium, Dieisson ou quais você tem reais). Foto + antes/depois + número
5. **Serviços / O que entregamos** — 4 blocos com ícone, descrição curta, e link "ver case de X"
6. **Metodologia / Como entregamos** — 4 passos (pode reaproveitar o Protocolo)
7. **Depoimentos** — vídeo ou texto com foto, nome, cargo, empresa (componente `TestimonialsCarousel.tsx` já existe)
8. **Níveis / Investimento** — 3 tiers **com faixa de preço** e **CTA em cada card**
9. **Garantia / SLA** — por que não tem risco em contratar (usar `Guarantees.tsx` / `GuaranteeSLA.tsx`)
10. **FAQ** — 6–8 perguntas que você já respondeu no WhatsApp 100 vezes
11. **CTA final único** — "Vamos conversar? Diagnóstico de 20 minutos, gratuito." + campo ou botão único
12. **Footer** — contatos, endereço, redes, links essenciais, selo "Yamaji Studio 2026"

### Seções que deveriam sair
- **Ecosystem Pipeline** (diagrama interno sem valor pro cliente) — ou reposiciona como visual dentro do Problema→Solução.
- **Widgets flutuantes do Hero** — substitui por screenshot real de entrega (dashboard real, mockup de site real).

---

## Etapa 5 — Posicionamento e Branding

### Freelancer ou agência?
Hoje: **freelancer caprichado cosplay de agência**.

Sinais de freelancer que estão no site:
- CTA principal "Falar no WhatsApp" (agência séria manda pra calendário ou formulário qualificador).
- Disclaimer de métricas demonstrativas.
- Ausência de equipe, sala, cultura, jeito de trabalhar.
- Ausência de cases com cliente nomeado no Hero.
- Rating 5.0 no schema sem reviews visíveis.
- Copy "ecossistema de crescimento" sem exemplos concretos.

Sinais de agência que estão no site:
- Bom trabalho de metodologia (Protocolo de Operação).
- Código organizado, estrutura técnica séria.
- Menção a CRM, IA, automação, SLA, garantia — vocabulário certo.

### O nome "Yamaji Studio" está sendo bem usado?
Mais ou menos. O nome é forte, tem personalidade, é memorável — mas a marca está **subutilizada**.

- Logo: só aparece como bolinha verde + texto no header (linha 42-43 do NavBar). Isso não é logo, é placeholder.
- Existe `public/images/logo-yamaji-aqua.png` no repo — use no header de verdade.
- Não há manifestação gráfica da marca em lugar nenhum (padrão, pattern, símbolo, marca d'água, monograma Y).
- Não há uma voz clara. Hora é técnico ("engenharia digital"), hora é coach ("qual o seu próximo nível digital?"), hora é corporativo ("protocolo de operação"). Escolhe um tom.

### Comunicação: alto valor ou genérica?
**Genérica premium.** Usa palavras caras ("ecossistema", "protocolo", "arquitetura", "previsibilidade") sem apoio em evidência. Isso é o oposto de autoridade — quanto mais abstrato o discurso, menos credibilidade.

### Tom de voz sugerido
Escolha **um** dos seguintes como eixo:

**Opção A — Engenheiro direto (recomendado pro que você parece ser hoje):**
- Frases curtas, verbos ativos, números específicos.
- Sem "ecossistema", "jornada", "sinergia", "protocolo".
- Tom: *"A gente entrega site, CRM e automação que funcionam. Com métricas auditáveis. Em 30 dias. Se atrasar, desconta."*

**Opção B — Estúdio boutique (mais premium, mas exige delivery de nível):**
- Frases editoriais, ritmo pausado, confiança tranquila.
- Tom: *"Operações digitais sérias. Poucas por ano. Escolhemos quem atendemos. Resultados auditáveis."*

**Opção C — Consultor técnico (pra B2B corporativo):**
- Frases longas, vocabulário preciso, referências a frameworks.
- Tom: *"Estruturamos o stack digital de empresas em estágio de escala. Trabalhamos com SLA contratual, roadmap trimestral e métricas versionadas."*

### Frases-modelo mais fortes (substituem copy atual)

| Hoje | Trocar por (opção engenheiro direto) |
|---|---|
| "Engenharia Digital v2.0" | "Operações digitais entregues em 30 dias" |
| "Comece com estrutura. Evolua com tecnologia." | "Site, CRM e tráfego que funcionam juntos. Sem remendo." |
| "Sites, tráfego, CRM, automações e IA organizados em um ecossistema de crescimento escalável e previsível." | "Pra clínicas, advogados e infoprodutores que querem parar de depender de freelancer avulso." |
| "Resposta em até 24h úteis." | "Diagnóstico em 24h. Projeto no ar em 30 dias. Contrato ou dinheiro de volta." |
| "Qual o seu próximo nível digital?" | "Pronto pra estruturar? Agende 20 min." |
| "Métricas demonstrativas. Varia por operação." | (deleta — ou substitui por "Métricas reais de clientes ativos" se for verdade) |

---

## Etapa 6 — Código, SEO e Performance

### Organização do projeto
- **Bom:** Next.js 16 (App Router), TypeScript, Tailwind com tokens semânticos (`bg`, `fg`, `muted`, `accent`), pastas bem divididas (`app/`, `components/`, `components/ui/`, `lib/`, `hooks/`, `utils/`).
- **Ruim:** O repositório tem **131 arquivos .tsx/.ts** e muitos componentes provavelmente órfãos ou duplicados (ex: `components/Footer.tsx` + `components/site/Footer.tsx`, `components/Hero.tsx` + `components/HeroAds.tsx` + `components/HeroIA.tsx`, `components/apply/ApplyHero.tsx` + `components/ApplyForm.tsx`, `components/services/data.ts` conflitando com rotas `app/servicos/`). Isso aumenta bundle, gera bugs, dificulta manutenção. **Rodar dead-code analysis** (`ts-prune` ou `knip`) e limpar.
- A pasta `app/base-eleitoral/admin/*` está exposta em produção. Se não é pra ser pública, mova pra rota protegida ou remove do build de prod. **Confere `robots.ts` e `middleware.ts`.**
- Existem dois arquivos Tailwind (`tailwind.config.js` e `tailwind.config.ts`). Deixar **só um**.

### SEO

**Bom:**
- Metadata completa (title template, description, OG, Twitter, canonical, locale pt_BR).
- JSON-LD LocalBusiness no root (`app/layout.tsx` linha 108).
- `sitemap.ts` e `robots.ts` presentes.
- Redirects estratégicos consolidando `/contato`, `/consultoria`, `/agendar` em `/aplicar` (bom pra SEO, evita conteúdo duplicado).
- Redirect apex → www.

**Problemas críticos:**
- `ga4: "G-TODO12345"` e `metaPixel: "TODO_PIXEL_ID"` — **nenhum analytics está funcionando**. Toda a infraestrutura de tracking customizado (scroll_depth, section_view, cta_click, whatsapp_click, time_to_first_cta) está programada mas **não chega nem no GA4 nem no Meta**. Plausible pode estar funcionando se o domínio estiver habilitado lá — conferir.
- `aggregateRating { ratingValue: "5.0", reviewCount: "30" }` hardcoded sem reviews reais visíveis. **Risco de penalização** pelo Google (Rich Results Policy — structured data deve refletir o conteúdo da página). Tire ou prove.
- `/og.jpg` referenciado em OG/Twitter — **verifique se o arquivo existe** em `public/`. Se não, preview social fica quebrado.
- Não há `hreflang` (irrelevante se só atende BR, então ok).
- Title do Hero é `<h1>` correto, mas muitas seções têm `<h2>` sem subtítulo estruturado para SEO. Cria uma hierarquia H1 > H2 > H3 clara.
- O conteúdo textual da home é **fino** (pouca densidade semântica pro Google ranquear em "agência de sites", "desenvolvimento de CRM", etc.). Adicionar seção FAQ com perguntas reais ajuda ranking e conversão.

### Performance

**Bom:**
- Preconnect pra plausible, GTM, Facebook.
- `display: "swap"` nas fontes Google.
- `overflow-x-hidden` previne shift horizontal.

**A verificar / melhorar:**
- **Imagens**: `public/images/` tem `.jpg`, `.jpeg`, `.png` sem versão `.webp`/`.avif`. O README até menciona "Otimize as imagens e use `next/image` quando possível". Converter todas as imagens pra `.webp`, servir via `<Image>` do Next.
- **Fontes Google**: duas famílias (Inter + Montserrat) = peso extra. Reduzir para uma ou usar `next/font` com weights específicos (não todos).
- **Lazy load** dos componentes pesados: `TestimonialsCarousel`, `RoiCalculator`, `CaseStudy`, `PlatformEducationDemo` (se renderizados abaixo da dobra).
- **Verificar Core Web Vitals em produção** (PageSpeed Insights, pagespeed.web.dev). Especialmente LCP do Hero (que tem SVG + widgets absolute + glow blur) — provavelmente > 2,5s em 3G.
- Os `blur-[110px]` e `blur-[120px]` em várias camadas do Hero são **muito caros** em GPU de celular barato. Reduz ou usa gradient estático.
- `framer-motion` está no `package.json` — se você não usa motion intensivo em muitas páginas, vale remover ou usar via dynamic import (peso ~90kb gzip).

### Responsividade
- Tailwind responsivo parece ok no código, mas valida no device real (iPhone SE 375px, Galaxy Fold 280px). Seções com `grid-cols-2 md:grid-cols-6` (Pipeline) podem ficar esticadas em 375px.
- Header mobile tem drawer lateral — bom. Confere se fecha no clique fora (o código sugere que sim).

### Acessibilidade
- Skip link no topo da home (linha 122-127) ✓
- `aria-hidden`, `aria-label`, `role="dialog"` no drawer ✓
- Contraste `text-muted` (#A7ADB5) sobre `bg` (#0A0A0B) está em ~7:1 — passa AA
- Falta `alt` em algumas imagens? Conferir com audit do Lighthouse.

### Melhorias técnicas diretas (hoje)
1. Trocar `G-TODO12345` e `TODO_PIXEL_ID` pelas IDs reais em `app/layout.tsx`.
2. Remover ou preencher `aggregateRating` no JSON-LD.
3. Criar `/public/og.jpg` (1200x630) com o logo Yamaji e frase-âncora.
4. Rodar `npx knip` ou `ts-prune` e deletar componentes órfãos.
5. Consolidar `tailwind.config.js` + `tailwind.config.ts` em um só.
6. Converter imagens pra `.webp`, usar `next/image`.
7. Audit Lighthouse e PageSpeed Insights — registrar baseline.
8. Limpar rotas de admin expostas (`/base-eleitoral/admin`) ou colocar atrás de auth.

---

## Plano de Ação — P0 / P1 / P2

### P0 — Crítico (fazer nas próximas 48 horas)

Essas são mudanças que **não são cosméticas** — elas arrumam coisas que estão custando venda ou que geram risco.

1. **Habilitar GA4 e Meta Pixel** (`app/layout.tsx`). Sem isso, você está cego.
2. **Remover o disclaimer "Métricas demonstrativas"** da seção Resultados Reais. Ou tira a seção, ou coloca métricas reais com nome do cliente atrás.
3. **Trocar o `aggregateRating` 5.0/30** por reviews reais (ou remover do JSON-LD).
4. **Reescrever o Hero** com promessa clara + para quem + resultado. Modelo:
   - H1: "Estruturamos a operação digital de empresas que querem escalar."
   - Sub: "Sites, CRM, tráfego e automação entregues em 30 dias. Com métricas auditáveis."
   - CTA primário: "Agendar diagnóstico de 20 min"
   - CTA secundário: "Ver cases com resultado"
5. **Colocar uma tirinha de logos** abaixo do Hero, mesmo que sejam 4–6 clientes reais.
6. **Adicionar 3 depoimentos** com foto, nome, cargo e empresa (usar `TestimonialsCarousel.tsx` que já existe).
7. **Substituir os widgets decorativos do Hero** por um screenshot real de dashboard/site entregue.
8. **Consolidar CTAs**: definir que o CTA primário de todo o site é `/aplicar` e o secundário é WhatsApp contextualizado. Padronizar no header e no hero.
9. **Verificar /public/og.jpg** — criar se não existir.
10. **Gerar um logo de verdade** no header, não só o dotzinho verde + texto.

### P1 — Importante (fazer nas próximas 2 semanas)

Mudanças que melhoram muito a percepção de autoridade e conversão.

1. **Construir 3 cases de cliente** com: foto, nome, empresa, problema antes, o que foi entregue, métricas depois. Se você tem Anipet, Proprium e Dieisson no `public/images/` — esses já estão prontos pra virar case.
2. **Reorganizar a home** seguindo a estrutura recomendada na Etapa 4 (Hero → Logos → Problema/Solução → Cases → Serviços → Metodologia → Depoimentos → Níveis com preço → Garantia → FAQ → CTA).
3. **Adicionar preço âncora** nos níveis (Essencial / Estruturado / Inteligente) — pelo menos "A partir de R$ X".
4. **Construir FAQ com 6–8 perguntas** (quanto custa, quanto tempo, o que entra, o que não entra, quando começa, contrato, revisões, suporte pós-entrega).
5. **Criar seção de Garantia/SLA** visível — componentes `Guarantees.tsx` e `GuaranteeSLA.tsx` já existem e **não estão sendo usados na home**.
6. **Trocar fontes**: testar Neue Haas Grotesk Display ou Fraunces no lugar de Montserrat (diferenciação visual instantânea).
7. **Revisar paleta**: manter dark + accent, mas testar accent em âmbar (#D4AF37) ou azul petróleo em vez de verde neon — impacto grande em percepção premium.
8. **Deletar código morto**: rodar `knip`, consolidar `Hero`/`Hero*`/`Apply*` duplicados.
9. **Converter imagens para .webp** e migrar todas pra `next/image`.
10. **Rodar Lighthouse e PageSpeed Insights** em produção, fixar LCP < 2,5s e CLS < 0,1.
11. **Ocultar ou proteger** `/base-eleitoral/admin`.

### P2 — Refinamento premium (fazer no próximo mês)

Detalhes que sobem o site de "agência boa" para "agência premium de verdade".

1. **Depoimento em vídeo** de 30 segundos de pelo menos 1 cliente (converte 2–3× mais que texto).
2. **Micro-animações disciplinadas**: hover states em cards, reveal on scroll, cursor custom nos CTAs. Usa `framer-motion` com parcimônia — não enche a página de movimento.
3. **Página de caso dedicada** com narrativa editorial (problema → diagnóstico → entrega → resultado → depoimento). Referência: instrument.com/work, work.co/clients.
4. **Pattern ou monograma da marca** (o "Y" da Yamaji) aplicado como marca d'água em sections escuras — cria identidade visual própria.
5. **Blog ou /notas** com 4–6 artigos técnicos curtos (case breakdown, opinião sobre stack, guia de CRM). SEO de cauda longa + autoridade.
6. **Cursor custom + transições de página** (Barba.js ou View Transitions API).
7. **Estudo de caso em PDF** downloadable pra leads enterprise.
8. **Integração Calendly / Cal.com** no CTA primário em vez de formulário — reduz atrito pra lead qualificado.
9. **Chat com IA treinada** no seu conteúdo (bot pré-qualificador no canto inferior direito) — faz sentido se você vende "IA e automação".
10. **Versão em inglês** se quiser pescar cliente internacional / infoprodutor global.

---

## O que você deve fazer hoje (se só der pra fazer uma coisa)

**Reescreve o Hero e coloca 6 logos de cliente abaixo dele.**

Essas duas mudanças, juntas, sobem a percepção de autoridade do site de 5,8 pra 7,2 em uma tarde. O resto pode ser sprint.

---

*Auditoria preparada em 2026-04-20.*
