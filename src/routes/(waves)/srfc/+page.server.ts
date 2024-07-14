import features from '$lib/data/features';
import aboutWSHL from '$lib/data/aboutWSHL';
import resourceSummary from '$lib/data/SRFCResources';
import { filteredPosts, SRFCcompPosts } from '$lib/data/blog-posts';

export async function load() {
  const posts = filteredPosts.slice(0, 4);

  return {
    features: aboutWSHL,
    posts,
    compPosts: SRFCcompPosts,
    resourceSummary
  };
}
