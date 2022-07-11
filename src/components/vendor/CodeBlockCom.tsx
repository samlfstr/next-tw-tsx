import { CodeBlock } from 'react-code-blocks';

export default function CodeBlockCom({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  // Here write your code

  return (
    <div className='grid h-screen place-items-center'>
      <CodeBlock text={code} language={language} />
    </div>
  );
}
