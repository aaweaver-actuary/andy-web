import { ClarifaiStub, grpc } from 'clarifai-nodejs-grpc';
import {
  CLARIFY_API_KEY,
  CLARIFY_FACE_DETECTION_MODEL_ID,
} from './CLARIFY_API';

const connectToClairifai = (api) => {
  const stub = ClarifaiStub.grpc();
  const metadata = new grpc.Metadata();
  metadata.set('authorization', 'Key ' + api);
  return { stub, metadata };
};

const getSampleImage = async () => {
  const url =
    'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-crowd-at-concert.jpg';
  const response = await fetch(url);
  const buffer = await response.buffer();
  const base64 = buffer.toString('base64');
  return base64;
};

const isFailedStatusCode = (response) => {
  return response.status.code !== 10000;
};

// returns headers for api request to clarifai
const createModelInputs = (image, modelID, local = true) => {
  let out = {
    model_id: modelID,
    inputs: [
      {
        data: {},
      },
    ],
  };

  // if local, then image is base64 encoded
  if (local) {
    out.inputs[0].data.image = { base64: image };
  }
  // else, image is a url
  else {
    out.inputs[0].data.image = { url: image };
  }

  return out;
};

// if there is an error, then log it and return
const handleErr = (err) => {
  console.log('Error: ' + err);
};

// if response status is not 10000, then log the error and return
const handleFailedStatus = (response) => {
  if (isFailedStatusCode(response)) {
    console.log(
      'Received failed status: ' +
        response.status.description +
        '\n' +
        response.status.details,
    );
    return;
  }
};

// returns an array of predicted concepts
const predictedConcepts = (response) => {
  let out = [];
  console.log('Predicted concepts, with confidence values:');
  for (const c of response.outputs[0].data.concepts) {
    console.log(c.name + ': ' + c.value);
    out.push({ name: c.name, value: c.value });
  }
  return out;
};

// complete handling of clarifai response
const handleClarifaiResponse = (err, response) => {
  // if there is an error, then log it and return
  handleErr(err);

  // if response status is not 10000, then log and return
  handleFailedStatus(response);

  // else, return array of predicted concepts
  return predictedConcepts(response);
};

// detect faces in image
const detectFaces = async (image = '', getSample = false) => {
  // connect to clarifai
  const { stub, metadata } = connectToClairifai(CLARIFY_API_KEY);

  // get sample image if no image is provided
  let newImage;
  if (getSample || image === '') {
    newImage = await getSampleImage();
  } else {
    newImage = image;
  }

  return stub.PostModelOutputs(
    createModelInputs(newImage, CLARIFY_FACE_DETECTION_MODEL_ID, true),
    metadata,
    (err, res) => handleClarifaiResponse(err, res),
  );
};

export default detectFaces;
