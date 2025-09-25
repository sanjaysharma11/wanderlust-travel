# DevOps Setup Documentation 📋

## Overview
This document provides complete setup instructions for the WanderLust Travel Website CI/CD pipeline with Docker containerization, GitHub Actions automation, and comprehensive testing framework.

## 🐳 Docker Setup

### Docker Configuration
- **Multi-stage Build**: Optimized production build with Node.js 18 Alpine
- **Production Server**: nginx with custom configuration
- **Security Headers**: Implemented security best practices
- **Gzip Compression**: Enabled for better performance

### Build & Run Commands
```bash
# Build the Docker image
docker build -t wanderlust-travel .

# Run the container locally
docker run -p 8080:80 wanderlust-travel

# Access the application
# http://localhost:8080
```

### Docker Hub Deployment
```bash
# Tag for Docker Hub
docker tag wanderlust-travel your-dockerhub-username/wanderlust-travel:latest

# Push to Docker Hub
docker push your-dockerhub-username/wanderlust-travel:latest
```

## 🚀 CI/CD Pipeline (GitHub Actions)

### Pipeline Stages
1. **Test Stage**: Unit tests with Vitest
2. **Lint Stage**: Code quality with ESLint
3. **Security Stage**: Vulnerability scanning with npm audit
4. **Build Stage**: Docker image creation
5. **Deploy Stage**: Push to Docker Hub registry

### Required GitHub Secrets
Configure these secrets in your GitHub repository settings:

```
DOCKER_HUB_USERNAME: your-dockerhub-username
DOCKER_HUB_ACCESS_TOKEN: your-dockerhub-access-token
```

### Workflow Triggers
- **Push to main**: Full pipeline execution
- **Pull Request**: Test and lint stages only
- **Manual dispatch**: Can be triggered manually

## 🧪 Testing Framework

### Test Setup
- **Framework**: Vitest with React Testing Library
- **Environment**: jsdom for DOM simulation
- **Coverage**: Comprehensive code coverage reporting
- **Components Tested**: All React components have unit tests

### Running Tests Locally
```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Run specific test file
npx vitest run src/__tests__/Header.test.jsx
```

### Test Files Structure
```
src/
├── __tests__/
│   ├── App.test.jsx
│   ├── Header.test.jsx
│   ├── Hero.test.jsx
│   ├── TravelPlans.test.jsx
│   ├── WhyChoose.test.jsx
│   ├── TouristDestinations.test.jsx
│   ├── Stats.test.jsx
│   ├── Testimonials.test.jsx
│   ├── Footer.test.jsx
│   └── FloatingButtons.test.jsx
└── setupTests.js
```

## 📦 Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage"
  }
}
```

## 🔧 Configuration Files

### ESLint Configuration (.eslintrc.json)
- React hooks rules
- Unused variable detection
- Code quality enforcement
- JSX accessibility rules

### Vitest Configuration (vitest.config.js)
- React testing environment
- jsdom setup
- Coverage reporting
- File handling optimization for Windows

### nginx Configuration (nginx.conf)
- Security headers (CSP, HSTS, X-Frame-Options)
- Gzip compression
- Cache control
- Single Page Application routing

## 📁 Project Structure
```
wanderlust-travel/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline
├── src/
│   ├── components/
│   ├── __tests__/              # Unit tests
│   └── setupTests.js           # Test configuration
├── public/
│   └── favicon.svg             # Custom favicon
├── Dockerfile                  # Multi-stage container build
├── nginx.conf                  # Production web server config
├── vitest.config.js            # Test framework config
├── .eslintrc.json             # Code quality config
└── package.json               # Dependencies and scripts
```

## 🌐 Deployment Workflow

### Automated Deployment Process
1. Developer pushes code to `main` branch
2. GitHub Actions triggers the pipeline
3. Tests are executed with full coverage
4. Code is linted for quality issues
5. Security vulnerabilities are scanned
6. Docker image is built with latest code
7. Image is pushed to Docker Hub registry
8. Production deployment can pull latest image

### Manual Deployment Steps
```bash
# 1. Clone repository
git clone https://github.com/your-username/wanderlust-travel.git
cd wanderlust-travel

# 2. Install dependencies
npm install

# 3. Run tests
npm test

# 4. Build for production
npm run build

# 5. Build Docker image
docker build -t wanderlust-travel .

# 6. Run container
docker run -p 8080:80 wanderlust-travel
```

## 🔒 Security Features

### Implemented Security Measures
- **Content Security Policy**: Prevents XSS attacks
- **HTTPS Strict Transport Security**: Enforces secure connections
- **X-Frame-Options**: Prevents clickjacking
- **X-Content-Type-Options**: Prevents MIME sniffing
- **Dependency Scanning**: npm audit in CI pipeline
- **Container Security**: Non-root user in production

## 🔍 Monitoring & Debugging

### Log Monitoring
```bash
# View container logs
docker logs wanderlust-travel

# Follow live logs
docker logs -f wanderlust-travel
```

### Health Checks
- Application serves on port 80 inside container
- nginx handles all static file serving
- Proper error pages configured

## 📈 Performance Optimizations

### Build Optimizations
- **Vite Build**: Fast bundling and tree shaking
- **Gzip Compression**: Reduces transfer size
- **Static Asset Caching**: Browser caching headers
- **Multi-stage Docker**: Smaller production images

### Development Optimizations
- **Hot Module Replacement**: Fast development iteration
- **Test Parallelization**: Faster test execution
- **ESLint Integration**: Real-time code quality feedback

## 🚧 Troubleshooting

### Common Issues

#### "Too many open files" on Windows
```bash
# Solution: Use single thread mode
npx vitest run --threads=false

# Or use the provided test runner
./test-runner.bat
```

#### Docker Build Failures
```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker build --no-cache -t wanderlust-travel .
```

#### GitHub Actions Failing
1. Check secrets are properly configured
2. Verify Docker Hub credentials
3. Review workflow logs in GitHub

## 📚 Additional Resources

### Documentation Links
- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [GitHub Actions Guide](https://docs.github.com/en/actions)
- [nginx Configuration](https://nginx.org/en/docs/)

### Support Commands
```bash
# Check versions
npm --version
node --version
docker --version

# View package info
npm list
npm outdated

# Debug tests
npm test -- --reporter=verbose
```

---

**Note**: This DevOps setup provides a complete production-ready deployment pipeline with automated testing, security scanning, and containerized deployment. The configuration is optimized for both development productivity and production reliability.