import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";
import { toast } from "sonner";

interface ReviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  revieweeName: string;
  revieweeAvatar?: string;
  revieweeId: string;
  taskId: string;
  isOwnerReviewingHelper: boolean; // true if owner is reviewing helper, false if helper is reviewing owner
  onSubmit: (rating: number, comment: string, revieweeId: string, taskId: string) => Promise<void>;
}

export function ReviewDialog({
  open,
  onOpenChange,
  revieweeName,
  revieweeAvatar,
  revieweeId,
  taskId,
  isOwnerReviewingHelper,
  onSubmit,
}: ReviewDialogProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }

    setSubmitting(true);
    try {
      await onSubmit(rating, comment, revieweeId, taskId);
      toast.success("Review submitted successfully!");
      // Reset form
      setRating(0);
      setComment("");
      onOpenChange(false);
    } catch (error) {
      toast.error("Failed to submit review");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setRating(0);
    setComment("");
    setHoveredRating(0);
    onOpenChange(false);
  };

  const reviewTarget = isOwnerReviewingHelper ? "helper" : "owner";
  const reviewTargetName = isOwnerReviewingHelper ? "Helper" : "Owner";

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Write a Review</DialogTitle>
          <DialogDescription>
            Share your experience with {revieweeName}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Reviewee Info */}
          <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
            <Avatar className="w-16 h-16">
              <AvatarImage src={revieweeAvatar} alt={revieweeName} />
              <AvatarFallback className="bg-primary text-white">
                {revieweeName.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{revieweeName}</div>
              <div className="text-sm text-muted-foreground">Reviewing {reviewTargetName}</div>
            </div>
          </div>

          {/* Rating */}
          <div className="space-y-3">
            <Label>Rating *</Label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="focus:outline-none"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                >
                  <Star
                    className={`w-8 h-8 transition-colors ${
                      star <= (hoveredRating || rating)
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
              {rating > 0 && (
                <span className="ml-2 text-sm text-muted-foreground">
                  {rating} {rating === 1 ? "star" : "stars"}
                </span>
              )}
            </div>
          </div>

          {/* Comment */}
          <div className="space-y-2">
            <Label htmlFor="comment">Your Review (Optional)</Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={`Share your experience working with ${revieweeName}...`}
              rows={4}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose} disabled={submitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={submitting || rating === 0}>
              {submitting ? "Submitting..." : "Submit Review"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

