import { useRouter } from "next/router"

export function ProductPage() {

    const router = useRouter();

    return (
        <div>
            Id do produto: {router.query.id}
        </div>
    )
}