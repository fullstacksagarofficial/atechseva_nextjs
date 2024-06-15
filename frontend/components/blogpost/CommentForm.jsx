import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentForm = ({ blog }) => {
  const [formData, setFormData] = useState({
    author: '',
    email: '',
    comment: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.author) {
      errors.author = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.comment) {
      errors.comment = 'Comment is required';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:1337/api/blogcomments', {
        data: {
          name: formData.author,
          email: formData.email,
          comment: formData.comment,
          is_approved: false,
          blog: blog
        }
      });
      toast.success('Your comment has been submitted successfully. It will be displayed here once approved by the admin.');
      setFormData({ author: '', email: '', comment: '' });
      setLoading(false);
    } catch (error) {
      console.error('Error submitting comment', error);
      toast.error('Error submitting comment. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div id="comments" className="comments-area space-y-8 my-10">
      <div className="comment-full">
        <div id="respond" className="comment-respond">
          <h3 id="reply-title" className="comment-reply-title text-2xl font-semibold mb-4">
            Leave a Reply
            <small>
              <a
                rel="nofollow"
                id="cancel-comment-reply-link"
                href="#respond"
                className="text-sm text-blue-500 hover:underline"
                style={{ display: "none" }}
              >
                Cancel reply
              </a>
            </small>
          </h3>
          <form id="commentform" className="comment-form space-y-6" onSubmit={handleSubmit} noValidate>
            <p className="comment-notes text-lg text-gray-600">
              <span id="email-notes">
                Your email address will not be published.
              </span>
              <span className="required-field-message ms-2">
                Required fields are marked <span className="required text-red-500">*</span>
              </span>
            </p>
            <div className="flex space-x-4">
              <p className="comment-form-author flex-1">
                <label htmlFor="author" className="block font-medium text-gray-700">
                  Name <span className="required text-red-500">*</span>
                </label>
                <input
                  id="author"
                  placeholder="Name*"
                  name="author"
                  type="text"
                  className="mt-1 block w-full py-4 px-3 focus:outline-none border border-gray-200 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                  value={formData.author}
                  onChange={handleChange}
                  required
                />
                {errors.author && <span className="text-red-500 text-sm">{errors.author}</span>}
              </p>
              <p className="comment-form-email flex-1">
                <label htmlFor="email" className="block font-medium text-gray-700">
                  Email <span className="required text-red-500">*</span>
                </label>
                <input
                  id="email"
                  placeholder="Email*"
                  name="email"
                  type="email"
                  className="mt-1 block w-full py-4 px-3 focus:outline-none border border-gray-200 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </p>
            </div>
            <p className="comment-form-comment">
              <label htmlFor="comment" className="block font-medium text-gray-700">
                Comment <span className="required text-red-500">*</span>
              </label>
              <textarea
                placeholder="Comment*"
                id="comment"
                name="comment"
                className="mt-1 block w-full py-4 px-3 focus:outline-none border border-gray-200 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                value={formData.comment}
                onChange={handleChange}
                required
              />
              {errors.comment && <span className="text-red-500 text-sm">{errors.comment}</span>}
            </p>
            <p className="form-submit">
              <button
                type="submit"
                id="submit"
                className="submit bg-lime-500 text-white py-3 px-5 rounded-md shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
              >
                {loading ? 'Posting...' : 'Post Comment'}
              </button>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  );
};

export default CommentForm;
``
