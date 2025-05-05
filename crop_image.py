from PIL import Image
import os

def crop_image(input_path, output_path, crop_width, crop_height):
    """
    Crop an image by removing specified pixels from width and height.
    
    Args:
        input_path: Path to the input image
        output_path: Path to save the cropped image
        crop_width: Number of pixels to remove horizontally
        crop_height: Number of pixels to remove vertically
    """
    try:
        # Open the image
        img = Image.open(input_path)
        
        # Get original dimensions
        original_width, original_height = img.size
        print(f"Original image dimensions: {original_width} x {original_height}")
        
        # Calculate new dimensions
        new_width = original_width - crop_width
        new_height = original_height - crop_height
        
        if new_width <= 0 or new_height <= 0:
            print("Error: Crop dimensions are larger than the image dimensions.")
            return
        
        # Crop the image (keeping the top-left portion)
        cropped_img = img.crop((0, 0, new_width, new_height))
        
        # Save the cropped image
        cropped_img.save(output_path)
        
        print(f"Image cropped successfully. New dimensions: {new_width} x {new_height}")
        print(f"Saved to: {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    # Paths
    input_image = "images/Main_Bg.jpg"
    output_image = "images/Main_Bg_cropped.jpg"
    
    # Crop dimensions
    crop_width = 191  # pixels to remove horizontally
    crop_height = 105  # pixels to remove vertically
    
    # Crop the image
    crop_image(input_image, output_image, crop_width, crop_height)
    
    # Ask if user wants to replace the original
    replace = input("Do you want to replace the original image? (y/n): ")
    if replace.lower() == 'y':
        # Backup the original
        backup_path = "images/Main_Bg_original.jpg"
        os.rename(input_image, backup_path)
        os.rename(output_image, input_image)
        print(f"Original image backed up to: {backup_path}")
        print(f"Original image replaced with cropped version.")
    else:
        print(f"Cropped image saved as: {output_image}")
