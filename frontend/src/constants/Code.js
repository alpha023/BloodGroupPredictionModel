 export const PythonCode = `
 # All The Necessary Imports
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.callbacks import ReduceLROnPlateau

# Data Preparation with Image Augmentation
train_datagen = ImageDataGenerator(rescale=1/255,
                                   shear_range=0.2,
                                   zoom_range=0.2,
                                   horizontal_flip=True)
training_set = train_datagen.flow_from_directory('/content/drive/MyDrive/DeepLearning/FingerPrint_Detection/dataset/training_set',
                                                 target_size=(128, 128),
                                                 batch_size=32,
                                                 class_mode='categorical')

test_datagen = ImageDataGenerator(rescale=1/255)
test_set = test_datagen.flow_from_directory('/content/drive/MyDrive/DeepLearning/FingerPrint_Detection/dataset/test_set',
                                            target_size=(128, 128),
                                            batch_size=32,
                                            class_mode='categorical')

# Model Building
cnn = tf.keras.models.Sequential()

# Adding convolutional and pooling layers
cnn.add(tf.keras.layers.Conv2D(filters=32, kernel_size=3, activation='relu', input_shape=[128, 128, 3]))
cnn.add(tf.keras.layers.MaxPool2D(pool_size=2, strides=2))

cnn.add(tf.keras.layers.Conv2D(filters=64, kernel_size=3, activation='relu'))
cnn.add(tf.keras.layers.MaxPool2D(pool_size=2, strides=2))

cnn.add(tf.keras.layers.Conv2D(filters=128, kernel_size=3, activation='relu'))
cnn.add(tf.keras.layers.MaxPool2D(pool_size=2, strides=2))

# Flattening and Fully Connected Layers
cnn.add(tf.keras.layers.Flatten())
cnn.add(tf.keras.layers.Dense(units=256, activation='relu'))
cnn.add(tf.keras.layers.Dropout(0.5))  # Dropout layer to reduce overfitting
cnn.add(tf.keras.layers.Dense(units=8, activation='softmax'))  # Use '8' for number of classes

# Model Compilation
cnn.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Learning Rate Scheduler
lr_scheduler = ReduceLROnPlateau(monitor='val_loss', factor=0.5, patience=3, min_lr=0.00001)

# Model Training
cnn.fit(x=training_set, validation_data=test_set, epochs=50, callbacks=[lr_scheduler])

`;