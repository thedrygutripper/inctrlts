InCTRL Website Full Project - UPDATED
------------------------------------

Added features in this update:
- Netlify form wiring (CTA.jsx) with honeypot & hidden inputs
- Zapier instructions (NETLIFY_ZAPIER_INSTRUCTIONS.md)
- Framer Motion integrated into Hero and Projects for smoother animations
- 5 SEO-ready pages under src/pages/
- Placeholder project images in /assets/
- Serverless function example for Netlify functions in /functions/contact.js
- vercel.json for easy Vercel deploy

How to run locally:
1) npm install
2) npm run dev
3) Open http://localhost:5173 (or the Vite output)

To wire forms:
- For Netlify: deploy to Netlify and Netlify will capture forms automatically.
- For Zapier: create a Zap with a Catch Hook and set the form action to the webhook URL or use Netlify notifications.

Need help deploying to Vercel/Netlify or wiring Zapier? Reply and I will provide step-by-step assistance or deploy if you share access.
