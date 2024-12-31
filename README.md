# SenseGrid Frontend

SenseGrid is an open-source customer intelligence platform that transforms scattered customer signals into actionable business intelligence. This repository contains the frontend application built with Remix.


## 🛠️ Tech Stack

- [Remix](https://remix.run/) - Full stack web framework
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn/UI](https://ui.shadcn.com/) - Component library
- [Lucide React](https://lucide.dev/) - Icon system

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/idealistic-group/sensegrid-frontend.git
cd sensegrid-frontend
```

2. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
app/
├── components/        # Reusable UI components
├── routes/           # Application routes
├── lib/             # Utility functions and shared logic
├── constants/       # values that stay the same
├── styles/          # Global styles and Tailwind configuration
├── types/           # TypeScript type definitions
└── services/        # Api services used to communicate with the backend
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature`
6. Submit a pull request

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Update documentation as needed
- Add tests for new features
- Ensure all tests pass before submitting PR
- Keep PRs focused and atomic

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```


## 🔒 Security

Please report security vulnerabilities to paulmothapo.business@gmail.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgements

- Thanks to all our contributors
- Built with [Remix](https://remix.run/)
- UI components from [Shadcn/UI](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)

## 📞 Support

- Create an issue for bug reports
- Community coming soon! In the mean time we can communicate here on GitHub.
- Email support: paulmothapo.business@gmail.com

## 🗺️ Roadmap

- [ ] Advanced data visualization components
- [ ] Real-time collaboration features
- [ ] Enhanced API integration
- [ ] Additional dashboard templates
- [ ] Improved documentation
- [ ] Performance optimizations

## 🏷️ Versioning

We use [SemVer](http://semver.org/) for versioning. For available versions, see the [tags on this repository](https://github.com/idealistic-group/sensegrid-frontend.git/tags).

## 💻 Commands

```bash
# Development
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server

# Testing
npm run test        # Run tests
npm run test:watch  # Run tests in watch mode
npm run lint        # Run linter
npm run type-check  # Run TypeScript checks

# Utilities
npm run clean       # Clean build directories
npm run format      # Format code with Prettier
```

## ⚡ Performance

- Lighthouse score: 95+ on all metrics
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Bundle size: < 200KB gzipped

## 🔄 CI/CD

We use GitHub Actions for our CI/CD pipeline. Builds are triggered on:
- Pull requests
- Pushes to main branch
- Tag creation