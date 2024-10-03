// postType.ts

export interface Author {
  id: number;
  name: string;
  username: string;
  avatar: string;
}
export interface Post {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  createdAt: Date;
  updatedAt: Date;
  author: Author;
}
