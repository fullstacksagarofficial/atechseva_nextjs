import React, { useState, useEffect } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/blogcomments?populate=*');
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        const data = await response.json();
        if (!data.data) {
          throw new Error('Data structure from API is incorrect');
        }
        const commentsData = data.data.map(comment => ({
          id: comment.id,
          name: comment.attributes.name,
          email: comment.attributes.email,
          commentText: comment.attributes.comment,
          createdAt: comment.attributes.createdAt,
          replies: comment.attributes.reply && Array.isArray(comment.attributes.reply.data)
            ? comment.attributes.reply.data.map(reply => ({
                id: reply.id,
                name: reply.attributes.name,
                email: reply.attributes.email,
                commentText: reply.attributes.comment,
                createdAt: reply.attributes.createdAt
              }))
            : []
        }));
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching comments:', error);
        // Handle error as needed, e.g., show an error message to the user
      }
    };
  
    fetchComments();
  }, []);
  
  return (
    <section className="bg-white py-4 lg:py-6 antialiased px-4">
      <div className="mx-auto">
        {comments.map(comment => (
          <article key={comment.id} className="bg-white rounded-lg mb-6 shadow-md">
            {/* Comment section */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  {/* Profile picture and commenter details */}
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Profile"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{comment.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      <time dateTime={comment.createdAt} title={comment.createdAt}>
                        {new Date(comment.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                    </p>
                  </div>
                </div>
                <button
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
                  aria-label="Comment settings"
                >
                  {/* Add your settings icon/svg here */}
                </button>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{comment.commentText}</p>
            </div>
  
            {/* Replies section */}
            {comment.replies.length > 0 && (
              <div className="bg-gray-100 dark:bg-gray-800 rounded-b-lg">
                {comment.replies.map(reply => (
                  <div key={reply.id} className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-start mb-2">
                      {/* Profile picture and replier details */}
                      <img
                        className="w-8 h-8 rounded-full mr-2"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Profile"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{reply.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          <time dateTime={reply.createdAt} title={reply.createdAt}>
                            {new Date(reply.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </time>
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{reply.commentText}</p>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default CommentSection;
