

import { useEffect, useRef, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface Post {
    id: number;
    title: string;
    body: string;
}

export default function Services() {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(0);

    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();

            setIsLoading(true);

            try {
                const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
                    signal: abortControllerRef.current?.signal,
                });
                const posts = (await response.json()) as Post[];
                setPosts(posts);
            } catch (e: any) {
                if (e.name === "AbortError") {
                    console.log("Aborted");
                    return;
                }

                setError(e);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, [page]);

    if (error) {
        return <div>Something went wrong! Please try again.</div>;
    }

    return (
        <div className="container text-justify ">
            <h1 className="mb-4 text-2xl">Data Fething in React</h1>
            <button onClick={() => setPage(page + 1)}>Increase Page ({page})</button>
            {isLoading && <div>Loading...</div>}
            {!isLoading && (
                <table className="border">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Body</td>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => {
                            return <tr key={post.id}>
                                <td>{post.id}</td>
                                <td className="text-2xl text-primary">{post.title}</td>
                                <td>{post.body}</td>
                            </tr>;
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
}

