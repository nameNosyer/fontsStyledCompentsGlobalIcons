import { 
  Container,
  Header,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
 } from './styles';

export interface TransactionCardProps {
  type:'positive' | 'negative';
  title: string;
  amount: string;
  category: {
    name: string;
    icon: string;
  };
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({data}:Props){
  return (
    <Container>
      <Header>
        <Title>{data.title}</Title>
        <Amount type={data.type}>
          {data.type === 'negative'? `- ${data.amount}`: data.amount}
        </Amount>
      </Header>

      <Footer>
        <Category>
          <Icon name={data.category.icon}/>
          <CategoryName >{data.category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}