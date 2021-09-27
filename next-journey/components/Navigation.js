import { Box, HStack } from '@chakra-ui/react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <Box bg="#202020" h="52px">
      <HStack
        justifyContent="center"
        alignItems="center"
        color="white"
        h="52px"
        spacing={3}
      >
        <Link href="#">
          <a>影片</a>
        </Link>
        <Link href="#">
          <a>漫画</a>
        </Link>
        <Link href="#">
          <a>电影</a>
        </Link>
        <Link href="#">
          <a>电视</a>
        </Link>
        <Link href="#">
          <a>新闻</a>
        </Link>
      </HStack>
    </Box>
  );
}
