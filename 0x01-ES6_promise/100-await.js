import { uploadPhoto, createUser } from './utils.js';
export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo, user };
  } catch (error) {
    console.error('An error occurred:', error);
    return { photo: null, user: null };
  }
}
