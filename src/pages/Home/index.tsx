import { Header, NewItem } from '../../components'
import TNewItem from '../../types/NewItem'
import './index.scss'

const newsItem: TNewItem[] = [
  { urlImg: '/public/imagens/apartamento.jpg', title: 'Apartamento', subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
  { urlImg: '/public/imagens/restaurante.jpg', title: 'Restaurante', subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
  { urlImg: '/public/imagens/piscina.jpg', title: 'Piscina', subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' }

];
export const PageIndex = () => {
  return (
    <>
      <Header />
      <div className='PageIndex'>
        <article>
          <h2>Porque nós o usamos? </h2>
          <p>É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero).</p>
          <p>É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero). </p>
          <p>É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero). </p>
        </article>
        <aside>
          {newsItem.map((newItem: TNewItem) => (
            <NewItem urlImg={newItem.urlImg} title={newItem.title} subtitle={newItem.subtitle} />
          ))}
        </aside>
      </div>
    </>
  )
}
