import React from 'react';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-12 mb-6">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-4">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-violet-500 pl-6 italic my-6">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside my-6 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside my-6 space-y-2">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '';
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-400 underline hover:text-violet-300"
        >
          {children}
        </a>
      );
    },
  },
};

type Props = {
  value: PortableTextBlock[];
};

export default function PortableTextBlock({ value }: Props) {
  if (!value?.length) return null;

  return (
    <div className="wp-content">
      <PortableText value={value} components={components} />
    </div>
  );
}
