import Link from "next/link"
import styled from 'styled-components'
import { useRouter } from 'next/router'
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  outline: none;
`

export default function Index() {

  const router = useRouter()
  const handleClick = () => {
    router.push('/posts/first-post')
  }

  return <div>
    <h1>app</h1>
    
    <Link href="/posts/first-post"><a><Button onClick={handleClick}> test button </Button></a></Link>
  </div>
}


