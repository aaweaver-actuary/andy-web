'use client';

import Button from '../../../../components/Button.component';

import Box from './Box.component';

const ImageLinkForm = () => {
  return (
    <Box>
      <p className="text-sm">
        {'This Magic Brain will detect faces in your pictures. Give it a try!'}
      </p>
      <div className="mt-2 flex justify-between">
        <input
          type="text"
          className="text-md p-2 w-[80%] text-center border-gray-400 border-[1px] rounded-lg"
        />
        <Button
          className="text-md p-2 w-[30vw] text-center"
          text="Detect"
          onClick={() => {
            console.log('detected detect!');
          }}
        />
      </div>
    </Box>
  );
};

export default ImageLinkForm;
