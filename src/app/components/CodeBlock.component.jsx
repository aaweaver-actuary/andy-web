import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';

const CodeBlock = ({ children, className }) => {
  const language = className.replace('language-', '');

  return (
    <div className="w-[400px]">
      <SyntaxHighlighter
        language={language}
        className="border-[2px] border-black font-mono"
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
