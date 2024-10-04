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
  author: Author;
  likes: number;
  comments?: Comment[];
}

export interface PostWithTimestamps extends Post {
  createdAt: Date;
  updatedAt: Date;
}

interface Comment {
  id: number;
  authorId: number;
  text: string;
  postId: number;
  parentId: number | null;
}


