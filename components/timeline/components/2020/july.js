import PostTimeLine from '../PostTimeline';
import DateEntry from '../DateEntry';
import TimeLineEntry from '../TimeLineEntry';

const July = () => {
  return (
    <>
      <DateEntry year={2020} month="July" />
      <TimeLineEntry
        title="Published new post"
        date="July 11, 2020"
        type="post"
        isLastElement
      >
        <PostTimeLine
          title="What is a Closure?"
          description="In this post, I have explained the basics of Closure in Javascript with example"
          postUrl="/writing/closure"
        />
      </TimeLineEntry>
    </>
  );
};

export default July;
