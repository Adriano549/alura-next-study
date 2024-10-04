import logger from "@/logger";
import { Cardpost } from "./components/CardPost";
import { Post } from "./types/postType";
import style from "./page.module.css"
import Link from "next/link";
import db from "../../prisma/db";

interface WhereClause {
  title?: {
    contains: string;
    mode: 'insensitive';
  };
}

// Definindo o tipo para o retorno da função
interface GetAllPostsResponse {
  posts: Post[]// Substitua 'Post' pelo tipo correspondente ao seu modelo de post
  prev: number | null;
  next: number | null;
}



async function getAllPosts(page: number, searchTerm?: string | null): Promise<GetAllPostsResponse> {
  try {

    const where: WhereClause = {};

    if(searchTerm){
      where.title = {
        contains: searchTerm,
        mode: 'insensitive', // Se você deseja considerar letras maiúsculas e minúsculas iguais
      }
    }

    const perPage = 6;
    const skip = (page - 1) * perPage
    const totalItems = await db.post.count({where})
    const totaPages = Math.ceil(totalItems / perPage)
    const prev = page > 1 ? page - 1 : null;
    const next = page < totaPages ? page + 1 : null;

    const posts = await db.post.findMany({
      take: perPage,
      skip,
      where,
      orderBy: { id: 'desc' },
      include: {
        author: true,
        comments: true 
      },
    })

    return { posts, prev, next };
  } catch (error) {
    logger.error('Falha ao obter posts', { error });
    return { posts: [], prev: null, next: null };
  }
}

interface SearchParams {
  page: string | null
  q: string | null
}
interface HomeProps {
  searchParams: SearchParams;
}
export default async function Home({ searchParams }: HomeProps) {
  const currentPage = parseInt(searchParams.page || "1")
  const searchTerm = searchParams?.q

  const { posts, prev, next } = await getAllPosts(currentPage,searchTerm);
  return (
    <>
      <main className={style.grid}>
        {posts.map((post: Post) => (
          <Cardpost key={post.id} post={post} highlight={false} />
        ))}
      </main>
      <div className={style.links}>
        {prev && <Link href={{pathname: '/', query:{ page: prev, q:searchTerm}}}>Pagina anterior</Link>}
        {next && <Link href={{pathname:'/', query:{page: next, q:searchTerm}}}>Próxima página</Link>}
      </div>
    </>
  );
}
