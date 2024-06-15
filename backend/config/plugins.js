// plugins.js
module.exports = ({ env }) => ({
  tinymce: {
      enabled: true,
      config: {
          editor: {
              outputFormat: "html",
              editorConfig: {
                  height: 500,
                  plugins:
                      'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                  toolbar:
                  'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight |  numlist bullist indent outdent | emoticons charmap | removeformat',
                  
              },
          },
      },
  },
});