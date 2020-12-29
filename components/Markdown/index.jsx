import { memo, useMemo } from 'react';
import 'github-markdown-css';
import MarkdownIt from 'markdown-it';
// import hljs from 'highlight.js/lib/highlight';
// import javascript from 'highlight.js/lib/languages/javascript';
// import 'highlight.js/styles/default.css';
import 'github-markdown-css';

// hljs.registerLanguage('javascript', javascript);
// hljs.registerLanguage('js', javascript);

function b64ToUtf8(str) {
  return decodeURIComponent(escape(atob(str)));
}

const md = new MarkdownIt({
  html: true, // html文字也能正常转义成md
  linkify: true, // 带http的可以自动变成链接
  // highlight(str, lang) {
  //   if (lang && hljs.getLanguage(lang)) {
  //     try {
  //       return hljs.highlight(lang, str, true).value;
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }
  //   return ''; // 使用额外的默认转义
  // },
});

// let hljsInited = false;
const Markdown = memo(({ isBase64, content }) => {
  const converted = isBase64 ? b64ToUtf8(content) : content;
  const html = useMemo(() => md.render(converted), [converted]);

  // if (!hljsInited && typeof window !== 'undefined') {
  //   hljs.initHighlightingOnLoad();
  //   hljsInited = true;
  // }

  return (
    <div className="markdown-body">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
});

export default Markdown;
