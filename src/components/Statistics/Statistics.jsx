import PropTypes from 'prop-types';
import { Item, List, Text, Stars, Stats } from './Statistics.styled';
import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const starArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const totalPositiveStars = Math.floor(positivePercentage / 10);

  return (
    <List>
      <Item>
        <Text>Good: {good}</Text>
      </Item>
      <Item>
        <Text>Neutral: {neutral}</Text>
      </Item>
      <Item>
        <Text>Bad: {bad}</Text>
      </Item>
      <Item>
        <Text>Total: {total}</Text>
      </Item>
      <Item>
        <Text>Positive feedback: {positivePercentage} %</Text>
      </Item>
      <Item>
        <Stars>
          {starArr.map((el, index) => (
            <IconContext.Provider
              key={index}
              value={{
                color: `${index >= totalPositiveStars ? '#ccc' : 'orange'}`,
              }}
            >
              <AiFillStar />
            </IconContext.Provider>
          ))}
          <Stats>
            {totalPositiveStars} \ {starArr.length}
          </Stats>
        </Stars>
      </Item>
    </List>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
