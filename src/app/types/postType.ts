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

export interface Comment {
  id: number;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  author: Author;
  post: Post;
  parentId: number | null;
  children?: Comment[];
}



