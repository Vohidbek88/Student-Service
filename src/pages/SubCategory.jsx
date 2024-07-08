import axios from '../api';
import React, { useEffect, useState } from 'react'
import DragFile from '../components/DragFile';
import Card from '../components/Card';
const SubCategory = (props) => {
    const [categ, setCateg] = useState();
    const [filesingle, setFile] = useState([]);
    useEffect(() => {

        const getObjCateg = async () => {
            try {
                const res = await axios.get(`http://api.edu-sts.uz:8030/api/v1/subcategory-two-list/${props.id}/`);
                setCateg(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        const getSingleFile = async () => {
            const user_id=localStorage.getItem('user_id')
            try {
                const res = await axios.get(`http://api.edu-sts.uz:8030/api/v1/subcategory-two-file-filter/${user_id}/${props.id}`);
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
            {categ ? categ.title:'Loading...'}: {filesingle.length>0 && filesingle[0].sub_title}
            </h3>
            <DragFile {...categ}/>
         <div className='container'>
            {
                filesingle.length==0 && <h4><i class="fa-regular fa-folder-open"></i> Hozircha fayllar yo'q!</h4>
            }
         {
            filesingle.length >0 &&  filesingle.map(item=><Card key={item?.id} {...item}/>)
           }
         </div>

        </div>
  )
}

export default SubCategory