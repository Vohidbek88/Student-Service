import React, { useContext, useRef, useState } from 'react';
import axios from '../api';
import { ServicesContext } from '../context';
import '../assets/FileUpload.css';
const DragFile = (props) => {
    const { userData } = useContext(ServicesContext);
    const [file, setFile] = useState(null);
    const [msg, setMsg] = useState('');
    const [uploadProgress, setProgress] = useState(0)
    const inputRef = useRef();

    const handleDrop = async () => {
        if (!file) {
            setMsg('File not selected!');
            return;
        }
        const form = new FormData();
        form.append('file', file);
        const checkTitle = props.sub_title ? 'sub_title' : 'title'
        form.append('student', userData?.id);
        form.append(checkTitle, props.id);

        setMsg('Uploading...');
        const checkUrl = props.sub_title ? 'https://api.edu-sts.uz/api/v1/subcategory-two-file-create-delete-student/' : 'https://api.edu-sts.uz/api/v1/category-one-student-file-create-delete/'
        try {
            const response = await axios.post(checkUrl, form,
                {
                    onUploadProgress: (progres) => {
                        const precentR = Math.round(progres.loaded * 100 / progres.total);
                        setProgress(precentR)
                    }
                }
            );
            setMsg('Successfully uploaded!');
            window.location.reload()
            console.log(response.data);
        } catch (error) {
            console.log(error);
            setMsg('Tarmoq xatosi yoki faylni ochirib qayta yukang!');
        }
    };

    const clearFile = () => {
        inputRef.current.value = '';
        setFile(null);
        setProgress(0);
        setMsg('')
    }


    return (
        <div>
            <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
            {
                !file && (
                    <button onClick={() => inputRef.current.click()} className='file-btn'>
                        <i className="fa-solid fa-upload"></i> <span>Fayl yuklash</span>
                    </button>
                )
            }
            {
                file && (
                    <>
                        <div className='file-card'>
                            <span><i className="fa-solid fa-file"></i></span>
                            <div className="file-info">
                                <div style={{ flex: 1 }}>
                                    <h6>{file.name}</h6>
                                    <div className='progress-bg'>
                                        <div style={{ width: `${uploadProgress}%` }} className="progress"></div>
                                    </div>
                                </div>
                                <span>
                                    {uploadProgress}%
                                </span>


                            </div>
                        </div>
                        {
                            msg != 'Successfully uploaded!' && <button onClick={handleDrop}>Upload</button>
                        }
                    </>
                )
            }

            {msg && <span style={{ color: 'red', marginLeft: '10px' }}>{msg} <i style={{ cursor: 'pointer' }} onClick={clearFile} className="fa-solid fa-trash"></i></span>}
        </div>
    );
};

export default DragFile;
