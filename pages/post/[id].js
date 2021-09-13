export default function Post ({ data }) {
  return <div>
    <span>{data.id}</span><br />
    <span>{data.title}</span>
  </div>
}

export async function getStaticPaths () {
  return {
    paths: [
      {
        params: { id: '1' }
      },
      {
        params: { id: '2' }
      }
    ],
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const { id } = params
  let data
  switch (id) {
    case '1':
      data = { id: '1', title: 'hello'}
      break;
    case '2':
      data = { id: '2', title: 'world'}
      break
    default:
      data = {}
      break;
  }
  return {
    props: {
      data
    }
  }
}