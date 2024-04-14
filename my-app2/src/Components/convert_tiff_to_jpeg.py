from PIL import Image
import io
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/convert-tiff-to-jpeg', methods=['POST'])
def convert_image():
    try:
        if request.method == 'POST':
            file = request.files['tiff_image']
            with file.stream as file_stream:
                with Image.open(file_stream) as image:
                    # Handle potential color mode incompatibility
                    if image.mode not in ('RGB', 'RGBA'):
                        image = image.convert('RGB')  # Convert to RGB if necessary
                    output_buffer = io.BytesIO()
                    image.save(output_buffer, format="JPEG")
                    output_buffer.seek(0)
                    return jsonify({"imageUrl": output_buffer.read().decode('base64')})
        else:
            return jsonify({"error": "Invalid request method"})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)  # Adjust host and port as needed
