import * as React from 'react';
import { CodeBlock } from 'react-code-blocks';

export default function CodeBlockCom({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  return (
    <div className='mt-10 grid h-auto place-items-center'>
      <CodeBlock text={code} language={language} />
    </div>
  );
}
