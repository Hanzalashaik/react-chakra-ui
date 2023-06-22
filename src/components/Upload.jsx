import { Container ,HStack,VStack,Button} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCloudUpload} from 'react-icons/ai'
import { Input } from '@chakra-ui/react'
const Upload = () => {
  return (
   < Container  maxW={'xl'} h={'100vh'} padding={'20'}>
    <VStack justifyContent={'center'}>
        <AiOutlineCloudUpload color='purple' size={'10vmax'} />
        <form>
          <HStack>
            <Input
              required
              type={'file'}
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: 'calc(100% + 36px)',
                  height: '100%',
                  marginLeft: '-18px',
                  color: 'purple',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  
                },
              }}
            />
            <Button colorScheme={'purple'} type={'submit'}>
              Upload
            </Button>
          </HStack>
        </form>
    </VStack>
   
   </Container>
  )
}

export default Upload