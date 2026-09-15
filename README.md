# Gautam Rao Portfolio V2

A polished Next.js portfolio with Framer Motion animations, interactive project cards, GitHub links, and a downloadable resume.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Add your images

Put these files in `public/images/`:

- `gautam-headshot.jpg`
- `gautam-about.jpg`
- `8451.jpg`
- `collins-aerospace.jpg`

The site will still compile if you replace those image paths with remote images or your own screenshots.

## Deploy

### Vercel
1. Push this folder to a GitHub repository.
2. Import the repository at Vercel.
3. Deploy.
4. Add `gautamrao.com` under Project → Settings → Domains.
5. Update the DNS records at your domain registrar using Vercel's instructions.

### GitHub repository
Your project cards currently link to `https://github.com/grao23` repositories. Edit `app/page.tsx` if you want to change or reorder them.

## Recommended polish before launch

- Add a professional headshot and one candid/about photo.
- Use a clean 84.51° event/work image and an aerospace/engineering image that you have permission to publish.
- Add screenshots or GIFs for your strongest projects.
- Consider adding a dedicated `/projects/[slug]` page later for deep technical write-ups.
