# 📦 VerbEngine

VerbEngine is an extensible library for conjugating Spanish and English verbs — both regular and irregular — across all simple, compound, continuous, and perfect continuous tenses.

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
import { conjugateSpanish, conjugateEnglish } from 'verb-engine';

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

## 🧠 Why use VerbEngine?

✅ **Lightweight** and dependency-free  
✅ **Easy to integrate** in Node.js or frontend projects  
✅ **Fully typed** with TypeScript  
✅ **Extensible** and maintainable architecture

## 📦 Installation

```bash
npm i verb-engine
```

## 🚀 Getting Started

```typescript
import { conjugateEnglish, getEnglishVerbs ,ConjugationResult } from "verb-engine";

export default function Home() {
  const verb = "eat";

  const conjugation: ConjugationResult = conjugateEnglish(verb);
  console.log(getEnglishVerbs) //all available verbs

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">"{verb}" conjugation</h1>
      {Object.entries(conjugation).map(
        ([tense, persons]) =>
          typeof persons === "object" &&
          persons && (
            <section key={tense} className="mb-4">
              <h2 className="font-semibold capitalize">{tense}</h2>
              <ul className="ml-4 list-disc">
                {Object.entries(persons).map(([p, f]) => (
                  <li key={p}>
                    <b>{p}:</b> {f}
                  </li>
                ))}
              </ul>
            </section>
          )
      )}
    </div>
  );
}
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
