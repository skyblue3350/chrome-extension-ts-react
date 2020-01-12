import * as React from 'react';
import { Message, Icon } from 'semantic-ui-react'

export interface Props {
}

export interface State {
}

export default class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render(): JSX.Element {
        return (
            <Message icon>
                <Icon name='circle notched' loading />
                <Message.Content>
                    <Message.Header>Sample Option</Message.Header>
                    Sample Message
                </Message.Content>
            </Message>
        )
    }
}
