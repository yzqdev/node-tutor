export interface FileItem {
  content: string;
  filename: string;
}
export interface DirPath {
  name?: string;
  files: FileItem[];
}
