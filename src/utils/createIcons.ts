import { readdirSync, writeFileSync } from 'fs';

const PATH_ICONS = './src/assets/icons';
const PATH_CREATE_TYPES_ICONS = './src/types/icons.d.ts';

const cleanFileName = (fileName: string) => fileName.split('.')[0];
export const createIconsTypes = () => {
  let typesIcons = 'export type IconTypes = ';
  readdirSync(PATH_ICONS).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== 'index' && cleanName !== 'icons') {
      typesIcons += `| '${cleanName}' `;
    }
  });

  writeFileSync(PATH_CREATE_TYPES_ICONS, typesIcons);
};
