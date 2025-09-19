'use client'

import WingsCom from "@/components/PageComponents/MySociety/WingsCom"
import { useParams } from "next/navigation"

export default function WingDetailsPage() {

    const params = useParams()

    const alphabet = params.alphabet

    return(
        <>
            <WingsCom alphabet={alphabet}/>
        </>
    )
}