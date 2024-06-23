import features from '$lib/data/features';
import aboutWSHL from '$lib/data/aboutWSHL';
import resourceSummary from '$lib/data/resourceSummary';
import { filteredPosts, compPosts } from '$lib/data/blog-posts';

export async function load() {
  const posts = filteredPosts.slice(0, 4);

  return {
    features: aboutWSHL,
    posts,
    compPosts,
    resourceSummary
  };
}
