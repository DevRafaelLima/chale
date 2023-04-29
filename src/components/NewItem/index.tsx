import { FC } from 'react'
import TNewItem from '../../types/NewItem'
import './index.scss'

export const NewItem: FC<TNewItem> = ({ urlImg, title, subtitle }) => {

    return (
        <div className='NewItem'>
            <img src={urlImg} width={150} alt="" />
            <div className='info'>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}
