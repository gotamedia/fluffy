import styled from "styled-components"

const Container = styled.div``

const Wrapper = styled.div`
	height: 0px;
	transition: height 200ms;
	overflow: hidden;
`

const InnerWrapper = styled.div`
	position: relative;
	overflow: hidden;
	display: flex;
	width: 100%;
	height: 100%;
	min-height: fit-content;
`

const ChildrenWrapper = styled.div`
	position: absolute;
	display: flex;
	top: 0px;
	left: 0px;
	right: 0px;
	min-width: fit-content;
	min-height: fit-content;
`

export { Container, Wrapper, ChildrenWrapper, InnerWrapper }
