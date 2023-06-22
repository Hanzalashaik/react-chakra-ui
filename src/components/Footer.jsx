import { Box, Heading, Stack, VStack, HStack, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'


const Footer = () => {
    return (
        <Box bgColor={'purple.800'} w={'100%'} h={'full'} color={'white'}>
            <Stack direction={['column', 'row']}>
                <VStack alignItems={'stretch'} w={'full'} px={'4'} p={'4'} m={'4'} >
                    <Heading size={'md'} textTransform={'uppercase'}>
                        Subscribe to me
                    </Heading>
                    <HStack borderBottom={'2px solid purple'} p={'2'} >
                        <Input placeholder='Enter Email here...' border={'none'} borderRadius={'none'} outline={'none'} 
focusBorderColor='none'
/>
                        <Button p={'0'} variant={'ghost'} borderRadius={'0px 200px 200px 0px'}>
                            <AiOutlineSend />
                        </Button>
                    </HStack>
                </VStack>

                <VStack w={'full'} m={'4'} 
                borderLeft={['none' ,'1px solid white']}
                borderRight={['none','1px solid white' ]}>
                <Heading textTransform={'uppercase'}>Video Hub</Heading>
                <Text>&#169; All rights reserved</Text>
                </VStack>
                <VStack w={'full'} p={'3'}>
                    <Heading size={'md'} paddingTop={'4'} textTransform={'uppercase'}>Social media</Heading>
                    <HStack p={'2'}>
                    <a href="https://www.linkedin.com/in/hanzala-shaik-94b139204/" target='blank'><AiOutlineLinkedin size={'30px'} /></a>
                    
                 <a href="https://github.com/Hanzalashaik" target='blank'><AiOutlineGithub size={'30px'}/></a>
                 
                    <a 
                    href="https://www.instagram.com/_hanzala_shaikh/" target='blank'><AiOutlineInstagram size={'30px'} /></a>
                    </HStack>
                </VStack>

            </Stack>
        </Box>
    )
}

export default Footer
