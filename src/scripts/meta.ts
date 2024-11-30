import { metaTags } from '../data/meta-tags';

export const injectMetaTags = () => {
  const head = document.head;

  metaTags.forEach((tag) => {
    const metaElement = document.createElement('meta');

    // Check if the tag has a "name" or "property" attribute
    if (tag.name) {
      metaElement.setAttribute('name', tag.name);
    } else if (tag.property) {
      metaElement.setAttribute('property', tag.property);
    }

    // Add content or charset attributes
    if (tag.content) {
      metaElement.setAttribute('content', tag.content);
    }
    if (tag.charset) {
      metaElement.setAttribute('charset', tag.charset);
    }

    // Append the meta tag to the head
    head.appendChild(metaElement);
  });
};
