import { filterPosts, importPosts, compImportPosts } from './utils';

// export const allPosts = importPosts(true);
export const allPosts = importPosts(true);
export const filteredPosts = filterPosts(allPosts);

export const compPosts = compImportPosts(true);