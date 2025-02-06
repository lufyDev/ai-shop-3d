import React, { useState, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
// import { state } from '../store'

import config from '../config/config'
import { download } from '../assets'
import { downloadCanvasToImage, reader } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'
import { CustomButton, AIPicker, ColorPicker, FilePicker, Tab } from '../components'


const Customizer = () => {
  return (
    <AnimatePresence>
        <motion.div
          key="customizer"
          className="absolute top-0 left-0 z-10"
          {...slideAnimation('left')}
        >
          <div className="flex items-center min-h-scren">
            <div className="editortabs-container">
              {EditorTabs.map((tab) => (
                <Tab
                  key={tab.name}
                  tab={tab}
                  handleClick={() => {}}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute z-10 top-5 right-5"
          {...fadeAnimation}
        >
          <CustomButton
            type="filled"
            title="Go Back"
            handleClick={() => state.intro = true}
            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
          />
        </motion.div>

        <motion.div
          className="filtertabs-container"
          {...slideAnimation('up')}
        >
          {FilterTabs.map((tab) => (
            <Tab
              key={tab.name}
              tab={tab}
              handleClick={() => {}}
              isFilterTab
              isActiveTab=""
            />
          ))}
        </motion.div>
    </AnimatePresence>
  )
}

export default Customizer