import React from "react"

export type LoadingProps = {
    condition: boolean,
    text: string
}

export type LoadingComponent = React.FC<LoadingProps>

export type ComponentType = LoadingComponent
