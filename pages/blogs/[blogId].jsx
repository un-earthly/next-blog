import React from 'react'
import { useRouter } from 'next/router'
export default function Blog() {
    const router = useRouter()
    const { blogId } = router.query
    return (
        <div>
            <h1>{blogId}</h1> 
        </div>
    )
}
