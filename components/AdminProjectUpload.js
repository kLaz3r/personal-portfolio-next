import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { db, storage, timestamp } from '../lib/firebase';

const AdminProjectUpload = () => {
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [projectName, setProjectName] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [projectFile, setProjectFile] = useState(null);
  const projectInputChangeHandler = (e) => {
    switch (e.target.id) {
      case 'nameInput':
        setProjectName(e.target.value);
        break;
      case 'linkInput':
        setProjectLink(e.target.value);
        break;
      case 'fileInput':
        if (e.target.files) {
          setProjectFile(e.target.files);
        }
        break;

      default:
        break;
    }
  };

  const projectSubmitHandler = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `projects/${projectFile[0].name}`);
    const collectionRef = collection(db, 'projects');

    uploadBytes(storageRef, projectFile[0]).then(async (snapshot) => {
      getDownloadURL(storageRef).then(async (img) => {
        console.log(img);
        await addDoc(collectionRef, {
          img,
          name: projectName,
          link: projectLink,
        });
        setProjectFile(null);
        setProjectLink('');
        setProjectName('');
        console.log('done uploading');
      });
    });
  };

  //   storageRef.put(projectFile[0]).on(
  //     'state_changed',
  //     (snap) => {
  //       let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
  //       setProgress(percentage);
  //     },
  //     (err) => {
  //       setError(err);
  //     },
  //     async () => {
  //       const img = await storageRef.getDownloadURL();
  //       await collectionRef.add({ img, name: projectName, link: projectLink });
  //       setProjectFile(null);
  //       setProjectLink('');
  //       setProjectName('');
  //       console.log('done uploading');
  //     }
  //   );
  // };

  return (
    <div className='AdminProjectUpload'>
      <h1>Upload project here</h1>
      <form onSubmit={projectSubmitHandler}>
        <label htmlFor='name'>Name</label>
        <input
          id='nameInput'
          value={projectName}
          onChange={projectInputChangeHandler}
          type='text'
          placeholder='Name'
        />
        <label htmlFor='link'>Link</label>
        <input
          id='linkInput'
          value={projectLink}
          onChange={projectInputChangeHandler}
          type='text'
          placeholder='Link'
        />
        <label htmlFor='screenshot'>Screenshot</label>
        <input
          id='fileInput'
          onChange={projectInputChangeHandler}
          type='file'
        />
        <button type='submit'>Submit</button>
      </form>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {projectFile && <div>{projectFile.name}</div>}
        {projectFile && (
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

export default AdminProjectUpload;
