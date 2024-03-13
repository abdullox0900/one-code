'use client'

import { NextUIProvider } from '@nextui-org/react'

type NextUI = {
    children: React.ReactNode
}

function ProvidersNextUI(props: NextUI) {
    return (
        <NextUIProvider>{props.children}</NextUIProvider>
    )
}

export default ProvidersNextUI