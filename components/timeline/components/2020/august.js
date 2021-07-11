import PostTimeLine from '../PostTimeline';
import DateEntry from '../DateEntry';
import TimeLineEntry from '../TimeLineEntry';

const August = () => {
  return (
    <>
      <DateEntry year={2020} month="August" />
      <TimeLineEntry
        title="Published new post"
        date="August 24, 2020"
        type="post"
        isLastElement={false}
      >
        <PostTimeLine
          title="What is a Mock and Unit testing?"
          description="In this post, I have explained the basics of Mock and Unit testing with example"
          postUrl="/writing/unit-testing"
        />
      </TimeLineEntry>
    </>
  );
};

export default August;
