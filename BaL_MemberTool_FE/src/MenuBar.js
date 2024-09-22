import { Box, Flex } from '@chakra-ui/react';
import igmg_logo from './assets/igmg_logo.png'
import TabButton from './components/TabButtton';

export function MenuBar() {
    return (
        <Flex className="MenuBar" width="full" padding="10px">
            <Flex flexGrow={1}>
                <TabButton>
                    Home
                </TabButton>
                <TabButton>
                    About
                </TabButton>
            </Flex>

            <Flex flexGrow={0} justifyContent="flex-end">
                <img src={igmg_logo} className="App-logo" alt="logo" style={{ height: '4vmin', width: 'auto' }} />
            </Flex>
        </Flex>
    );
}