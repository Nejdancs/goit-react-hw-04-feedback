import { useState, useReducer } from 'react';
import { Section, Statistics, Notification, FeedbackOptions } from 'components';

const initialValue = { good: 0, neutral: 0, bad: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + 1 };

    case 'neutral':
      return { ...state, neutral: state.neutral + 1 };

    case 'bad':
      return { ...state, bad: state.bad + 1 };

    default:
      throw new Error('Type not found');
  }
}

// useReducer
export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const { good, neutral, bad } = state;

  const countTotalFeedback = () => {
    const values = Object.values(state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = (total, good) => {
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(total, good);
  const options = Object.keys(state);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onClick={dispatch} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

// useState
// export const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);
//   const feedbackType = { good, neutral, bad };

//   const handleClick = key => {
//     switch (key) {
//       case 'good':
//         setGood(good => good + 1);
//         break;

//       case 'neutral':
//         setNeutral(neutral => neutral + 1);
//         break;

//       case 'bad':
//         setBad(bad => bad + 1);
//         break;

//       default:
//         throw new Error('Type not found');
//     }
//   };

//   const countTotalFeedback = () => {
//     return good + neutral + bad;
//   };

//   const countPositiveFeedbackPercentage = (total, good) => {
//     const percentage = Math.round((good / total) * 100);
//     return percentage;
//   };

//   const total = countTotalFeedback();
//   const positivePercentage = countPositiveFeedbackPercentage(total, good);
//   const options = Object.keys(feedbackType);

//   return (
//     <>
//       <Section title="Please leave feedback">
//         <FeedbackOptions options={options} onClick={handleClick} />
//       </Section>

//       <Section title="Statistics">
//         {total > 0 ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     </>
//   );
// };

// export class oldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = key => {
//     this.setState(prevState => ({
//       [key]: prevState[key] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const values = Object.values(this.state);
//     return values.reduce((acc, value) => acc + value, 0);
//   };

//   countPositiveFeedbackPercentage = (total, good) => {
//     const percentage = Math.round((good / total) * 100);
//     return percentage;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage(
//       total,
//       good
//     );
//     const options = Object.keys(this.state);

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={options} onClick={this.handleClick} />
//         </Section>

//         <Section title="Statistics">
//           {total > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
