'use client';

import Button from '../../../../components/Button.component';

const ImageLinkForm = () => {
  return (
    <div
      className={`
      border-blue-500 border-2 bg-white bg-opacity-30
        my-3 p-3
        `}
    >
      <p className="text-sm">
        {'This Magic Brain will detect faces in your pictures. Give it a try!'}
      </p>
      <div className="mt-2">
        <input
          type="text"
          className="text-md p-2 w-[70vw] text-center border-gray-300 border-2 rounded-lg"
        />
        <Button
          className="text-md p-2 w-[30vw] text-center"
          text="Detect"
          onClick={() => {
            console.log('detected detect!');
          }}
        />
      </div>
    </div>
  );
};

export default ImageLinkForm;
