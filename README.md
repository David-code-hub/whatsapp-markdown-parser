# whatsapp-markdown-parser

A simple TypeScript library to convert lightweight markdown symbols in text into HTML tags.  
Supports bold (`*`), italic (`_`), strikethrough (`~`), and code blocks (```).

---

## Installation

```bash
npm install whatsapp-markdown-parser
```

## Usage

````bash
import { handleGenericMarkdown } from "whatsapp-markdown-parser";

const message = "*Bold* _Italic_ ~Strikethrough~ ```console.log('Code')```";

const html = handleGenericMarkdown(message);

console.log(html);
// Output:
// <b>Bold</b> <i>Italic</i> <s>Strikethrough</s> <code>console.log('Code')</code>
````
