import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

type Props = {

}

/**
 * Main header component for athino sites.
 */
 export const AthinoHeader = (props: Props) => {

    return (
        <Frame>
        <Header>
          <WidthRestrictedFrame>
            <Links>
              <Link href="https://www.athino.no"><Logo/></Link>
              <Link href="https://www.notifier.athino.no">Notifier</Link>
              <Link href="https://www.secrets.athino.no">Secrets</Link>
              <Link href="https://www.database-manager.athino.no">Database manager</Link>
              <Link href="https://www.components.athino.no">Components</Link>
            </Links>
          </WidthRestrictedFrame>
        </Header>
      </Frame>
    )
}

const Frame = styled.div`
  background-color: black;
  min-height: 150vh;
`

const WidthRestrictedFrame = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;
`

const Header = styled.div`
  border-bottom: 1px solid gray;
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(33, 33, 33);
  box-sizing: border-box;
  height: 56px;
`

const Links = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  gap: 20px;
`

const Logo = styled.div`
  position: relative;
  height: 18px;
  width: 18px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('/athino.svg');
`
