import { filterPosts, importPosts, compImportPosts, SRFCcompImportPosts } from './utils';

// export const allPosts = importPosts(true);
export const allPosts = importPosts(true);
export const filteredPosts = filterPosts(allPosts);

export const compPosts = compImportPosts(true);
export const SRFCcompPosts = SRFCcompImportPosts(true)