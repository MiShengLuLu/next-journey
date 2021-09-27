import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { MdMovie } from 'react-icons/md'
import axios from 'axios'
import { baseURL } from '../axiosConfig'
import Link from 'next/link'

export default function Movie({ data = [], title }) {
  return (
    <Box maxW={1200} mx="auto" mt="20px">
      <HStack fontSize="24px">
        <MdMovie />
        <Heading as="h3" fontSize="24px">
          {title}
        </Heading>
      </HStack>
      <HStack mt="20px" spacing={3}>
        {data.map(movie => (
          <Box w={290} key={movie.id}>
            <Link href="/detail/[id]" as={`/detail/${movie.id}`}>
              <a>
                <Image src={movie.url} />
                <Text mt="10px" fontSize="12px">
                  {movie.title}
                </Text>
              </a>
            </Link>
          </Box>
        ))}
      </HStack>
    </Box>
  );
}

export function loadMovie() {
  return axios.get("/api/movie", { baseURL });
}
