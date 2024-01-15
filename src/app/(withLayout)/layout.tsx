'use client'
import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { isLogedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../loading";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false)
    const isLoggedIn = isLogedIn()
    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/login')

        } setIsLoading(true)
    }, [router,isLoading])
    if (!isLoading) {
        return <Loading />
    }
    return (
        <Layout hasSider>
            <Sidebar />
            <Contents>
                {children}
            </Contents>

        </Layout>
    )
};

export default DashBoardLayout;
