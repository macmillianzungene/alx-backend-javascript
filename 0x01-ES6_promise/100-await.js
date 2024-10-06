import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() { // eslint-disable-line no-unused-vars
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
