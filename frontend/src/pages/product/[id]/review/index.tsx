import { Header } from "@/components/Header";
import { useRouter } from "next/router";

export default function Review() {
    const router = useRouter();
    const productId = router.query.id as string;

    return (
        <div className="h-screen bg-gray-900">
            <Header />

            
        </div>
    )
}