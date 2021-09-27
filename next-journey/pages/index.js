import React from 'react'
// import Header from '../components/Header'
// import Navigation from '../components/Navigation'
import Layout from '../components/Layout'
import Swiper, { loadSwiper } from '../components/Swiper'
import Movie, { loadMovie } from '../components/Movie'

export default function Home({ swiper, movie }) {
  return (
    <Layout>
      {/* <Header />
      <Navigation /> */}
      <Swiper data={swiper} />
      <Movie data={movie} title="电影" />
    </Layout>
  )
}

export async function getStaticProps () {
  // 获取轮播图
  const { data: swiper } = await loadSwiper()
  // 获取电影列表
  const { data: movie } = await loadMovie()
  return {
    props: {
      swiper,
      movie
    }
  }
}
