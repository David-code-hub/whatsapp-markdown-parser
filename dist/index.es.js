const h = [
  { value: "*", tags: ["<b>", "</b>"] },
  { value: "_", tags: ["<i>", "</i>"] },
  { value: "~", tags: ["<s>", "</s>"] },
  { value: "```", tags: ["<code>", "</code>"] }
], l = (n, t, a) => {
  let s = 0, e = [];
  for (; (s = n.indexOf("```", s)) !== -1; )
    e.push(s), s += 3;
  e.forEach((c, o) => {
    const d = o % 2 === 0 ? a.tags[0] : a.tags[1];
    t[c] = d, t[c + 1] = "", t[c + 2] = "";
  });
}, r = (n) => {
  if (!n) return;
  const t = n.split("");
  return h.forEach((a) => {
    const s = [];
    t.forEach((e, c) => {
      e === a.value && s.push(c);
    }), s.forEach((e, c) => {
      const o = c % 2 === 0 ? a.tags[0] : a.tags[1];
      t[e] = o;
    }), l(n, t, a);
  }), t.join("");
};
export {
  r as handleGenericMarkdown
};
