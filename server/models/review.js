import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    // Who wrote the review
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    // Who is being reviewed
    reviewee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    // Which task this review is for
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
      required: true,
    },
    // Rating (1-5 stars)
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    // Optional comment
    comment: {
      type: String,
      trim: true,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate reviews (one reviewer can only review one reviewee once per task)
reviewSchema.index({ reviewer: 1, reviewee: 1, task: 1 }, { unique: true });

const Review = mongoose.model('Review', reviewSchema);

export default Review;

