import React from 'react';
import CustomCard from 'components/CustomCard';
import CustomList from 'components/CustomList';
import { Default } from 'stories/CustomCard/CustomCard.stories';

export default {
  title: 'Components/CustomList',
  component: CustomList,
  subcomponents: { CustomCard },
  argTypes: {
    animals: 'object'
  },
};

export const Empty = (args) => <CustomList {...args}></CustomList>;

Empty.args = {
  title: 'Reptiles'
}

export const Reptiles = (args) => (
  <CustomList {...args}>
    {animal => 
      <CustomCard title={animal.title} body={animal.body} image={animal.image}/>
    }
  </CustomList>
);

Reptiles.args = {
  title: 'Reptiles Comunes',
  animals: [{
    title: 'El dragón de Komodo',
    body: 'El dragón de Komodo o Varanus komodoensis está clasificado como la especie de lagarto más grande del mundo.',
    image: 'https://t2.ev.ltmcdn.com/es/posts/9/6/9/el_dragon_de_komodo_2969_2_600.jpg'
  }, {
    title: 'Camaleón común',
    body: 'El camaleón común o Chamaeleo chamaeleon es una especie presenta un cuerpo arqueado pero comprimido por el lateral.',
    image: 'https://t2.ev.ltmcdn.com/es/posts/9/6/9/camaleon_comun_2969_3_600.jpg'
  }, {
    title: 'Cobra real',
    body: 'La cobra real o Ophiophagus hannah es una serpiente que habita amplias zonas de India, Birmania, Sur de China y otras zonas del Sudeste asiático.',
    image: 'https://t1.ev.ltmcdn.com/es/posts/9/6/9/cobra_real_2969_10_600.jpg'
  }, {
    title: 'Tortuga boba',
    body: 'La tortuga boba, tortuga caguama o Caretta caretta es una tortuga marina pelágica que puede llegar a alcanzar los 90 cm de longitud.',
    image: 'https://t1.ev.ltmcdn.com/es/posts/9/6/9/tortuga_boba_2969_7_600.jpg'
  }]
}