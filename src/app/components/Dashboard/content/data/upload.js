import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Upload() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', selectedFile);

            const res = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(res.data);
            alert('Image uploaded successfully!');
        } catch (error) {
            console.error('Error uploading image: ', error);
            alert('Failed to upload image.');
        }
    };

    return (
        <div className='h-full grid place-items-center'>
            <label htmlFor="file-upload" className='cursor-pointer'>
                <div className='relative bg-[#D9D9D9] w-[70px] h-[70px] rounded-full mt-3 items-center '>
                    <FontAwesomeIcon icon={faPlus} className='text-4xl mx-[19px] my-4' />
                    <input
                        id='file-upload'
                        type="file"
                        onChange={handleFileChange}
                        className='absolute inset-0 opacity-0 cursor-pointer '
                    />
                </div>
            </label>
            <button onClick={handleUpload} className='mt-4 px-4 py-1  text-black rounded'>
                Ajouter une image
            </button>
        </div>
    );
}
