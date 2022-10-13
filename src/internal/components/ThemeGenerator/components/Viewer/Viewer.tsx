import {
    useState,
    useCallback
} from 'react'

import { ThemeProvider } from '@contexts/ThemeContext'

import componentsStructure from './componentsStructure'

import * as Styled from './style'

const Viewer = ({ theme }: any) => {
    const [selectedComponents, setSelectedComponents] = useState<typeof componentsStructure>([])

    const handleOnSelect = useCallback((selectedItem: any) => {
        setSelectedComponents(current => {
            const alreadyExistingOption = current.find(i => i.id === selectedItem.id)

            if (alreadyExistingOption) {
                return current.filter(i => i.id !== selectedItem.id)
            } else {
                return [
                    ...current,
                    selectedItem
                ]
            }
        })
    }, [])

    return (
        <Styled.Wrapper>
            <Styled.Sidebar>
                <Styled.ComponentsList>
                    {
                        componentsStructure.map(component => {
                            return (
                                <Styled.ComponentListItem
                                    key={component.id}
                                    id={component.id}
                                    text={component.label}
                                    value={component}
                                    selected={selectedComponents.includes(component)}
                                    onClick={() => handleOnSelect(component)}
                                />
                            )
                        })
                    }
                </Styled.ComponentsList>
            </Styled.Sidebar>

            <ThemeProvider theme={theme}>
                <Styled.InnerWrapper>
                    {
                        selectedComponents.length ? (
                            selectedComponents.map(selectedComponent => {
                                const Component = selectedComponent.component
    
                                return (
                                    <Styled.ComponentWrapper key={selectedComponent.id}>
                                        {/*@ts-ignore*/}
                                        <Component {...selectedComponent.props} />
                                    </Styled.ComponentWrapper>
                                )
                            })
                        ) : (
                            <Styled.Placeholder>
                                {'Select a component or more from the left list to see how your awesome theme looks 🦄'}
                            </Styled.Placeholder>
                        )
                    }
                </Styled.InnerWrapper>
            </ThemeProvider>
        </Styled.Wrapper>
    )
}

export default Viewer