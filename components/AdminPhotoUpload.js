import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { db, storage, timestamp } from '../lib/firebase';

const AdminPhotoUpload = () => {
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      uploadPhoto(selected);
      setError('');
    } else {
      setError('Please select an image file (png or jpg)');
    }
  };
  const uploadPhoto = (file) => {
    const storageRef = ref(storage, `photos/${file.name}`);
    const collectionRef = collection(db, 'images');

    uploadBytes(storageRef, file).then(async (snapshot) => {
      getDownloadURL(storageRef).then(async (url) => {
        console.log(url);
        const createdAt = Timestamp.now();
        await addDoc(collectionRef, { url, createdAt });
        setFile(null);
        setProgress(null);
        console.log('done uploading');
      });
    });

    // storageRef.put(file).on(
    //   'state_changed',
    //   (snap) => {
    //     let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
    //     console.log(percentage);
    //     setProgress(percentage);
    //     setFile(file);
    //   },
    //   (err) => {
    //     setError(err);
    //   },
    //   async () => {
    //     const url = await storageRef.getDownloadURL();
    //     const createdAt = Timestamp;
    //     await addDoc(collectionRef, { url, createdAt });
    //     setFile(null);
    //     setProgress(null);
    //     console.log('done uploading');
    //   }
  };

  return (
    <div className='AdminPhotoUpload'>
      <h1>Upload photo here</h1>
      <input onChange={handleChange} type='file' name='upload' id='upload' />
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && (
          <div className='progress-bar'>
            <div className='progress-fill' style={{ width: `${progress}%` }}>
              Uploading
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPhotoUpload;
