import NextLink from 'next/link';
import { createElement } from 'react';

export function Link({ href, children }) {
  const Component = href.startsWith('http') ? 'a' : NextLink;
  // return createElement(
  //   Component,
  //   { className: 'text-red-500', href },
  //   children,
  // );
  return (
    <Component
      className="
       text-blue-500
       visited:text-pink-500
       hover:underline
      "
      href={href}
    >
      {children}
    </Component>
  );
}
