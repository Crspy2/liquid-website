'use client'

import { definePreview } from "next-sanity/preview"
import { projectId, dataset} from "./sanity.client"

const onPublicAccessOnly = () => {
    throw new Error("Unable to load preview. Please login!")
}

if (!projectId || !dataset) {
    throw new Error("Unable to fetch required information!")
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly
})