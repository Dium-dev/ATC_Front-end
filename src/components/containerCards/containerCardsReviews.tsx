import React from 'react';
import Reviews from '../cards/reviewsCard';
import { Carousel } from '../carousels/carousel';

interface TestimonialData {
  description: string;
  userImage: string;
  rating: number;
  userName: string;
}

interface ReviewsContainerProps {
    reviwes: TestimonialData[];
}

const ReviewsContainer: React.FC<ReviewsContainerProps> = ({ reviwes }: ReviewsContainerProps) => {

  const filteredReviews = reviwes.filter((review) => review.rating >= 3);

  return (
    <div className="my-8">
     <Carousel>
        {filteredReviews.map((review) => (
          <Reviews
            key={review.userName}
            description={review.description}
            userImage={review.userImage}
            rating={review.rating}
            userName={review.userName}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewsContainer;

