var fs = require('fs');

var _require = require("./index.js"),
    emojiArray = _require.emojiArray,
    emojiLib = _require.emojiLib;

var stingified = JSON.stringify({
  emojiArray: emojiArray,
  emojiLib: emojiLib
}).replace(/(["'])require(?:(?=(\\?))\2.)*?\1/g, function (value) {
  return value.replace(/"/g, '');
});
fs.writeFile('compiled.ts', "export type EmojiArrayItem = {\n    name: string;\n    names: string[];\n  }\n  \n  export type EmojiArray = EmojiArrayItem[];\n  \n  export type Emoji = {\n    name: string;\n    names: string[];\n    sort_order: number;\n    unicode: string;\n    skin_variations?: string[];\n  };\n  \n  export type EmojiLib = {\n    [key: string]: Emoji;\n  };\n  \n  export type CompiledEmojis = {\n    emojiArray: EmojiArray;\n    emojiLib: EmojiLib;\n  };\n  \n  export const compiledEmojis: CompiledEmojis = " + stingified, function (err) {
  if (err) throw err;
});
//# sourceMappingURL=compile.js.map