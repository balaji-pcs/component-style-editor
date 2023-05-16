import React, { useState } from 'react'
import Container from '../customModules/components/Container'
import UndoIcon from '../utils/icons/UndoIcon'
import ReduIcon from '../utils/icons/ReduIcon'
import Dropdown from '../customModules/components/Dropdown'
import MainSectionbody from '../components/MainSectionbody'
import MainSectionLivePreview from '../components/MainSectionLivePreview'

export default function MainSection() {
  const [preview, setPreview] = useState({});

  const handleSelectedButtonProp = (e, index, key) => {
    setPreview({ e: e, index: index, key: key })

  }
  return (
    <Container height='99.65vh' width='65vw' className='mainSection' flexDirection='column'>

      {/* header */}
      <Container height='50px' width='100%' justifyContent='space-between'>
        <Container height='50px' alignItems='center' justifyContent='space-around' border="none" className='back-btn-mainSection-1'>
          <div className="accordion-icon back-btn-mainSection" />
          <b>Back</b>
        </Container>
        <Container height='50px' width='125px' alignItems='center' border="none">
          <UndoIcon color='grey' />
          <ReduIcon color='grey' />
          <Dropdown defaultselected='100%' iconDirection='end' />
        </Container>
      </Container>

      {/* body */}
      <MainSectionbody handleSelectedButtonProp={(e, index, key) => handleSelectedButtonProp(e, index, key)} />

      {/* Live Preview */}
      <MainSectionLivePreview preview={preview} />
    </Container>
  )
}
