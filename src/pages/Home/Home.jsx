import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderC from '../../components/HeaderCopy'
import { PageLayout } from '../../layout/PageLayout'
import { StyledH1, StyledHome } from '../../styles/Styled'

function Home() {
const navigate = useNavigate()
 
  return (
    <PageLayout>
     <HeaderC />
     <StyledHome>
      <StyledH1>Generate Activity Ideas When You Are Bored</StyledH1>
      <button onClick={() => {
        navigate("/login")
      }}>GET STARTED</button>
     </StyledHome>
    </PageLayout>
  )
}

export default Home