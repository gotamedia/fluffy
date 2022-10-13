import * as Fluffy from '@root/index'

import * as Styled from './style'

const viewer = () => {
    return (
        <Styled.Wrapper>
            <Fluffy.Button>
                {'Click me!'}
            </Fluffy.Button>

            <Fluffy.IconButton icon={Fluffy.Icons.Bank}/>

            <Fluffy.Input />

            <Fluffy.DatePicker
                selected={new Date()}
                onChange={() => {}}
            />

            <Fluffy.Card>
                <Fluffy.Card.Body>
                    <Fluffy.Card.Headline text={'Yes hello!'}/>
                </Fluffy.Card.Body>
            </Fluffy.Card>

            <Fluffy.Container>
                <Fluffy.Button>
                    {'Click me!'}
                </Fluffy.Button>
            </Fluffy.Container>

            <Fluffy.Select selected={[]} placeholder={'test'}>
                <Fluffy.ListItem text={'item'} />
                <Fluffy.ListItem text={'item'} />
                <Fluffy.ListItem text={'item'} />
                <Fluffy.ListItem text={'item'} />
                <Fluffy.ListItem text={'item'} />
            </Fluffy.Select>

            <Fluffy.List>
                <Fluffy.ListItem text={'item'} />
                <Fluffy.ListItem text={'item'} />
                <Fluffy.ListItem text={'item'} />
            </Fluffy.List>
        </Styled.Wrapper>
    )
}

export default viewer