import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { database } from '../firebase';
import { useLocation } from 'react-router-dom'
import { updateDoc, doc } from 'firebase/firestore';

function Notes() {

    const location = useLocation()
    const data = location.state
    const [displayValue, setDisplayValue] = useState(data.description)

    const handleChange = (e) => {
        setDisplayValue(e)
    }

    // console.log(displayValue);

    const editDescription = async () => {
        const oneDoc = doc(database, 'notes', data.id)
        console.log(oneDoc);
        updateDoc(oneDoc, { description: displayValue })
    }

    useEffect(() => {
        editDescription()
    }, [displayValue])

    return (
        <>
            <div>
                <h2 className='mt-2'>{data.title}</h2>
                <ReactQuill className='mt-3' style={{ height: '100px' }} placeholder='Enter details here....' value={displayValue} onChange={(e) => handleChange(e)} />
            </div>
        </>
    )
}

export default Notes