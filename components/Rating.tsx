"use client"
import { Rating, RatingStar } from 'flowbite-react';


export default function RatingIndicator({ rated }: { rated: number }) {
    const rating = Array.from({ length: 5 }, (_, index) => index + 1);
    return (
        <Rating>
            {rating.map(rate => {
                if (rate <= rated) {
                    return <RatingStar key={rate} />
                } else {
                    return <RatingStar key={rate} filled={false} />
                }
            })}
            <p className="ml-2 text-sm font-medium text-gray-500">{rated} out of 5</p>
        </Rating>
    );
}
