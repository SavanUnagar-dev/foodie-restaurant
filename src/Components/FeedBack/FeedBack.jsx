import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const FeedBack = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (feedback && rating > 0) {
      setIsLoading(true);
      setTimeout(() => {
        setSubmitted(true);
        setIsLoading(false);
        setTimeout(() => {
          setSubmitted(false);
          setFeedback("");
          setRating(0);
        }, 3000);
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10 pb-10 bg-gray-100 text-white px-4">
      <motion.div
        initial={{ scale: 0, rotateY: 180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-gradient-to-r from-orange-200 to-purple-200  p-6 rounded-2xl shadow-2xl w-full max-w-md relative"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold text-center mb-4"
        >
          Give Your Feedback
        </motion.h2>

        {/* Star Rating with Smooth Animation */}
        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: star * 0.1 }}
              onClick={() => setRating(star)}
            >
              <Star
                className={`w-10 h-10 cursor-pointer transition-all ${
                  rating >= star ? "text-yellow-400" : "text-gray-500"
                }`}
              />
            </motion.button>
          ))}
        </div>

        {/* Feedback Input */}
        <motion.textarea
          className="w-full p-3 rounded-lg bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          rows="4"
          placeholder="Write your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        ></motion.textarea>

        {/* Submit Button */}
        <motion.button
          onClick={handleSubmit}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={isLoading}
          className="mt-4 w-full bg-yellow-400  text-black font-bold py-2 rounded-lg shadow-lg disabled:opacity-50"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </motion.button>

        {/* Thank You Message with Animation */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-80 rounded-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 p-6 rounded-xl text-center"
            >
              <h3 className="text-2xl font-bold">Thank You! 🎉</h3>
              <p>Your feedback has been submitted.</p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default FeedBack;
