import CodeBlock from './CodeBlock.component';
import Layout from './Layout.component';

const CodePageLayout = ({ children }) => (
  <Layout>
    <main className="w-full h-full flex justify-center mt-5 font-mono">
      <CodeBlock className="language-javascript">{children}</CodeBlock>
    </main>
  </Layout>
);

export default CodePageLayout;
