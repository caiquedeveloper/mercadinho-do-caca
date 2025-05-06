import React from 'react'
import './Produtos.css'
import { FaWhatsapp } from "react-icons/fa";

const produtosList = [
  { nome: "Água mineral vitalli 20L", preco: 12.00, img: './produtos/aqua.png' },
  { nome: "Água mineral açaí 20L", preco: 14.00, img: './produtos/aqua.png' },
  { nome: "Garrafão completo", preco: 35.00, img: './produtos/aqua.png' },
  { nome: "Carvão", preco: 10.00, img: './produtos/carvao.webp' },
  { nome: "Gás de cozinha", preco: 110.00, img: './produtos/gas.jpg' },
  { nome: "Maionese", preco: 3.50, img: './produtos/maionese.webp' },
  { nome: "Vinagre", preco: 2.50, img: './produtos/vinagre.webp' },
  { nome: "Ketchup", preco: 6.00, img: './produtos/ket.webp' },
  { nome: "Nescau", preco: 14.50, img: './produtos/nescau.webp' },
  { nome: "Goiabada", preco: 4.30, img: './produtos/goiabada.webp' },
  { nome: "Milho verde", preco: 4.99, img: './produtos/m.webp' },
  { nome: "Leite condensado", preco: 8.50, img: './produtos/lc.webp' },
  { nome: "Creme de Leite", preco: 3.99, img: './produtos/cl.webp' },
  { nome: "Biscoito poca zoi", preco: 4.00, img: './produtos/zoi.png' },
  { nome: "Rosquinha", preco: 5.50, img: './produtos/ros.webp' },
  { nome: "Coco Ralado", preco: 3.25, img: './produtos/cocor.jfif' },
  { nome: "Massa de bolo", preco: 5.50, img: './produtos/db.jpg' },
  { nome: "Piraquê", preco: 5.00, img: './produtos/qj.png' },
  { nome: "Ervilha", preco: 4.00, img: './produtos/ev.jfif' },
  { nome: "Chá", preco: 4.50, img: './produtos/cha.webp' },
  { nome: "Leite de côco", preco: 4.50, img: './produtos/lcc.webp' },
  { nome: "Sabão em pó", preco: 6.00, img: './produtos/sp.webp' },
  { nome: "Desinfetante", preco: 6.50, img: './produtos/ps.jfif' },
  { nome: "Pregador", preco: 3.50, img: './produtos/' },
  { nome: "Detergente", preco: 2.99, img: './produtos/prendeb.webp' },
  { nome: "Abs noturno", preco: 6.00, img: './produtos/abs.webp' },
  { nome: "Óleo", preco: 10.00, img: './produtos/sol.png' },
  { nome: "Açúcar", preco: 4.75, img: './produtos/ac.jpg' },
  { nome: "Macarrão espaguete", preco: 2.80, img: './produtos/maca.web' },
  { nome: "Macarrão parafuso", preco: 3.25, img: './produtos/parafuso.webp' },
  { nome: "Feijão", preco: 7.00, img: './produtos/feijao.jfif' },
  { nome: "Arroz", preco: 5.80, img: './produtos/arroz.jfif' },
  { nome: "Vela", preco: 6.25, img: './produtos/vela.jfif' },
  { nome: "Milho de pipoca", preco: 4.25, img: './produtos/pi.webp' },
  { nome: "Miojo", preco: 2.00, img: './produtos/mi.webp' },
  { nome: "Biscoito marilan", preco: 7.50, img: './produtos/ma.jpg' },
  { nome: "Waffer vitarella", preco: 1.25, img: './produtos/mira;png' },
  { nome: "Biscoito Balducco", preco: 2.50, img: './produtos/biscoito,jfif' },
  { nome: "Trigo c/f", preco: 6.70, img: './produtos/tric.jpg' },
  { nome: "Trigo s/f", preco: 5.70, img: './produtos/tris.jpg' },
  { nome: "Waffer bauducco", preco: 2.25, img: './produtos/' },
  { nome: "Molho tomate", preco: 2.25, img: './produtos/' },
  { nome: "Café", preco: 19.00, img: './produtos/' },
  { nome: "Caldo kinnor", preco: 1.20, img: './produtos/' },
  { nome: "Sal", preco: 1.75, img: './produtos/' },
  { nome: "Drops", preco: 1.00, img: './produtos/' },
  { nome: "Chiclete free", preco: 1.50, img: './produtos/' },
  { nome: "Pó roial", preco: 5.65, img: './produtos/' },
  { nome: "Bolinho", preco: 2.25, img: './produtos/' },
  { nome: "Toddy", preco: 7.99, img: './produtos/' },
  { nome: "Biscoito recheadi", preco: 2.75, img: './produtos/' },
  { nome: "Sazon", preco: 4.00, img: './produtos/' },
  { nome: "Azeitona", preco: 2.50, img: './produtos/' },
  { nome: "Sardinha", preco: 6.70, img: './produtos/' },
  { nome: "Presto barba", preco: 2.00, img: './produtos/' },
  { nome: "Maisena", preco: 6.00, img: './produtos/' },
  { nome: "Aveia", preco: 4.00, img: './produtos/' },
  { nome: "Pilar", preco: 6.00, img: './produtos/' },
  { nome: "Água sanitária", preco: 2.99, img: './produtos/' },
  { nome: "Leite", preco: 7.00, img: './produtos/' },
  { nome: "Baygon", preco: 17.50, img: './produtos/' },
  { nome: "Bombril", preco: 2.00, img: './produtos/' },
  { nome: "Fralda", preco: 19.50, img: './produtos/' },
  { nome: "Absorvente", preco: 4.50, img: './produtos/' },
  { nome: "Esponja", preco: 2.00, img: './produtos/' },
  { nome: "Creme dental", preco: 3.50, img: './produtos/' },
  { nome: "Downy", preco: 15.00, img: './produtos/' },
  { nome: "Condicionador", preco: 12.50, img: './produtos/' },
  { nome: "Shampoo", preco: 11.00, img: './produtos/' },
  { nome: "Papel higiênico", preco: 5.00, img: './produtos/' },
  { nome: "Desodorante", preco: 18.00, img: './produtos/' },
  { nome: "Sabonete johnson", preco: 2.65, img: './produtos/' },
  { nome: "Sabonete lux", preco: 2.90, img: './produtos/' },
  { nome: "Sabonete albany", preco: 2.35, img: './produtos/' },
  { nome: "Pedra sanitária", preco: 2.00, img: './produtos/' },
  { nome: "Escova de dente", preco: 4.00, img: './produtos/' },
  { nome: "Cotonete", preco: 2.80, img: './produtos/' }
];


const Produtos = () => {
  
  return (
    <section className='container-produto'>
      {produtosList.map((item) => (
          <div className="produto">
            <img src={item.img} alt="" />
            <span>{item.nome}</span>
            <h1>R${item.preco}</h1>
            <button><FaWhatsapp /></button>
          </div>
        ))}

    </section>
  )
}

export default Produtos

