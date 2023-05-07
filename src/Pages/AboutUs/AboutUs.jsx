import React from 'react'
import Cassette from '../../Components/Cassette/CasseteCard'

const AboutUs = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Cassette obj1={Airam}></Cassette>
      <Cassette obj1={Marina}></Cassette>
      <Cassette obj1={Jav}></Cassette>
    </div>
  )
}

export default AboutUs

const Airam = {
  img: '../../../public/Foto_Airam_bn-01.jpg', //an URL String,
  heading: 'El del Back', // a String for the small top title
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus ipsa, ad labore, quod debitis, temporibus quo laboriosam alias magnam eum suscipit dolores dolorem velit numquam blanditiis iste animi vitae!', //a String with the paragraph
  title: 'Airam Tampocomelose', // The small lower title
  sub: '💻 @Airammg', //The subtitle
  id: 'AXX', //The character on the casette
}
const Marina = {
  img: '../../../public/IMG_20230330_094834-01-01.jpg', //an URL String,
  heading: 'Jane of all Trades', // a String for the small top title
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus ipsa, ad labore, quod debitis, temporibus quo laboriosam alias magnam eum suscipit dolores dolorem velit numquam blanditiis iste animi vitae!', //a String with the paragraph
  title: 'Marina nomelose', // The small lower title
  sub: '💻 @Marinass27', //The subtitle
  id: 'MXX', //The character on the casette
}
const Jav = {
  img: '../../../public/IMG_20230227_075812-01.jpg', //an URL String,
  heading: 'El pirado del brilli brilli', // a String for the small top title
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus ipsa, ad labore, quod debitis, temporibus quo laboriosam alias magnam eum suscipit dolores dolorem velit numquam blanditiis iste animi vitae!', //a String with the paragraph
  title: 'Javier Hdez Glez', // The small lower title
  sub: '💻 @Arguish', //The subtitle
  id: 'JHG', //The character on the casette
}
