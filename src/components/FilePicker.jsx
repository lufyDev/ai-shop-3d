import React from 'react'

import CustomButton from './CustomButton'

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm border-gray-200">
      <div className="flex-1 flex flex-col">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? "No file selected" : file.name}
        </p>
      </div>

      <h3 className="mt-2 text-gray-500 text-xs">
        Choose how to apply the image
      </h3>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton 
          type="outline"
          title="Logo"
          handleClick={() => readFile('logo')}
          customStyles="text-xs hover:bg-gray-100 cursor-pointer border border-black-500"
        />
        <CustomButton 
          type="outline"
          title="Full"
          handleClick={() => readFile('full')}
          customStyles="text-xs hover:bg-gray-100 cursor-pointer border border-black-500"
        />
      </div>
    </div>
  )
}

export default FilePicker