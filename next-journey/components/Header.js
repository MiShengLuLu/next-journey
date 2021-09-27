import { Box, Button, Container, Image, css } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { FaSignInAlt, FaSearch } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'

const logo = css`
  width: 140px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const SignInAndJoin = styled.div`
  height: 100%;
  line-height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  padding: 0 6px;
  float: left;
  
  & > button {
    padding: 0 10px;
    color: #fff;
    font-size: 12px;

    &:hover {
      text-decoration: none;
    }

    &:nth-of-type(1)::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      display: block;
      width: 1px;
      height: 100%;
      background: #fff;
    }
  }
`

const Search = styled.a`
  float: right;
  height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  color: #fff;
  font-size: 20px;
  padding: 0 10px;
  display: flex;
  align-items: center;
`

export default function Header () {
  return <Box h="52px" bgColor="#202020" borderBottom="1px solid #393939">
    <Container h="100%" maxW="1200px" pos="relative">
      <SignInAndJoin>
        <Button variant="link" leftIcon={<FaSignInAlt />}>注册</Button>
        <Button variant="link" leftIcon={<BsFillPersonFill />}>登陆</Button>
      </SignInAndJoin>
      {/* <Image css={logo} src="/images/logo.png" /> */}
      <Image w="140px" pos="absolute" left="50%" top="50%" transform="translate(-50%, -50%)" src="/images/logo.png" />
      <Search>
        <FaSearch />
      </Search>
    </Container>
  </Box>
}