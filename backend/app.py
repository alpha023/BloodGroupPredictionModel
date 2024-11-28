from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import io
import base64

app = Flask(__name__)
CORS(app)
blood_group_labels = ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-']  # Adjust according to your classes

# Load your trained CNN model
model = tf.keras.models.load_model('model/fingerprint_model.h5')

def preprocess_image(image):
    # Convert grayscale to RGB
    image = image.convert("RGB")
    
    # Resize and normalize the image
    image = image.resize((128, 128))  # Adjust size to match model input (no third dimension here)
    image = np.array(image) / 255.0   # Normalize if necessary
    image = image.reshape(( 1,128, 128, 3))  # Add batch and channel dimensions
    return image


@app.route('/predict', methods=['POST'])
def predict():

    data = request.get_json()
    if not data:
        return jsonify(blood_group='ERROR')


    # Decode the base64 image data
    image_data = base64.b64decode(data['image'])
    image = Image.open(io.BytesIO(image_data)).convert('L')  # Convert to grayscale if needed

    # Preprocess and make prediction
    processed_image = preprocess_image(image)
    predictions = model.predict(processed_image)
    predicted_index = int(np.argmax(predictions, axis=1)[0])  # Adjust if your model outputs labels

    blood_group = blood_group_labels[predicted_index]
    # Return the prediction as JSON
    return jsonify(blood_group=blood_group)

if __name__ == '__main__':
    app.run(debug=True)

# FOR GRAYSCALE RESPONSES


# 
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import tensorflow as tf
# import numpy as np
# from PIL import Image
# import io
# import base64

# app = Flask(__name__)
# CORS(app)

# # Define blood group labels (adjust to match your model's classes)
# blood_group_labels = ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-']

# # Load your trained CNN model
# model = tf.keras.models.load_model('model/fingerprint_model.h5')

# def preprocess_image(image):
#     """
#     Preprocesses the input image to match the model's expected format.
#     Assumes the model is trained on grayscale images.
#     """
#     # Convert image to grayscale (single channel)
#     image = image.convert("L")  # 'L' mode converts to grayscale

#     # Resize and normalize the image
#     image = image.resize((128, 128))  # Resize to match model input size
#     image = np.array(image) / 255.0   # Normalize pixel values to [0, 1]

#     # Reshape to add batch dimension and channel dimension (for grayscale: 1 channel)
#     image = image.reshape((1, 128, 128, 1))  # (batch_size, height, width, channels)
#     return image

# @app.route('/predict', methods=['POST'])
# def predict():
#     """
#     Handles prediction requests by decoding the base64 image, preprocessing it, 
#     and passing it to the model for prediction.
#     """
#     try:
#         # Parse the incoming JSON data
#         data = request.get_json()

#         # Decode the base64 image data
#         image_data = base64.b64decode(data['image'])
#         image = Image.open(io.BytesIO(image_data))  # Open the image

#         # Preprocess the image
#         processed_image = preprocess_image(image)

#         # Perform prediction
#         predictions = model.predict(processed_image)
#         predicted_index = int(np.argmax(predictions, axis=1)[0])  # Get the class index

#         # Map the predicted index to the blood group label
#         blood_group = blood_group_labels[predicted_index]

#         # Return the prediction as a JSON response
#         return jsonify({'blood_group': blood_group})

#     except Exception as e:
#         # Handle errors and return a message
#         return jsonify({'error': str(e)}), 400

# if __name__ == '__main__':
#     # Run the Flask application
#     app.run(debug=True)

# 