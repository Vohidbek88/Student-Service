
import gpa from '../assets/imgaes/gpa.png'
import innova from '../assets/imgaes/innova.png'
import innova2 from '../assets/imgaes/innova2.png'
import innova3 from '../assets/imgaes/innova3.png'
import itsert from '../assets/imgaes/itsert.png'
import mahaliyhaka from '../assets/imgaes/mahaliyhaka.png'
import umumiy from '../assets/imgaes/umumiy.png'
import til from '../assets/imgaes/til.png'
const Nizompart = (props) => {
  console.log(props);
if(props && props.title=="Talabgorning so‘ngi ikki semestrda fanlardan olgan baholarining  o‘rtacha miqdoriga ko‘ra: GPA"){
    return <img src={gpa} alt={props.title} />
}else if(props && props.title=="Xorijiy tillarni bilish darajasi sertifikati"){
    return <img src={til} alt={props.title} />
}else if(props && props.title=="Xalqaro IT-sertifikat mavjudligi"){
    return <img src={itsert} alt={props.title} />
}else if(props && props.title=="Mahalliy va xorijiy hakaton yoki IT-tanlovlardagi ishtiroki"){
    return <img src={mahaliyhaka} alt={props.title} />
}else if(props && props.title=="Umumiy faoliyati: talabgor tomonidan yozilgan esse"){
    return <img src={umumiy} alt={props.title} />
}else if(props && props.title=="Umumiy faoliyati: Ijtimoiy faolligi (ma’naviy-ma’rifiy hamda turli xil yoshlar tadbirlarida  ishtiroki)"){
    return <img src={umumiy} alt={props.title} />
}else if(props && props.sub_title=='Axborot tizimi va resurslari yaratilishidagi ishtiroki'){
    return <img src={innova} alt={props.title} />
}else if(props && props.sub_title=='Talabgorlarning ilmiy jurnallardagi maqolalari'){
    return <img src={innova2} alt={props.title} />
}else{
    return <img src={innova3} alt={props.title} />
}
   
}

export default Nizompart