"# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark mode support, and a functional contact form.

## 🚀 Features

- **Responsive Design** - Fully responsive layout that works on all devices
- **Dark/Light Mode** - Theme toggle with persistent preferences
- **Smooth Animations** - Beautiful animations powered by Framer Motion
- **Contact Form** - Functional contact form integrated with EmailJS
- **GitHub Integration** - Live GitHub streak statistics
- **Modern UI Components** - Built with Shadcn UI and Radix UI primitives
- **Fast Performance** - Optimized build with Vite

## 📁 Project Structure

```
portfolio-js/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── Header.jsx    # Navigation header
│   │   ├── Footer.jsx    # Footer component
│   │   ├── mode-toggle.jsx
│   │   └── theme-provider.jsx
│   ├── pages/
│   │   ├── Home.jsx      # Landing page
│   │   ├── Projects.jsx  # Projects showcase
│   │   ├── Skills.jsx    # Skills & technologies
│   │   ├── Experience.jsx # Work experience
│   │   └── Contact.jsx   # Contact form
│   ├── lib/
│   │   └── utils.js      # Utility functions
│   ├── assets/           # Images and static files
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Technologies Used

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** Shadcn UI, Radix UI
- **Icons:** Lucide React
- **Form Handling:** EmailJS
- **Routing:** React Router DOM
- **Type Effects:** Typewriter Effect

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/itz-hurairah18/portfolio.git
cd portfolio/portfolio-js
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `portfolio-js` directory and add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📧 EmailJS Setup

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Copy your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

## 🎨 Customization

### Update Personal Information

- Update social media links in [Contact.jsx](portfolio-js/src/pages/Contact.jsx)
- Modify GitHub username in the streak section
- Edit content in respective page components

### Theme Colors

Customize theme colors in [tailwind.config.js](portfolio-js/tailwind.config.js)

## 🌐 Deployment

### Deploy to Vercel

```bash
npm run build
vercel --prod
```

### Deploy to Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Update `vite.config.js` with your repo name:
```js
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

2. Build and deploy:
```bash
npm run build
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Muhammad Abu Hurairah**

- GitHub: [@itz-hurairah18](https://github.com/itz-hurairah18)
- LinkedIn: [Muhammad Abu Hurairah](https://www.linkedin.com/in/muhammad-abu-hurairah-988ba1303)
- Twitter: [@HurairahAb73769](https://x.com/HurairahAb73769)
- Instagram: [@abu_hurairah.rehmani](https://instagram.com/abu_hurairah.rehmani)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/itz-hurairah18/portfolio/issues).

## ⭐ Show your support

Give a ⭐️ if you like this project!" 
