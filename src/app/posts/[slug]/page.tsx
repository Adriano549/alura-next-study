import { Cardpost } from "@/app/components/CardPost";
import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html"
import styles from "./page.module.css"
import db from "../../../../prisma/db";
import { redirect } from "next/navigation";
import { CommentList } from "@/app/components/CommentList";


async function getPostBySlug(slug: string) {
    try {
        const post = await db.post.findFirst({
            where: {
                slug
            },
            include: {
                author: true,
                comments: {
                    include:{
                        author:true,
                        children:{
                            include: {
                                author:true
                            }
                        }
                    },
                    where:{
                        parentId:null
                    }
                }
            }
        })
        if (!post) {
            throw new Error(`Post com o slug ${slug} não foi encontrado`)
        }

        const processedContent = await remark().use(html).process(post.markdown)
        const contentHtml = processedContent.toString()

        post.markdown = contentHtml

        return post
    } catch (error) {
        logger.error('Falha ao obter o post com o slug', {
            slug,
            error
        })
    }
    redirect('/not-found')
}
interface Params {
    slug: string
}

const PagePost = async ({ params }: { params: Params }) => {

    const post = await getPostBySlug(params.slug)

    

    return (
        <div>
            <Cardpost post={post} highlight={true} />
            <h3 className={styles.subtitle}>Código:</h3>
            <div className={styles.code}>
                <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
            </div>
            <div>
                <h2>
                    Comentários
                </h2>
            </div>
            <CommentList comments={post.comments}/>
        </div>
    )
}

export default PagePost