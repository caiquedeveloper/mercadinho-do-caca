import React from 'react'
import './Produtos.css'
import { FaWhatsapp } from "react-icons/fa";

const produtos = [
  { "nome": "Água mineral vitalli 20L", "preco": 12.00, "img": null },
  { "nome": "Água mineral açaí 20L", "preco": 14.00, "img": null },
  { "nome": "Garrafão completo", "preco": 35.00, "img": null },
  { "nome": "Carvão", "preco": 10.00, "img": null },
  { "nome": "Gás de cozinha", "preco": 110.00, "img": null },
  { "nome": "Maionese", "preco": 3.50, "img": null },
  { "nome": "Vinagre", "preco": 2.50, "img": null },
  { "nome": "Ketchup", "preco": 6.00, "img": null },
  { "nome": "Nescau", "preco": 14.50, "img": null },
  { "nome": "Goiabada", "preco": 4.30, "img": null },
  { "nome": "Milho verde", "preco": 4.99, "img": null },
  { "nome": "Leite condensado", "preco": 8.50, "img": null },
  { "nome": "Creme de Leite", "preco": 3.99, "img": null },
  { "nome": "Biscoito poca zoi", "preco": 4.00, "img": null },
  { "nome": "Rosquinha", "preco": 5.50, "img": null },
  { "nome": "Coco Ralado", "preco": 3.25, "img": null },
  { "nome": "Massa de bolo", "preco": 5.50, "img": null },
  { "nome": "Piraquê", "preco": 5.00, "img": null },
  { "nome": "Ervilha", "preco": 4.00, "img": null },
  { "nome": "Chá", "preco": 4.50, "img": null },
  { "nome": "Leite de côco", "preco": 4.50, "img": null },
  { "nome": "Sabão em pó", "preco": 6.00, "img": null },
  { "nome": "Desinfetante", "preco": 6.50, "img": null },
  { "nome": "Pregador", "preco": 3.50, "img": null },
  { "nome": "Detergente", "preco": 2.99, "img": null },
  { "nome": "Abs noturno", "preco": 6.00, "img": null },
  { "nome": "Óleo", "preco": 10.00, "img": null },
  { "nome": "Açúcar", "preco": 4.75, "img": null },
  { "nome": "Macarrão espaguete", "preco": 2.80, "img": null },
  { "nome": "Macarrão parafuso", "preco": 3.25, "img": null },
  { "nome": "Feijão", "preco": 7.00, "img": null },
  { "nome": "Arroz", "preco": 5.80, "img": null },
  { "nome": "Vela", "preco": 6.25, "img": null },
  { "nome": "Milho de pipoca", "preco": 4.25, "img": null },
  { "nome": "Miojo", "preco": 2.00, "img": null },
  { "nome": "Biscoito marilan", "preco": 7.50, "img": null },
  { "nome": "Waffer vitarella", "preco": 1.25, "img": null },
  { "nome": "Biscoito Balducco", "preco": 2.50, "img": null },
  { "nome": "Trigo c/f", "preco": 6.70, "img": null },
  { "nome": "Trigo s/f", "preco": 5.70, "img": null },
  { "nome": "Waffer bauducco", "preco": 2.25, "img": null },
  { "nome": "Molho tomate", "preco": 2.25, "img": null },
  { "nome": "Café", "preco": 19.00, "img": null },
  { "nome": "Caldo kinnor", "preco": 1.20, "img": null },
  { "nome": "Sal", "preco": 1.75, "img": null },
  { "nome": "Drops", "preco": 1.00, "img": null },
  { "nome": "Chiclete free", "preco": 1.50, "img": null },
  { "nome": "Pó roial", "preco": 5.65, "img": null },
  { "nome": "Bolinho", "preco": 2.25, "img": null },
  { "nome": "Toddy", "preco": 7.99, "img": null },
  { "nome": "Biscoito recheadi", "preco": 2.75, "img": null },
  { "nome": "Sazon", "preco": 4.00, "img": null },
  { "nome": "Azeitona", "preco": 2.50, "img": null },
  { "nome": "Sardinha", "preco": 6.70, "img": null },
  { "nome": "Presto barba", "preco": 2.00, "img": null },
  { "nome": "Maisena", "preco": 6.00, "img": null },
  { "nome": "Aveia", "preco": 4.00, "img": null },
  { "nome": "Pilar", "preco": 6.00, "img": null },
  { "nome": "Água sanitária", "preco": 2.99, "img": null },
  { "nome": "Leite", "preco": 7.00, "img": null },
  { "nome": "Baygon", "preco": 17.50, "img": null },
  { "nome": "Bombril", "preco": 2.00, "img": null },
  { "nome": "Fralda", "preco": 19.50, "img": null },
  { "nome": "Absorvente", "preco": 4.50, "img": null },
  { "nome": "Esponja", "preco": 2.00, "img": null },
  { "nome": "Creme dental", "preco": 3.50, "img": null },
  { "nome": "Downy", "preco": 15.00, "img": null },
  { "nome": "Condicionador", "preco": 12.50, "img": null },
  { "nome": "Shampoo", "preco": 11.00, "img": null },
  { "nome": "Papel higiênico", "preco": 5.00, "img": null },
  { "nome": "Desodorante", "preco": 18.00, "img": null },
  { "nome": "Sabonete johnson", "preco": 2.65, "img": null },
  { "nome": "Sabonete lux", "preco": 2.90, "img": null },
  { "nome": "Sabonete albany", "preco": 2.35, "img": null },
  { "nome": "Pedra sanitária", "preco": 2.00, "img": null },
  { "nome": "Escova de dente", "preco": 4.00, "img": null },
  { "nome": "Cotonete", "preco": 2.80, "img": null }
];


const Produtos = () => {
  return (
    <section className='container-produto'>
      <div className="produto">
        <img src="https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-a15-65-128gb-azul-escuro-4g-4gb-ram-cam-tripla-50mp-selfie-13mp-5000mah-dual-chip/magazineluiza/237216400/8c0192d3b90d74ca14b80fc40dfd277d.jpg" alt="" />
        <span>titulo</span>
        <h1>R$0,00</h1>
        <button><FaWhatsapp /></button>
      </div>
      <div className="produto">
        <img src="https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-a15-65-128gb-azul-escuro-4g-4gb-ram-cam-tripla-50mp-selfie-13mp-5000mah-dual-chip/magazineluiza/237216400/8c0192d3b90d74ca14b80fc40dfd277d.jpg" alt="" />
        <span>titulo</span>
        <h1>R$0,00</h1>
        <button><FaWhatsapp /></button>
      </div>
      <div className="produto">
        <img src="https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-a15-65-128gb-azul-escuro-4g-4gb-ram-cam-tripla-50mp-selfie-13mp-5000mah-dual-chip/magazineluiza/237216400/8c0192d3b90d74ca14b80fc40dfd277d.jpg" alt="" />
        <span>titulo</span>
        <h1>R$0,00</h1>
        <button><FaWhatsapp /></button>
      </div>
      <div className="produto">
        <img src="https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-a15-65-128gb-azul-escuro-4g-4gb-ram-cam-tripla-50mp-selfie-13mp-5000mah-dual-chip/magazineluiza/237216400/8c0192d3b90d74ca14b80fc40dfd277d.jpg" alt="" />
        <span>titulo</span>
        <h1>R$0,00</h1>
        <button><FaWhatsapp /></button>
      </div>
      <div className="produto">
        <img src="https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-a15-65-128gb-azul-escuro-4g-4gb-ram-cam-tripla-50mp-selfie-13mp-5000mah-dual-chip/magazineluiza/237216400/8c0192d3b90d74ca14b80fc40dfd277d.jpg" alt="" />
        <span>titulo</span>
        <h1>R$0,00</h1>
        <button><FaWhatsapp /></button>
      </div>
      <div className="produto">
        <img src="https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-a15-65-128gb-azul-escuro-4g-4gb-ram-cam-tripla-50mp-selfie-13mp-5000mah-dual-chip/magazineluiza/237216400/8c0192d3b90d74ca14b80fc40dfd277d.jpg" alt="" />
        <span>titulo</span>
        <h1>R$0,00</h1>
        <button><FaWhatsapp /></button>
      </div>
      <div className="produto">
        <img src="https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-a15-65-128gb-azul-escuro-4g-4gb-ram-cam-tripla-50mp-selfie-13mp-5000mah-dual-chip/magazineluiza/237216400/8c0192d3b90d74ca14b80fc40dfd277d.jpg" alt="" />
        <span>titulo</span>
        <h1>R$0,00</h1>
        <button><FaWhatsapp /></button>
      </div>
      <div className="produto">
        <img src="https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-a15-65-128gb-azul-escuro-4g-4gb-ram-cam-tripla-50mp-selfie-13mp-5000mah-dual-chip/magazineluiza/237216400/8c0192d3b90d74ca14b80fc40dfd277d.jpg" alt="" />
        <span>titulo</span>
        <h1>R$0,00</h1>
        <button><FaWhatsapp /></button>
      </div>
      <div className="produto">
        <img src="https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-a15-65-128gb-azul-escuro-4g-4gb-ram-cam-tripla-50mp-selfie-13mp-5000mah-dual-chip/magazineluiza/237216400/8c0192d3b90d74ca14b80fc40dfd277d.jpg" alt="" />
        <span>titulo</span>
        <h1>R$0,00</h1>
        <button><FaWhatsapp /></button>
      </div>
      <div className="produto">
        <img src="https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-a15-65-128gb-azul-escuro-4g-4gb-ram-cam-tripla-50mp-selfie-13mp-5000mah-dual-chip/magazineluiza/237216400/8c0192d3b90d74ca14b80fc40dfd277d.jpg" alt="" />
        <span>titulo</span>
        <h1>R$0,00</h1>
        <button><FaWhatsapp /></button>
      </div>
      <div className="produto">
        <img src="https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-a15-65-128gb-azul-escuro-4g-4gb-ram-cam-tripla-50mp-selfie-13mp-5000mah-dual-chip/magazineluiza/237216400/8c0192d3b90d74ca14b80fc40dfd277d.jpg" alt="" />
        <span>titulo</span>
        <h1>R$0,00</h1>
        <button><FaWhatsapp /></button>
      </div>
    </section>
  )
}

export default Produtos

