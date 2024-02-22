// import { ErrorMessage } from "../ErrorMessage";
// import React, { HTMLAttributes } from "react";
// import ReactStars from "react-rating-stars-component";

// type RatingBarType = React.DetailedHTMLProps<
//   HTMLAttributes<HTMLDivElement>,
//   HTMLDivElement
// > &
//   Partial<{
//     starCount: number;
//     color: string;
//     activeColor: string;
//     isEditable: boolean;
//     errors: any[];
//     value: number;
//     size: number;
//   }>;

// const RatingBar = ({
//   children,
//   className,
//   starCount = 5,
//   color = "grey",
//   activeColor = "red",
//   isEditable = false,
//   errors = [],
//   ...restProps
// }: RatingBarType) => {
//   return (
//     <>
//       <ReactStars
//         edit={isEditable}
//         classNames={className}
//         count={starCount}
//         isHalf={false}
//         color={color}
//         activeColor={activeColor}
//         key={restProps.value || 1}
//         {...restProps}
//       />
//       <ErrorMessage errors={errors} />
//       {children}
//     </>
//   );
// };

// export { RatingBar };
