import React from 'react';
import BannerMain from '../BannerMain';
import Carousel from '../Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';

function Videos() {
  return (
    <>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Em celebração ao incrivel jogo Minecraft ! Assista esse video musica sobre Animation Life Minecraft"
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Carousel
        category={dadosIniciais.categorias[6]}
      />

      <Carousel
        category={dadosIniciais.categorias[7]}
      />
      
      <Carousel
        category={dadosIniciais.categorias[8]}
      />

      <Carousel
        category={dadosIniciais.categorias[9]}
      />

      <Carousel
        category={dadosIniciais.categorias[10]}
      />
    </>
    
  );
}

export default Videos;
