import Layout from '../../components/Layout'
import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import axios from 'axios'
import { baseURL } from '../../axiosConfig'

const DetailContainer = css`
  padding: 10px 0;
  p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  & > img {
    margin-bottom: 10px;
    display: block;
  }
`

export default function Detail ({ detail }) {
  function createMarkup() {
    return {__html: detail.content }
  }

  return <Layout>
    <Box maxW={1200} mx="auto" mt="70px">
      <Heading as="h2" size="xl">{detail.title}</Heading>
      <Heading as="h4" size="lg" mt="10px" color="gray.500" fontWeight="light">{detail.sub}</Heading>
      <Divider mt="10px" />
      <Box overflow="hidden" mt="10px">
        <Text float="left" fontSize="12px">作者：{detail.author}</Text>
        <Text float="right" fontSize="12px">发布日期：{detail.publish}</Text>
      </Box>
      <Divider mt="10px" />
      <Box css={DetailContainer}>
        <div dangerouslySetInnerHTML={createMarkup()}></div>
      </Box>
    </Box>
  </Layout>
}

// 获取用户能够访问到的所有的路由参数
export async function getStaticPaths () {
  let { data = [] } = await axios.get('/api/videos', { baseURL })
  const paths = data.map(id => ({ params: { id }}))
  return {
    paths,
    fallback: false
  }
}

// 依据参数获取其对应的数据
export async function getStaticProps ({ params }) {
  const { id } = params
  let { data: detail } = await axios.get(`/api/detail?id=${id}`, { baseURL })
  return {
    props: {
      detail
    }
  }
}
