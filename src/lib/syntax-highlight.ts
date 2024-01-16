import hljs from "highlight.js";
import "highlight.js/styles/base16/onedark.css";

export function highlightCodeInHtml(html: string) {
  // Find all <code> tags
  const codeTags = html.match(/<code.*?>.*?<\/code>/gs);

  // If no <code> tags found, return the original html
  if (!codeTags) {
    return html;
  }

  // For each <code> tag
  for (const codeTag of codeTags) {
    // Get the code
    const match = codeTag.match(/<code.*?>(.*?)<\/code>/s);
    const code = match ? match[1] : null;

    // If no code found, continue
    if (!code) {
      continue;
    }

    // Highlight the code
    const highlightedCode = hljs.highlightAuto(code).value;

    // Replace the code with the highlighted code
    html = html.replace(codeTag, `<code>${highlightedCode}</code>`);
  }

  return html;
}
