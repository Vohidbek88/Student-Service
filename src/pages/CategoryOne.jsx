import React, { useEffect, useState } from 'react'
import axios from '../api'
import DragFile from '../components/DragFile';
import Card from '../components/Card';
const CategoryOne = (props) => {
    const [categ, setCateg] = useState();
    const [filesingle, setFile] = useState([]);
    useEffect(() => {

        const getObjCateg = async () => {
            try {
                const res = await axios.get(`http://api.edu-sts.uz:8030/api/v1/category-one-list/${props.id}/`);
                setCateg(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        const getSingleFile = async () => {
            const user_id = localStorage.getItem('user_id')
            try {
                const res = await axios.get(`http://api.edu-sts.uz:8030/api/v1/category-one-filter/${user_id}/${props.id}/`);
                setFile(res.data)
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getObjCateg()
        getSingleFile()

    }, [props])
    return (
        <div className='loading'>
            <h3>
                {categ ? categ.title : 'Loading...'}
            </h3>
            <div className='file-main'>
           
                {
                    filesingle.length == 0 && <DragFile {...categ} />
                }
                {
                    (filesingle.length>0) && filesingle.map(itrm => <Card key={itrm?.id} {...itrm} />)
                }
                 {
                filesingle.length==0 && <h4 style={{textAlign:'center'}}><i class="fa-regular fa-folder-open" ></i> Hozircha fayllar yo'q!</h4>
            }

            </div>

        </div>
    )
}

export default CategoryOne