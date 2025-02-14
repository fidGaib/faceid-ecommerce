import React, {useState} from 'react'
import {AnimatePresence} from 'framer-motion'

import Listing from './Listing'
import Overlay from './Overlay'
import Modal from './Modal'





const Card = ({data}) => {
    const [open, setOpen] = useState(false)
    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    return (
        <>
            <Listing data={data} open={openModal} />
            
            <AnimatePresence>
                {open && (
                    <Overlay close={closeModal}>
                        <Modal data={data} close={closeModal} />
                    </Overlay>
                )}
            </AnimatePresence>
        </>
    )
}
export default Card
