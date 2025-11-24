interface MarkdownOptions {
  value: string;
  tags: Array<string>;
}

const textEditOptionValues: Array<MarkdownOptions> = [
  { value: "*", tags: ["<b>", "</b>"] },
  { value: "_", tags: ["<i>", "</i>"] },
  { value: "~", tags: ["<s>", "</s>"] },
  { value: "```", tags: ["<code>", "</code>"] },
];

const handleCodeMarkdown = (
  message: string,
  splitMessage: Array<string>,
  option: MarkdownOptions
) => {
  let position = 0;
  let splitCodeIndices: number[] = [];
  while ((position = message!.indexOf("```", position)) !== -1) {
    splitCodeIndices.push(position);
    position += 3;
  }
  splitCodeIndices.forEach((originalIndex, parsedItemIndex) => {
    const tag = parsedItemIndex % 2 === 0 ? option.tags[0] : option.tags[1];
    splitMessage[originalIndex] = tag;
    splitMessage[originalIndex + 1] = "";
    splitMessage[originalIndex + 2] = "";
  });
};

export const handleGenericMarkdown = (message: string) => {
  if (!message) return;
  const splitMessage = message!.split("");
  textEditOptionValues.forEach((option) => {
    const matchIndices: number[] = [];
    splitMessage.forEach((letter, index) => {
      if (letter === option.value) {
        matchIndices.push(index);
      }
    });

    matchIndices.forEach((originalIndex, parsedItemIndex) => {
      const tag = parsedItemIndex % 2 === 0 ? option.tags[0] : option.tags[1];
      splitMessage[originalIndex] = tag;
    });
    handleCodeMarkdown(message, splitMessage, option);
  });

  return splitMessage.join("");
};
