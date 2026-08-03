# Crossref

An Angular application for searching and viewing works from the Crossref API.

## Development

This project uses Angular 22 and Node.js 24.

```bash
npm ci
npm start
```

Run the automated checks with:

```bash
npm audit
npm run test:ci
npm run build:pages
```

## Deployment

Pushes to `main` are tested, built, and deployed automatically to
[GitHub Pages](https://donytxz.github.io/crossref/) by the
`Deploy to GitHub Pages` workflow. The repository's Pages source must be set to
**GitHub Actions**.

## Made by Donato Alvarez

### Follow Up Questions:

1. What libraries did you use? Why did you use them? 
  The only non-Angular UI dependency is Tailwind CSS, used for layout and utility styles.
3. If you had more time, what further improvements or new features would you add?
  Improve performance and dessing, I also like to add unit test.
5. Which parts are you most proud of? And why?
  I try to do as reusable as possible dividing the application into modules and components.
7. Which parts did you spend the most time with? What did you find most difficult?
  Definitely the test I' waste' too much time trying to setup a few test but I can't do
