import './index.scss'
export const Header = () => {
  return (
    <header className="Header">
      <div className="img-right">
        <img src='/imagens/topo-imagem-lateral.png'/>
        <div className='area-menu'>
            <div className='localizacao'>
              <p>Rio de janeiro - São Paulo - Belo Horizonte</p>
              <a href='#'>Resevar</a>
            </div>
            <div className='menusAndDepoimentos'>
              <div className='menus'>
                <ul>
                  <li>Home</li>
                  <li>História</li>
                  <li>Imprensa</li>
                  <li>Gastronomia</li>
                  <li>Contato</li>
                </ul>
              </div>
              <div className='depoimentos'>
                <img src="/imagens/depoimento.png"/>
              </div>
            </div>
        </div>
      </div>
      <div className="img-left">
        <img src="/imagens/logo.png" alt="" className='logo'/>
        <img src="/imagens/topo-imagem-principal.png" alt="" />
      </div>    
    </header>
  )
}
