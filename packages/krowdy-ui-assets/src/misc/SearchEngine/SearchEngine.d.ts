export interface SearchEngine {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const SearchEngine: React.ComponentType<SearchEngine>;

export default SearchEngine;