"use client"

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import { ChildrenType } from '@/typs/component.type'

export default function ReactQueryProvider(props: ChildrenType) {

    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    )
}