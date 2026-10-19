# Modelo Warden Labs — Landing page para oficinas

Landing page de alta conversão para oficinas mecânicas, desenvolvida pela **Warden Labs**.
Demonstração com o cliente **Abarth Automotiva**.

**Stack:** React 18 · TypeScript · Vite · Tailwind CSS · lucide-react

## Seções

Hero com números e diferenciais · Serviços (com modal de detalhes) · Como funciona · Sobre ·
Galeria (lightbox com teclado) · Avaliações · Dúvidas frequentes · Agendamento (envia para o WhatsApp) ·
CTA final e rodapé · Botão flutuante de WhatsApp.

## Como adaptar para um novo cliente

Todo o conteúdo fica em **`src/config/site.ts`**. Os componentes não precisam ser alterados.

| O quê | Onde |
| :--- | :--- |
| Nome, sigla, logo, ano de fundação | `business` |
| Cor da marca (RGB, ex.: `'220 38 38'`) | `brandColor` |
| WhatsApp, telefone, e-mail, endereço, mapa, horários, redes | `contact` |
| Textos do topo e imagem de fundo | `hero` |
| Números e diferenciais | `stats`, `highlights` |
| Serviços (preço, duração, itens inclusos) | `services` |
| Etapas, sobre, galeria, depoimentos, FAQ | `process`, `about`, `gallery`, `testimonials`, `faq` |

Também ajuste o `<title>` e as meta tags em `index.html` e o `public/favicon.svg`.

## Rodando localmente

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção em dist/
```

---

Desenvolvido por **Warden Labs**.
