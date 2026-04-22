# Portfolio - Srija Polisetty

A modern, dark-themed portfolio website showcasing AI & Data Engineering projects, skills, and experience. Built with React and featuring a terminal-aesthetic design.

## 🎯 Features

- **Dark Terminal Aesthetic** - Minimalist design with a code-editor inspired look
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Navigation** - React Router for fast page transitions
- **Typing Animation** - Animated tagline with typing effect
- **Project Showcase** - Display your best projects with descriptions and tech stack
- **Skills Section** - Organized by categories (Languages, Web, Data & ML, Big Data, Tools)
- **Education Timeline** - Display your academic achievements
- **Awards & Certifications** - Highlight your accomplishments
- **Contact Information** - Easy access to email and social links

## 📋 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── photo.jpeg       # Your profile photo
│   └── photo.png
├── src/
│   ├── App.jsx          # Main app component with routing
│   ├── index.jsx        # React entry point
│   ├── index.css        # Global styles
│   ├── photo.jpeg       # Profile photo (imported in Home.jsx)
│   ├── components/
│   │   └── Navbar.jsx   # Navigation component
│   └── pages/
│       ├── Home.jsx     # Hero section & About
│       ├── Projects.jsx # Projects showcase
│       └── Experience.jsx # Work experience & timeline
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/srija180705/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## 📝 Pages

### Home
- Hero section with profile photo
- Quick stats (CGPA, Projects count)
- About me description
- Research interests
- Skills organized by category
- Education timeline
- Awards & certifications

### Projects
- Showcase of your projects
- Project cards with descriptions, tech stack, and links
- Responsive grid layout

### Experience
- Work experience timeline
- Professional achievements
- Career progression

## 🛠️ Built With

- **React** - UI library
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with CSS variables
- **Google Fonts** - Typography (Space Mono, DM Sans)

## 🎨 Customization

### Update Your Information

Edit `src/pages/Home.jsx` and update the `DATA` object:

```javascript
const DATA = {
  name: 'Your Name',
  tagline: 'Your professional tagline',
  about: 'Your about section...',
  // ... rest of your data
};
```

### Change Your Photo

Replace the `photo.jpeg` files in:
- `public/photo.jpeg`
- `src/photo.jpeg`

### Modify Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --bg:         #080808;      /* Background */
  --text:       #d8d8d8;      /* Text color */
  --accent:     #b0f040;      /* Accent color */
  /* ... more variables */
}
```

## 📦 Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Deployment

This project is configured for GitHub Pages deployment:

1. Build the project:
```bash
npm run build
```

2. Deploy:
```bash
npm run deploy
```

Your portfolio will be available at: `https://srija180705.github.io/Portfolio`

## 📧 Contact

- **Email**: [polisetty.srija123@gmail.com](mailto:polisetty.srija123@gmail.com)
- **College Email**: [srija.polisetty@mechyd.ac.in](mailto:srija.polisetty@mechyd.ac.in)
- **LinkedIn**: [linkedin.com/in/srija-polisetty](https://linkedin.com/in/srija-polisetty)
- **Phone**: +91 6305865472

## 📄 License

This project is open source and available under the MIT License.

## 🎓 Education

**Mahindra Ecole Centrale, Hyderabad**
- B.Tech in Artificial Intelligence (2023 – Present)
- CGPA: 8.53 / 10

## 🏆 Achievements

- Rs. 1,00,000 annual merit-based scholarship for consistent academic excellence
- IBM Data Science Professional Certificate (Coursera)

## 🔧 Technologies & Skills

**Languages**: Python, Java, C, SQL  
**Web**: React, Node.js, JavaScript, HTML, CSS  
**Data & ML**: Pandas, NumPy, Scikit-learn, PyTorch  
**Big Data**: Apache Airflow, Apache Iceberg, Spark, Hadoop  
**Tools**: Docker, Git, GitHub, MongoDB, MySQL, VS Code

---

**Made with ❤️ by Srija Polisetty**
