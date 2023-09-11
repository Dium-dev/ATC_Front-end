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
  return (
    <div className="my-8">
        <Carousel>
            {reviwes.map((reviwes) => {
                const { description, userImage, userName, rating } = reviwes;
                return (<Reviews
                    key={userName}
                    description={description}
                    userImage={userImage}
                    rating={rating}
                    userName={userName}
                />
                );
            }
            )}
        </Carousel>
    </div>
  );
};

export default ReviewsContainer;

