import { Card, Search } from '../../components';
import { data } from '../../data/data';
import { Welcome } from '../../interfaces/interfaces';
import * as SC from './Developers.Styles';

export const Developers = () => {
  return (
    <SC.container>
      <Search />
      <SC.cards>
        {
          data.map((item: Welcome) => {
            return (
              <Card {...item} key={item.first_name} />
            )
          })
        }
      </SC.cards>
    </SC.container>
  )
}
