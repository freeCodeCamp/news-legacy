const slugg = require('slugg');
const fse = require('fs-extra');
const chalk = require('chalk');

function output(str = '', colour = 'blue') {
  console.log(chalk[colour](str));
}
function formatLog(str = '', colour = 'blue') {
  return chalk[colour](str);
}

const pagesPath = './src/pages';
const files = fse.readdirSync(pagesPath, 'utf8');
const safeNameMap = files
  .filter(name => !(/\.jsx?$/).test(name))
  .reduce(
    (accu, current) => ({
      ...accu,
      [current]: `${slugg(
        current
          .replace('.md', '')
          .split('-')
          .join(' ')
      )}.md`
    }),
    {}
  );

Object.keys(safeNameMap).forEach(fileName => {
  const oldName = `${pagesPath}/${fileName}`;
  const newName = `${pagesPath}/${safeNameMap[fileName]}`;
  if (oldName !== newName) {
    output(
      `
We have detected a possible unsafe url and corrected it:

It was - ${formatLog(oldName)}

It is now - ${formatLog(newName, 'green')}

Please enusre to commit these changes as they could break the build.
`,
      'yellow'
    );
  }
  fse.rename(oldName, newName);
});
