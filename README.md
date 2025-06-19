# 📦 VerbConjugator

VerbConjugator is an extensible library for conjugating Spanish and English verbs — both regular and irregular — across all simple, compound, continuous, and perfect continuous tenses.

Ideal for educational platforms, grammar tools, and language learning apps.

## ✅ Supported Tenses

This library currently supports conjugation in the following tenses:

### 🔹 Simple Tenses

- **present**
- **past** (pretérito)
- **imperfect**
- **future**
- **conditional**

### 🔹 Perfect Tenses

- **presentPerfect**
- **pastPerfect**
- **futurePerfect**
- **conditionalPerfect**

### 🔹 Continuous Tenses

- **presentContinuous**
- **pastContinuous**
- **futureContinuous**

### 🔹 Perfect Continuous Tenses

- **presentPerfectContinuous**
- **pastPerfectContinuous**
- **futurePerfectContinuous**
- **conditionalPerfectContinuous**

## 📌 Usage

```typescript
import { conjugateSpanish, conjugateEnglish } from 'verb-conjugator';

const spanish = conjugateSpanish('comer');
console.log(spanish.present.yo); // como
console.log(spanish.presentPerfect.yo); // he comido
console.log(spanish.futureContinuous.nosotros); // estaremos comiendo

const english = conjugateEnglish('eat');
console.log(english.present['he/she']); // eats
console.log(english.past.I); // ate
console.log(english.futurePerfectContinuous.we); // will have been eating
```

## 📚 Languages

- 🇪🇸 **Spanish** – Regular and irregular verbs
- 🇬🇧 **English** – Regular and irregular verbs

## 🔧 Coming Soon

- Support for more verbs and languages (e.g., French, Italian, Portuguese)
- CLI tool for batch verb conjugation
- Web playground
- API endpoint for cloud-based usage

## 🧠 Why use VerbConjugator?

✅ **Lightweight** and dependency-free  
✅ **Easy to integrate** in Node.js or frontend projects  
✅ **Fully typed** with TypeScript  
✅ **Extensible** and maintainable architecture

## 📦 Installation

```bash
npm install verb-conjugator
```

## 🚀 Getting Started

### Spanish Conjugation

```typescript
import { conjugateSpanish } from 'verb-conjugator';

// Regular verb
const hablar = conjugateSpanish('hablar');
console.log(hablar.present.yo); // hablo
console.log(hablar.past.tú); // hablaste

// Irregular verb
const ser = conjugateSpanish('ser');
console.log(ser.present.yo); // soy
console.log(ser.past.él); // fue
```

### English Conjugation

```typescript
import { conjugateEnglish } from 'verb-conjugator';

// Regular verb
const walk = conjugateEnglish('walk');
console.log(walk.present.I); // walk
console.log(walk.past.I); // walked

// Irregular verb
const go = conjugateEnglish('go');
console.log(go.present.I); // go
console.log(go.past.I); // went
```

## 🔤 Pronoun References

### Spanish Pronouns

- `yo` - I
- `tú` - you (informal)
- `él/ella` - he/she
- `nosotros` - we
- `vosotros` - you (plural, Spain)
- `ellos` - they

### English Pronouns

- `I` - I
- `you` - you
- `he/she` - he/she
- `we` - we
- `they` - they

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## 📄 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

[![Issues](https://img.shields.io/github/issues/KevinDaniel18/verb-engine?label=Open%20Issues&logo=github&style=flat-square)](https://github.com/KevinDaniel18/verb-engine/issues)

Found a bug or have a feature request? Please open an issue on our [GitHub repository](https://github.com/KevinDaniel18/verb-engine/issues).

---

Made with ❤️ for language learners and developers worldwide.
