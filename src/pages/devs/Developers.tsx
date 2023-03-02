import { Card, Search } from '../../components';
import { data } from '../../data/data';
import { Welcome } from '../../interfaces/interfaces';
import * as SC from './Developers.Styles';

export const Developers = ({ Department, Title }: any) => {

  const item = data.filter(item => item.department == Department)

  return (
    <SC.container>
      <Search Title={Title} />
      <SC.cards>
        {
          item.map((item: Welcome) => {
            return (
              <Card {...item} key={item.first_name} />
            )
          })
        }
      </SC.cards>
    </SC.container>
  )
}
