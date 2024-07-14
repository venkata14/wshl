export type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> };

export type SparkleType = {
  id: string,
  createdAt: number,
  color: string,
  size: number,
  style: any
}

export type TagType = {
  label: string,
  color?: 'primary' | 'secondary'
}

export type SocialLink = {

}

export type Feature = {
  name: string,
  description: string,
  image: string,
  tags: TagType[] | string[],
  resourceType: "food" | "transportation" | "healthcare" | "supplies" | "jobIncome" | "utilities" | "mental" | "safety" | "physical" | "housing" | "pharmacy"
}

export type ResoureListings = {
  name: string,
  resourceType: "food" | "transportation" | "healthcare" | "supplies" | "jobIncome" | "utilities" | "mental" | "safety" | "physical" | "housing" | "pharmacy",
  description: string,
  image: string,
  tags: TagType[],
}

export type BlogPost = {
  resourceType?: "food" | "transportation" | "healthcare" | "supplies" | "jobIncome" | "utilities" | "mental" | "safety" | "physical" | "housing" | "pharmacy",
  author?: string,
  tags: string[],
  keywords: string[],
  hidden: boolean,
  slug: string,
  title: string,
  date: string,
  updated: string,
  excerpt: string,
  html: string | undefined,
  readingTime: string,
  relatedPosts: BlogPost[],
  coverImage: string | undefined
}

export type ResourceMasterOrg = {
  food: BlogPost[],
  transportation: BlogPost[],
  healthcare: BlogPost[],
  supplies: BlogPost[],
  jobIncome: BlogPost[],
  utilities: BlogPost[],
  mental: BlogPost[],
  safety: BlogPost[],
  physical: BlogPost[],
  housing: BlogPost[],
  pharmacy: BlogPost[],
}