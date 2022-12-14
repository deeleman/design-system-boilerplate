const fs = require('fs');

/**
 *  Turns any string token into PascalCase. We will use this for building component class names on build time.
 */
function toPascalCase (token) {
  return token.replace(/\w+/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase()).replace('-', '');
}

/**
 * Receives an iconPath within `/src/assets/icons` and returns a blueprint class for a component
 * matching the PascalCased component name and rendering a generated Base64 image of said component.
 */
function getJSXTemplate (iconPath, iconName) {
  return `import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../assets/icons/${iconPath}';

/** @internal **/
@Component({
  tag: 'hs-icon-${iconName.toLowerCase()}',
  shadow: false,
})
export class HsIcon${toPascalCase(iconName)} {
  @Prop({ reflect: true }) size = '1rem';

  render() {
    return (
      <img style={{ height: this.size, width: this.size }} src={\`\${svgIcon}#${iconName}\`} />
    );
  }
}
`;
}

/**
 * Iterates over `./src/assets/icons` to read all the files, generate component classes out of them
 * and store them within `./src/components/hs-icons`.
 */
const generateIcons = () => {
  fs.readdir('./src/assets/icons', (err, files) => {
    if (err) throw err;

    files.forEach(file => {
      const iconName = file.replace('.svg', '');

      if (iconName.startsWith('.')) return; // Filter out dotfiles

      const template = getJSXTemplate(file, iconName);

      fs.writeFile(`./src/components/hs-icons/icon-${iconName}.tsx`, template, { flag: 'w' }, (err) => {
        if (err) throw err;
      });
    });
  });
}

// Triggers icon generation as a side effect upon running/importing the file
generateIcons();
