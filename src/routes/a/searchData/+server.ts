import { filteredPosts } from '$lib/data/blog-posts';
import { type Post } from '$lib/utils/types'
import { json } from '@sveltejs/kit'

export async function GET() {
    let formattedPosts: Post[] = []

    filteredPosts.forEach((p) => {
        formattedPosts.push({
            content: `${p.excerpt} ${p.tags.join(" ")} ${p.html ? p.html.replace(/<[^>]*>/g, '') : " "}`, //the replace part is to remove any html tags 
            title: p.title,
            slug: p.slug
        })
    })

    return json(formattedPosts)
}
