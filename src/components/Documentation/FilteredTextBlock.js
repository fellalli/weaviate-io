import React from 'react';
import CodeBlock from '@theme/CodeBlock';

const FilteredTextBlock = ({ text, startMarker, endMarker, language, includeStartMarker='false', title=''}) => {
  // Filter out lines that are before the start marker, and lines with or after the end marker
  includeStartMarker = includeStartMarker == 'true';
  const lines = text.split('\n');
  const universalStartMarker = 'START-ANY';
  const universalEndMarker = 'END-ANY';
  let withinMarkers = false;
  let format;
  switch (language) {
    case "java":
      // remove leading indent of 4 spaces
      format = input => input.replace(/^    /, '');
      break
    case 'goraw':
      format = input => input
        // replace remaining tabs with 2 spaces
        .replace(/\t/g, "    ")
      break;
    case 'gonew':
        format = input => input
          // replace remaining tabs with 2 spaces
          .replace(/\t/g, "  ")
          .replace(/^  /g, "");
        break;
    case "go":
      format = input => input
        // remove leading indent of 2 or 1 tabs
        .replace(input.match(/^\t\t/) ? /^\t\t/ : /^\t/, '')
        // replace remaining tabs with 2 spaces
        .replace(/\t/, "  ")
      break;
    default:
      format = input => input;
  }

  const filteredLines = lines
    .filter((line) => {
      if (line.includes(startMarker) || (line.includes(universalStartMarker))) {
        withinMarkers = true;
        return includeStartMarker;
      }

      if (line.includes(endMarker) || (line.includes(universalEndMarker))) {
        withinMarkers = false;
        return false;
      }

      return withinMarkers;
    })
    .map(format)
    .join('\n');

    let language2 = language;
    switch (language2) {
      case 'gonew':
        language2 = 'go';
        break;
      case 'goraw':
        language2 = 'go';
        break;
      case 'javaraw':
        language2 = 'java';
        break;
    }


  return (
    <CodeBlock className={`language-${language2}`} title={title}>
      {filteredLines}
    </CodeBlock>
  );
};

export default FilteredTextBlock;
