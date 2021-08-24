export interface FilesAndFolder {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const FilesAndFolder: React.ComponentType<FilesAndFolder>;

export default FilesAndFolder;