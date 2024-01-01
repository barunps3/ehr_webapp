This is a [Next.js](https://nextjs.org/) project

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


# Coding Guidelines 
## Indentation
We use tabs not spaces

## Names
PascalCase for :
  - `type` Names
  - `enum` Values
  - `Default Variables` names, `Default Variable Keys`
  - Components, Component file names

camelCase for :
  - `function` names
  - function `parameters`
  - local `variables`

Use whole word when possible

## Strings
- Use "double quotes" for strings shown to the user that need to be externalized (localized)
- Use 'single quotes' otherwise
- All strings visible to the user need to be externalized

## Style
- Use arrow functions => over anonymous function expressions
- Only surround arrow function parameters when necessary. For example, (x) => x + x is wrong but the following are correct:
```javascript
x => x + x
(x, y) => x + y
<T>(x: T, y: T) => x === y
```

* Always surround loop and conditional bodies with curly braces
* Open curly braces always go on the same line as whatever necessitates them
* Parenthesized constructs should have no surrounding whitespace. A single space follows commas, colons, and semicolons in those constructs. For example:
```javascript
for (let i = 0, n = str.length; i < 10; i++) {
    if (x < 10) {
        foo();
    }
}

function f(x: number, y: string): void { }
```

## Folder Structure
- Components used directly in a pages must be placed in app/components
- Components shared between Components (which were called in page.tsx) must be placed in app/utils/components

# CSS Styling
- Color palette used: https://colorhunt.co/palette/f5efe7d8c4b64f709c213555. Please check app/globals.css
- `border-radius` of components except buttons: 10px
- `font` Family: Sans-serif


# Appendix
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


