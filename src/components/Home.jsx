import fileUrl from '../assets/vazirliknizom2023.pdf'
const Home = () => {
  
  return (
    <div className='home'>
        <div className='info'>
        <h1>Talabalarga online xizmat ko'rsatish platformasi.</h1>
        <h2>O‘zbekiston Respublikasi Raqamli texnologiyalar vazirligi stipendiyasini
tayinlash tartibi to‘g‘risida,</h2>
        <a href={fileUrl} target="_blank" download='vazirliknizom2023.pdf'> Nizom bilan tanishish! <i className="fa-solid fa-download"></i></a>
       
        </div>
        <img width={'700'} src="https://podrobno.uz/upload/iblock/940/756127373751497.jpg" alt="student" />
           
    </div>
  )
}

export default Home