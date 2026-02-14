# Odontologijos Klinika - Minimalistinis Svetainės Dizainas

Šiuolaikiškas ir minimalistinis odontologijos klinikos svetainės dizainas, sukurtas naudojant Next.js, TypeScript ir Tailwind CSS. Svetainė sukurta lietuvių kalba ir pritaikyta vietos odontologijos paslaugų rinkai.

## 🦷 Funkcionalumas

### Pagrindinis puslapis (/)
- **Hero sekcija** - Pagrindinis šaukimas į veiksmą
- **Paslaugų pristatymas** - 6 pagrindinės paslaugos su ikonėlėmis
- **Daktaro pristatymas** - Informacija apie specialistą
- **Pacientų atsiliepimai** - Tikrų pacientų komentarai
- **DUK sekcija** - Dažnai užduodamų klausimų atsakymai
- **CTA sekcija** - Registracijos kvietimas

### Paslaugų puslapis (/paslaugos)
- Detalus kiekvienos paslaugos aprašymas
- Informacija apie procedūras ir garantijas
- Alternuojantis dizainas geresniam vartotojų patyrimui

### Apie mus puslapis (/apie-mus)
- Išsami daktaro biografija ir kvalifikacijos
- Klinikos istorija ir vertybės
- Išsilavinimo ir sertifikatų timeline
- Kontaktinė informacija ir misija

### Kontaktų puslapis (/kontaktai)
- Interaktyvi registracijos forma
- Išsami kontaktinė informacija
- Darbo laiko tvarkaraštis
- Skubių atvejų kontaktai

## 🛠️ Technologijos

- **Next.js 14** - React framework su App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Gražios ikonėlės
- **Responsive Design** - Prisitaiko visoms ekranų rezoliucijoms

## 🚀 Greitas startas

### Reikalavimai
- Node.js 18+ versija
- npm arba yarn package manager

### Įdiegimas

1. **Klonuoti projektą**
```bash
cd odontology-clinic
```

2. **Įdiegti priklausomybes**
```bash
npm install
```

3. **Paleisti development serverį**
```bash
npm run dev
```

4. **Atidaryti naršyklėje**
```
http://localhost:3000
```

## 📦 Skriptai

```bash
# Development režimas
npm run dev

# Sukurti production build
npm run build

# Paleisti production serverį
npm run start

# Kodo patikrinimas
npm run lint
```

## 🎨 Dizaino principai

### Spalvų paletė
- **Pagrindinis** - Pilkos spalvos (#374151, #6B7280, #9CA3AF)
- **Tekstas** - Tamsūs atspalviai (#111827, #374151)
- **Akcijų spalva** - Juoda (#000000)
- **Fonai** - Šviesūs atspalviai (#F9FAFB, #F3F4F6)

### Tipografija
- **Šriftas** - Inter (Google Fonts)
- **Hierarchija** - Light, Regular, Medium svoriai
- **Tarpai** - Platus tracking-wide stilius

### Komponentų sistema
- **Elegant Border** - Subtilūs border'iai su padding
- **Hover Effects** - Lengvas lift efektas
- **Buttons** - Primary ir Secondary stiliai
- **Sections** - Konsistentiškas padding ir spacing

## 📁 Projektų struktūra

```
odontology-clinic/
├── src/
│   ├── app/
│   │   ├── apie-mus/
│   │   │   └── page.tsx
│   │   ├── kontaktai/
│   │   │   └── page.tsx
│   │   ├── paslaugos/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Footer.tsx
│       └── Navigation.tsx
├── public/
├── package.json
├── tailwind.config.js
└── README.md
```

## 🔧 Kustomizacija

### Spalvų keitimas
Redaguoti `tailwind.config.js` failą:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Jūsų spalvos
      }
    }
  }
}
```

### Turinio keitimas
1. **Tekstas** - Redaguoti atitinkamus `.tsx` failus
2. **Paveiksliukai** - Įdėti į `public/` direktoriją
3. **Kontaktai** - Atnaujinti kontaktinę informaciją komponentuose

### Formos funkcionalumas
Kontaktų formoje `handleSubmit` funkcija:
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // Pridėti backend integraciją
  // Pavyzdžiui: siųsti duomenis į API
}
```

## 📱 Responsive Design

Svetainė pilnai prisitaiko:
- **Mobile** - 320px+
- **Tablet** - 768px+
- **Desktop** - 1024px+
- **Large screens** - 1280px+

## 🔍 SEO optimizacija

- Meta tags tinkle konfigūruoti
- Semantic HTML struktūra
- Alt tekstai paveikslėliams (kai bus pridėti)
- Greitas puslapių įkrovimas

## 🚀 Deployment

### Vercel (Rekomenduojama)
1. Įkelti projektą į GitHub
2. Prisijungti prie [Vercel](https://vercel.com)
3. Importuoti projektą
4. Automatinis deployment

### Netlify
1. Sukurti build: `npm run build`
2. Įkelti `out/` folderį į Netlify

### Kiti hosting'ai
Bet kuris static hosting, palaikantis Next.js

## 📞 Palaikymas

Jei turite klausimų arba reikia pagalbos:
- Susisiekite su vystymu komanda
- Patikrinkite Next.js dokumentaciją
- Tailwind CSS dokumentacija

## 📄 Licenzija

Šis projektas skirtas odontologijos klinikos naudojimui. Visas kodas yra prieinama redagavimui ir plėtojimui.

---

**Sėkmės su jūsų odontologijos klinikos svetaine! 🦷✨**
